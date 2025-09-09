const puppeteer = require('puppeteer');
const fs = require('fs');

// All 23 property URLs
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

async function scrapePropertyStatus(page, url) {
  try {
    console.log(`🔍 Checking status for: ${url}`);
    await page.goto(url, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });

    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 3000));

    const status = await page.evaluate(() => {
      // Look for status indicators - common patterns on real estate sites
      const statusSelectors = [
        '.status',
        '.property-status', 
        '.listing-status',
        '[class*="status"]',
        '[class*="sold"]',
        '[class*="offer"]',
        '[class*="available"]',
        '.badge',
        '.label'
      ];

      // Check page text for status keywords
      const pageText = document.body.innerText.toLowerCase();
      
      // Check for sold indicators
      if (pageText.includes('sold') && !pageText.includes('sold by')) {
        return 'sold';
      }
      
      // Check for under offer indicators  
      if (pageText.includes('under offer') || pageText.includes('offer accepted') || pageText.includes('pending')) {
        return 'under-offer';
      }
      
      // Check for withdrawn/off market
      if (pageText.includes('withdrawn') || pageText.includes('off market') || pageText.includes('no longer available')) {
        return 'withdrawn';
      }

      // Check specific status elements
      for (const selector of statusSelectors) {
        const elements = document.querySelectorAll(selector);
        for (const el of elements) {
          const text = el.textContent.toLowerCase();
          if (text.includes('sold')) return 'sold';
          if (text.includes('under offer') || text.includes('pending')) return 'under-offer';
          if (text.includes('available')) return 'available';
        }
      }

      // Check if page indicates property is no longer available
      if (pageText.includes('property not found') || 
          pageText.includes('listing not found') ||
          pageText.includes('removed') ||
          document.title.toLowerCase().includes('not found')) {
        return 'removed';
      }

      // Default to available if property page loads normally
      return 'available';
    });

    // Extract property ID from URL
    const matches = url.match(/\/(\d+)\//);
    const propertyId = matches ? matches[1] : url.split('/').pop();

    console.log(`   📋 Property ${propertyId}: ${status.toUpperCase()}`);

    return {
      id: propertyId,
      url: url,
      status: status
    };

  } catch (error) {
    console.error(`❌ Error checking ${url}:`, error.message);
    const matches = url.match(/\/(\d+)\//);
    const propertyId = matches ? matches[1] : url.split('/').pop();
    
    // If we can't access the page, it might be removed/sold
    return {
      id: propertyId,
      url: url,
      status: 'unknown',
      error: error.message
    };
  }
}

async function updateAllPropertyStatuses() {
  console.log('🚀 Starting property status update for all 23 Greeff listings...\n');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    defaultViewport: { width: 1920, height: 1080 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Set realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const statusResults = [];

  // Check each property status
  for (let i = 0; i < propertyUrls.length; i++) {
    console.log(`\n📍 Progress: ${i + 1}/${propertyUrls.length}`);
    const result = await scrapePropertyStatus(page, propertyUrls[i]);
    statusResults.push(result);
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  await browser.close();

  // Save results
  const finalResults = {
    timestamp: new Date().toISOString(),
    totalProperties: statusResults.length,
    statusSummary: {
      available: statusResults.filter(p => p.status === 'available').length,
      'under-offer': statusResults.filter(p => p.status === 'under-offer').length,
      sold: statusResults.filter(p => p.status === 'sold').length,
      withdrawn: statusResults.filter(p => p.status === 'withdrawn').length,
      unknown: statusResults.filter(p => p.status === 'unknown').length
    },
    properties: statusResults
  };

  fs.writeFileSync('property-statuses.json', JSON.stringify(finalResults, null, 2));
  
  console.log('\n🎉 PROPERTY STATUS UPDATE COMPLETE!');
  console.log(`📁 Results saved to: property-statuses.json`);
  
  // Show summary
  console.log('\n--- STATUS SUMMARY ---');
  console.log(`✅ Available: ${finalResults.statusSummary.available}`);
  console.log(`⏳ Under Offer: ${finalResults.statusSummary['under-offer']}`);
  console.log(`❌ Sold: ${finalResults.statusSummary.sold}`);
  console.log(`🔄 Withdrawn: ${finalResults.statusSummary.withdrawn}`);
  console.log(`❓ Unknown: ${finalResults.statusSummary.unknown}`);

  return finalResults;
}

// Run the status update
updateAllPropertyStatuses().catch(console.error);