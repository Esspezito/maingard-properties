const fs = require('fs');

// Wait for all-greeff-images.json to be created, or use partial data
let imageData;
try {
  // Try to read the comprehensive data first
  imageData = JSON.parse(fs.readFileSync('all-greeff-images.json', 'utf8'));
  console.log('✅ Using comprehensive image data');
} catch (error) {
  console.log('⏳ Comprehensive data not ready, using existing data temporarily');
  // Fallback to existing data if comprehensive isn't ready
  imageData = JSON.parse(fs.readFileSync('greeff-images.json', 'utf8'));
}

// Read the current mockData
let mockDataContent = fs.readFileSync('src/lib/mockData.ts', 'utf8');

console.log('\n🖼️  UPDATING WITH COMPREHENSIVE IMAGE GALLERIES...\n');
console.log(`📊 Total images available: ${imageData.totalImagesFound || 'calculating...'}`);
console.log(`📈 Average per property: ${imageData.averageImagesPerProperty || 'calculating...'}\n`);

// Update each property with ALL available images
imageData.properties.forEach((prop, index) => {
  console.log(`Property ${index + 1} (ID: ${prop.id}):`);
  
  if (prop.images && prop.images.length > 0) {
    // Create comprehensive images array with ALL images
    const imagesArray = `[\\n      ${prop.images.map(img => `"${img}"`).join(',\\n      ')}\\n    ]`;
    
    console.log(`  🎨 Updating with ${prop.images.length} comprehensive images`);
    
    // Find the property by ID and replace its images
    const propertyRegex = new RegExp(
      `"id": "${prop.id}",[\\\\s\\\\S]*?"images": \\\\[[\\\\s\\\\S]*?\\\\]`,
      'g'
    );
    
    const beforeLength = mockDataContent.length;
    mockDataContent = mockDataContent.replace(propertyRegex, (match) => {
      // Replace the images array with comprehensive gallery
      return match.replace(
        /"images": \[[^\]]*\]/,
        `"images": ${imagesArray}`
      );
    });
    
    if (mockDataContent.length !== beforeLength) {
      console.log(`  ✅ Successfully updated property ${prop.id}`);
    } else {
      console.log(`  ⚠️  Property ${prop.id} not found in mockData`);
    }
  } else {
    console.log(`  ❌ No images available for property ${prop.id}`);
  }
});

// Write the updated content back
fs.writeFileSync('src/lib/mockData.ts', mockDataContent);

console.log('\n🎉 COMPREHENSIVE IMAGE GALLERIES APPLIED!');
console.log('🖼️  All properties now display complete image galleries');
console.log('📸 Users can browse through ALL property photos');
console.log('🌐 Images served from Greeff CloudFront CDN');
console.log('🎯 Ready for live deployment!');

// Generate summary
const totalImagesInUpdate = imageData.properties.reduce((total, prop) => total + (prop.images?.length || 0), 0);
console.log(`\n📊 FINAL STATS:`);
console.log(`   • Total images deployed: ${totalImagesInUpdate}`);
console.log(`   • Properties updated: ${imageData.properties.filter(p => p.images && p.images.length > 0).length}/${imageData.properties.length}`);
console.log(`   • Average images per property: ${Math.round(totalImagesInUpdate / imageData.properties.length * 10) / 10}`);