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

async function scrapeProperty(page, url) {
  try {
    console.log(`Scraping: ${url}`);
    await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Try different common selectors for property data
    const propertyData = await page.evaluate(() => {
      // Helper function to safely get text content
      const getText = (selector) => {
        const element = document.querySelector(selector);
        return element ? element.textContent.trim() : null;
      };

      // Helper function to get all text from multiple elements
      const getAllText = (selector) => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements).map(el => el.textContent.trim());
      };

      // Helper function to get image sources
      const getImages = (selector) => {
        const elements = document.querySelectorAll(selector);
        return Array.from(elements).map(img => img.src || img.dataset.src).filter(Boolean);
      };

      // Try various common selectors for property websites
      const selectors = {
        title: [
          'h1', '.property-title', '.listing-title', '.title', 
          '[data-testid="property-title"]', '.property-heading'
        ],
        price: [
          '.price', '.property-price', '[data-testid="price"]', 
          '.listing-price', '.cost', '.amount'
        ],
        bedrooms: [
          '.bedrooms', '.beds', '[data-testid="bedrooms"]', 
          '.property-bedrooms', '.bed-count'
        ],
        bathrooms: [
          '.bathrooms', '.baths', '[data-testid="bathrooms"]', 
          '.property-bathrooms', '.bath-count'
        ],
        area: [
          '.area', '.size', '.property-size', '[data-testid="size"]',
          '.square-meters', '.sqm'
        ],
        description: [
          '.description', '.property-description', '.listing-description',
          '[data-testid="description"]', '.property-details'
        ],
        features: [
          '.features li', '.amenities li', '.property-features li',
          '.feature-list li', '.highlights li'
        ],
        status: [
          '.status', '.property-status', '.listing-status',
          '[data-testid="status"]', '.availability'
        ],
        images: [
          '.gallery img', '.property-images img', '.carousel img',
          '.slideshow img', '.photos img', 'img[alt*="property"]'
        ]
      };

      // Try to find data using different selectors
      const findValue = (selectorArray) => {
        for (const selector of selectorArray) {
          const value = getText(selector);
          if (value) return value;
        }
        return null;
      };

      const findImages = (selectorArray) => {
        for (const selector of selectorArray) {
          const images = getImages(selector);
          if (images.length > 0) return images;
        }
        return [];
      };

      const findFeatures = (selectorArray) => {
        for (const selector of selectorArray) {
          const features = getAllText(selector);
          if (features.length > 0) return features;
        }
        return [];
      };

      // Extract data
      const data = {
        url: window.location.href,
        title: findValue(selectors.title),
        price: findValue(selectors.price),
        bedrooms: findValue(selectors.bedrooms),
        bathrooms: findValue(selectors.bathrooms),
        area: findValue(selectors.area),
        description: findValue(selectors.description),
        features: findFeatures(selectors.features),
        status: findValue(selectors.status),
        images: findImages(selectors.images),
        // Also try to get all text content for manual review
        allText: document.body.innerText.substring(0, 2000),
        // Get page title as fallback
        pageTitle: document.title
      };

      return data;
    });

    // Extract property ID from URL
    const matches = url.match(/\/(\d+)\//);
    propertyData.id = matches ? matches[1] : url.split('/').pop();

    return propertyData;

  } catch (error) {
    console.error(`Error scraping ${url}:`, error.message);
    return {
      url,
      error: error.message,
      id: url.match(/\/(\d+)\//) ? url.match(/\/(\d+)\//)[1] : url.split('/').pop()
    };
  }
}

async function scrapeAllProperties() {
  console.log('Starting Greeff property scraping...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set a realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const allProperties = [];

  // Scrape each property
  for (let i = 0; i < propertyUrls.length; i++) {
    console.log(`Progress: ${i + 1}/${propertyUrls.length}`);
    const propertyData = await scrapeProperty(page, propertyUrls[i]);
    allProperties.push(propertyData);
    
    // Small delay between requests to be respectful
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  await browser.close();

  // Save results to file
  const results = {
    timestamp: new Date().toISOString(),
    totalProperties: allProperties.length,
    properties: allProperties
  };

  fs.writeFileSync('greeff-properties.json', JSON.stringify(results, null, 2));
  console.log(`Scraping complete! Results saved to greeff-properties.json`);
  console.log(`Successfully scraped ${allProperties.length} properties`);

  // Show summary
  console.log('\n--- SUMMARY ---');
  allProperties.forEach((prop, index) => {
    console.log(`${index + 1}. ID: ${prop.id} - ${prop.title || prop.pageTitle || 'No title'}`);
    if (prop.error) console.log(`   ERROR: ${prop.error}`);
  });

  return allProperties;
}

// Run the scraper
scrapeAllProperties().catch(console.error);