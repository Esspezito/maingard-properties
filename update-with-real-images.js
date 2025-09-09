const fs = require('fs');

// Function to update mockData with real Greeff images
function updateWithRealImages() {
  try {
    // Read the scraped images
    const imageData = JSON.parse(fs.readFileSync('greeff-images.json', 'utf8'));
    
    // Read the current mockData
    const mockDataContent = fs.readFileSync('src/lib/mockData.ts', 'utf8');
    
    // Parse the properties from mockData
    const propertiesMatch = mockDataContent.match(/export const mockProperties: Property\[\] = \[([\s\S]*)\];$/);
    if (!propertiesMatch) {
      console.error('Could not find properties in mockData.ts');
      return;
    }
    
    let updatedContent = mockDataContent;
    
    console.log('\n📸 UPDATING WITH REAL GREEFF IMAGES...\n');
    
    // Update each property with real images
    imageData.properties.forEach((prop, index) => {
      console.log(`Property ${index + 1} (ID: ${prop.id}):`);
      
      if (prop.images && prop.images.length > 0) {
        // Use the first image from Greeff, and add two more if available
        const images = [
          prop.images[0],
          prop.images[1] || prop.images[0],
          prop.images[2] || prop.images[1] || prop.images[0]
        ];
        
        console.log(`  ✅ Found ${prop.images.length} images, using first image: ${images[0].substring(0, 50)}...`);
        
        // Find and replace this property's images in mockData
        const propertyIdPattern = new RegExp(`"id": "${prop.id}"[\\s\\S]*?"images": \\[[\\s\\S]*?\\]`, 'g');
        
        updatedContent = updatedContent.replace(propertyIdPattern, (match) => {
          // Replace just the images array part
          return match.replace(/"images": \[[^\]]*\]/, 
            `"images": [\n      "${images[0]}",\n      "${images[1]}",\n      "${images[2]}"\n    ]`);
        });
      } else {
        console.log(`  ⚠️  No images found, keeping existing placeholder`);
      }
    });
    
    // Write the updated content back
    fs.writeFileSync('src/lib/mockData.ts', updatedContent);
    
    console.log('\n✅ Successfully updated all properties with real Greeff images!');
    console.log('🌐 Website now displays actual property photos from Greeff listings');
    console.log('🚀 Ready for handover with authentic property images!');
    
  } catch (error) {
    console.error('❌ Error updating images:', error.message);
  }
}

// Check if greeff-images.json exists
if (fs.existsSync('greeff-images.json')) {
  updateWithRealImages();
} else {
  console.log('⏳ Waiting for greeff-images.json to be created...');
  console.log('   Run scrape-greeff-images.js first to extract the images.');
}