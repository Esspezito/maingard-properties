const fs = require('fs');

// List of all 23 property URLs
const properties = [
  { id: '2841345', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2841345/' },
  { id: '2828300', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2828300/' },
  { id: '2826904', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/camps-bay/house/2826904/' },
  { id: '1213815', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/bantry-bay/house/1213815/196-kloof-road/' },
  { id: '2531976', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/2531976/' },
  { id: '2435256', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2435256/' },
  { id: '2416459', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/2416459/' },
  { id: '2416445', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2416445/' },
  { id: '2388674', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/studio-apartment/2388674/' },
  { id: '2266514', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2266514/' },
  { id: '2266459', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2266459/' },
  { id: '1212138', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/house/1212138/' },
  { id: '1860791', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/house/1860791/' },
  { id: '1850150', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1850150/' },
  { id: '1814864', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1814864/' },
  { id: '1777419', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1777419/' },
  { id: '1775642', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/1775642/' },
  { id: '1769944', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/mouille-point/apartment/1769944/' },
  { id: '1555722', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1555722/' },
  { id: '1447261', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/house/1447261/' },
  { id: '1292598', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/sectional-title/1292598/' },
  { id: '1234603', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/three-anchor-bay/apartment/1234603/' },
  { id: '1102417', url: 'https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1102417/' }
];

const https = require('https');

async function fetchImages(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        // Extract JPG images
        const jpgPattern = /src="(https:\/\/d21tw07c6rnmp0\.cloudfront\.net[^"]*\.jpg)"/g;
        const images = [];
        let match;
        while ((match = jpgPattern.exec(data)) !== null) {
          if (!images.includes(match[1])) {
            images.push(match[1]);
          }
        }
        
        // If no JPGs found, try other image patterns
        if (images.length === 0) {
          const imgPattern = /<img[^>]+src="([^"]+)"/g;
          while ((match = imgPattern.exec(data)) !== null) {
            const src = match[1];
            if (src.includes('cloudfront') && !src.includes('logo') && !src.includes('icon')) {
              images.push(src);
            }
          }
        }
        
        resolve(images.slice(0, 3)); // Return first 3 images
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function extractAllImages() {
  console.log('🔍 Extracting JPG images from Greeff listings...\n');
  
  const results = {
    timestamp: new Date().toISOString(),
    totalProperties: properties.length,
    properties: []
  };
  
  for (const prop of properties) {
    console.log(`Property ${prop.id}...`);
    try {
      const images = await fetchImages(prop.url);
      results.properties.push({
        id: prop.id,
        url: prop.url,
        images: images
      });
      console.log(`  ✅ Found ${images.length} images`);
      if (images.length > 0) {
        console.log(`  📸 First: ${images[0].split('/').pop()}`);
      }
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
      results.properties.push({
        id: prop.id,
        url: prop.url,
        images: []
      });
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Save results
  fs.writeFileSync('greeff-jpg-images.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Extraction complete! Saved to greeff-jpg-images.json');
  
  return results;
}

extractAllImages().catch(console.error);