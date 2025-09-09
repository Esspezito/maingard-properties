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

async function extractAllPropertyImages(page, url) {
  try {
    console.log(`📸 Extracting ALL images from: ${url}`);
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 90000 
    });

    // Wait for dynamic content and images
    await new Promise(resolve => setTimeout(resolve, 8000));

    // Comprehensive image extraction
    const images = await page.evaluate(() => {
      // Get all images on the page
      const allImages = Array.from(document.querySelectorAll('img'));
      const foundImages = [];
      
      allImages.forEach(img => {
        // Get all possible image sources
        const sources = [
          img.src,
          img.dataset.src,
          img.dataset.lazySrc,
          img.dataset.original,
          img.getAttribute('data-src'),
          img.getAttribute('data-lazy'),
          img.getAttribute('data-original')
        ].filter(Boolean);

        sources.forEach(src => {
          if (src && 
              // Must be from CloudFront (Greeff's CDN)
              src.includes('d21tw07c6rnmp0.cloudfront.net') &&
              // Exclude logos, icons, etc.
              !src.includes('logo') && 
              !src.includes('icon') && 
              !src.includes('avatar') &&
              !src.includes('favicon') &&
              !src.includes('watermark') &&
              // Must be a reasonable size (property photos are usually large)
              (img.width > 100 || img.naturalWidth > 100 || src.includes('_w_') || src.includes('_h_'))) {
            foundImages.push(src);
          }
        });
      });

      // Also check for images in CSS background-image properties
      const elementsWithBg = Array.from(document.querySelectorAll('*'));
      elementsWithBg.forEach(el => {
        const bgImage = window.getComputedStyle(el).backgroundImage;
        if (bgImage && bgImage !== 'none') {
          const urlMatch = bgImage.match(/url\(["']?(.*?)["']?\)/);
          if (urlMatch && urlMatch[1] && urlMatch[1].includes('d21tw07c6rnmp0.cloudfront.net')) {
            foundImages.push(urlMatch[1]);
          }
        }
      });

      // Remove duplicates and return ALL unique images
      return [...new Set(foundImages)];
    });

    // Extract property ID from URL
    const matches = url.match(/\/(\d+)\//);
    const propertyId = matches ? matches[1] : url.split('/').pop();

    console.log(`   ✅ Found ${images.length} images for property ${propertyId}`);
    
    return {
      id: propertyId,
      url: url,
      images: images,
      totalImages: images.length
    };

  } catch (error) {
    console.error(`❌ Error extracting from ${url}:`, error.message);
    const matches = url.match(/\/(\d+)\//);
    const propertyId = matches ? matches[1] : url.split('/').pop();
    return {
      id: propertyId,
      url: url,
      images: [],
      totalImages: 0,
      error: error.message
    };
  }
}

async function extractAllImages() {
  console.log('🚀 Starting comprehensive image extraction from ALL 23 Greeff properties...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    defaultViewport: { width: 1920, height: 1080 },
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security'
    ]
  });

  const page = await browser.newPage();
  
  // Set realistic headers
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9'
  });

  const allResults = [];
  let totalImages = 0;

  // Process each property
  for (let i = 0; i < propertyUrls.length; i++) {
    console.log(`\n📍 Processing property ${i + 1}/${propertyUrls.length}`);
    const result = await extractAllPropertyImages(page, propertyUrls[i]);
    allResults.push(result);
    totalImages += result.totalImages;
    
    // Delay between requests to be respectful
    if (i < propertyUrls.length - 1) {
      console.log('   ⏳ Waiting before next property...');
      await new Promise(resolve => setTimeout(resolve, 4000));
    }
  }

  await browser.close();

  // Save comprehensive results
  const finalResults = {
    timestamp: new Date().toISOString(),
    totalProperties: allResults.length,
    totalImagesFound: totalImages,
    averageImagesPerProperty: Math.round(totalImages / allResults.length * 10) / 10,
    properties: allResults
  };

  fs.writeFileSync('all-greeff-images.json', JSON.stringify(finalResults, null, 2));
  
  console.log('\n🎉 COMPREHENSIVE IMAGE EXTRACTION COMPLETE!');
  console.log(`📁 Results saved to: all-greeff-images.json`);
  console.log(`📊 Total images extracted: ${totalImages}`);
  console.log(`📈 Average per property: ${Math.round(totalImages / allResults.length * 10) / 10}`);
  
  // Detailed summary
  console.log('\n--- COMPLETE IMAGE SUMMARY ---');
  allResults.forEach((prop, index) => {
    const status = prop.totalImages > 0 ? '✅' : '❌';
    console.log(`${index + 1}. ${status} Property ${prop.id}: ${prop.totalImages} images`);
    if (prop.totalImages > 0) {
      console.log(`   🖼️  Sample: ${prop.images[0]}`);
    } else if (prop.error) {
      console.log(`   ⚠️  Error: ${prop.error}`);
    }
  });

  return finalResults;
}

// Execute the comprehensive extraction
extractAllImages().catch(console.error);