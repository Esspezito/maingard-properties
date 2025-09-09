const puppeteer = require('puppeteer');
const fs = require('fs');

// List of all 23 property URLs
const propertyUrls = [
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2841345/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2828300/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/camps-bay/house/2826904/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/bantry-bay/house/1213815/196-kloof-road/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/2531976/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2435256/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/2416459/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2416445/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/studio-apartment/2388674/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2266514/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2266459/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/house/1212138/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/house/1860791/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1850150/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1814864/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1777419/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/1775642/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/mouille-point/apartment/1769944/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1555722/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/house/1447261/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/sectional-title/1292598/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/three-anchor-bay/apartment/1234603/',
  'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1102417/'
];

async function scrapePropertyImages(page, url) {
  try {
    console.log(`Scraping images from: ${url}`);
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });

    // Wait for images to load
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Try multiple selectors to find property images
    const images = await page.evaluate(() => {
      const imageSelectors = [
        // Common gallery/slider selectors
        '.swiper-slide img',
        '.carousel img',
        '.gallery img',
        '.property-images img',
        '.slideshow img',
        '.slider img',
        '.photo-gallery img',
        '.image-gallery img',
        
        // Greeff specific selectors
        '.property-gallery img',
        '.listing-images img',
        '.main-image img',
        '.property-photo img',
        
        // Generic image selectors
        'img[src*="property"]',
        'img[src*="listing"]',
        'img[src*="greeff"]',
        'img[alt*="property"]',
        'img[alt*="bedroom"]',
        'img[alt*="living"]',
        
        // Fallback to any large images
        'main img',
        'article img',
        '.content img'
      ];

      let foundImages = [];
      
      // Try each selector
      for (const selector of imageSelectors) {
        const imgs = document.querySelectorAll(selector);
        imgs.forEach(img => {
          const src = img.src || img.dataset.src || img.dataset.lazySrc;
          if (src && !src.includes('logo') && !src.includes('icon') && !src.includes('avatar')) {
            foundImages.push(src);
          }
        });
        
        if (foundImages.length > 0) break; // Stop if we found images
      }

      // If still no images, get all images and filter
      if (foundImages.length === 0) {
        const allImages = document.querySelectorAll('img');
        allImages.forEach(img => {
          const src = img.src || img.dataset.src || img.dataset.lazySrc;
          if (src && 
              !src.includes('logo') && 
              !src.includes('icon') && 
              !src.includes('avatar') &&
              !src.includes('placeholder') &&
              (img.width > 200 || img.naturalWidth > 200)) {
            foundImages.push(src);
          }
        });
      }

      // Remove duplicates and return ALL images
      return [...new Set(foundImages)];
    });

    // Extract property ID from URL
    const matches = url.match(/\/(\d+)\//);
    const propertyId = matches ? matches[1] : url.split('/').pop();

    return {
      id: propertyId,
      url: url,
      images: images
    };

  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    const matches = url.match(/\/(\d+)\//);
    const propertyId = matches ? matches[1] : url.split('/').pop();
    return {
      id: propertyId,
      url: url,
      images: [],
      error: error.message
    };
  }
}

async function scrapeAllImages() {
  console.log('Starting Greeff image extraction...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set a realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const allPropertyImages = [];

  // Scrape each property
  for (let i = 0; i < propertyUrls.length; i++) {
    console.log(`Progress: ${i + 1}/${propertyUrls.length}`);
    const propertyImages = await scrapePropertyImages(page, propertyUrls[i]);
    allPropertyImages.push(propertyImages);
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  await browser.close();

  // Save results
  const results = {
    timestamp: new Date().toISOString(),
    totalProperties: allPropertyImages.length,
    properties: allPropertyImages
  };

  fs.writeFileSync('greeff-images.json', JSON.stringify(results, null, 2));
  console.log(`\n✅ Image extraction complete!`);
  console.log(`📁 Results saved to greeff-images.json`);
  
  // Show summary
  console.log('\n--- IMAGE EXTRACTION SUMMARY ---');
  allPropertyImages.forEach((prop, index) => {
    console.log(`${index + 1}. Property ${prop.id}: ${prop.images.length} images found`);
    if (prop.images.length > 0) {
      console.log(`   First image: ${prop.images[0]}`);
    } else {
      console.log(`   ⚠️  No images found`);
    }
  });

  return allPropertyImages;
}

// Run the scraper
scrapeAllImages().catch(console.error);