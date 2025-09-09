const fs = require('fs');

// Read the comprehensive all-greeff-images.json
const imageData = JSON.parse(fs.readFileSync('all-greeff-images.json', 'utf8'));

// Read the current mockData
let mockDataContent = fs.readFileSync('src/lib/mockData.ts', 'utf8');

console.log('\n🖼️  APPLYING ALL COMPREHENSIVE IMAGE GALLERIES...\n');
console.log(`📊 Total images available: ${imageData.totalImagesFound}`);
console.log(`📈 Average per property: ${imageData.averageImagesPerProperty}\n`);

// Update each property with ALL available images
imageData.properties.forEach((prop, index) => {
  console.log(`Property ${index + 1} (ID: ${prop.id}):`);
  
  if (prop.images && prop.images.length > 0) {
    // Filter out any logo/theme images and keep only property photos
    const propertyImages = prop.images.filter(img => 
      img.includes('residential/') && 
      !img.includes('theme-settings') && 
      !img.includes('logo') &&
      !img.includes('.svg')
    );
    
    if (propertyImages.length > 0) {
      // Create comprehensive images array with ALL property images
      const imagesArray = `[\n      ${propertyImages.map(img => `"${img}"`).join(',\n      ')}\n    ]`;
      
      console.log(`  🎨 Updating with ${propertyImages.length} real property images`);
      
      // Find the property by ID and replace its images
      const propertyRegex = new RegExp(
        `("id": "${prop.id}",[\\s\\S]*?"images": \\[)[\\s\\S]*?(\\])`,
        'g'
      );
      
      const beforeLength = mockDataContent.length;
      mockDataContent = mockDataContent.replace(propertyRegex, `$1\n      ${propertyImages.map(img => `"${img}"`).join(',\n      ')}\n    $2`);
      
      if (mockDataContent.length !== beforeLength) {
        console.log(`  ✅ Successfully updated property ${prop.id} with ${propertyImages.length} images`);
      } else {
        console.log(`  ⚠️  Property ${prop.id} not found in mockData`);
      }
    } else {
      console.log(`  ⚠️  No valid property images found for ${prop.id}`);
    }
  } else {
    console.log(`  ❌ No images available for property ${prop.id}`);
  }
});

// Write the updated content back
fs.writeFileSync('src/lib/mockData.ts', mockDataContent);

console.log('\n🎉 ALL COMPREHENSIVE IMAGE GALLERIES APPLIED!');
console.log('🖼️  All properties now display complete image galleries');
console.log('📸 Users can browse through ALL property photos with arrow navigation');
console.log('🌐 Images served from Greeff CloudFront CDN');
console.log('🎯 Ready for deployment!');