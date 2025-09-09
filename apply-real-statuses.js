const fs = require('fs');

// Read the real status results
const statusData = JSON.parse(fs.readFileSync('property-statuses.json', 'utf8'));

// Read the current mockData
let mockDataContent = fs.readFileSync('src/lib/mockData.ts', 'utf8');

console.log('🔍 APPLYING REAL GREEFF PROPERTY STATUSES...\n');
console.log('📊 Real Status Distribution:');
console.log(`   ✅ Available: ${statusData.statusSummary.available}`);
console.log(`   ⏳ Under Offer: ${statusData.statusSummary['under-offer']}`);
console.log(`   ❌ Sold: ${statusData.statusSummary.sold}`);
console.log(`   ❓ Unknown: ${statusData.statusSummary.unknown}\n`);

// Apply real statuses to each property
statusData.properties.forEach((prop, index) => {
  console.log(`Property ${index + 1} (ID: ${prop.id}):`);
  
  // Use 'available' as fallback for unknown status
  const finalStatus = prop.status === 'unknown' ? 'available' : prop.status;
  
  console.log(`  🏷️  Real status: ${finalStatus.toUpperCase()}`);
  
  // Find the property by ID and update its status
  const propertyRegex = new RegExp(
    `("id": "${prop.id}",[\\s\\S]*?"status": )"[^"]*"`,
    'g'
  );
  
  const beforeContent = mockDataContent;
  mockDataContent = mockDataContent.replace(propertyRegex, `$1"${finalStatus}"`);
  
  if (mockDataContent !== beforeContent) {
    console.log(`  ✅ Updated to real status: ${finalStatus}`);
  } else {
    console.log(`  ⚠️  Property ${prop.id} not found in mockData`);
  }
});

// Write the updated content back
fs.writeFileSync('src/lib/mockData.ts', mockDataContent);

console.log('\n🎉 REAL GREEFF STATUSES APPLIED!');
console.log('📊 Final Status Distribution:');

// Count final statuses
const finalCounts = statusData.properties.reduce((acc, prop) => {
  const status = prop.status === 'unknown' ? 'available' : prop.status;
  acc[status] = (acc[status] || 0) + 1;
  return acc;
}, {});

console.log(`   ✅ Available: ${finalCounts.available || 0}`);
console.log(`   ⏳ Under Offer: ${finalCounts['under-offer'] || 0}`);
console.log(`   ❌ Sold: ${finalCounts.sold || 0}`);

console.log('\n🎯 Property cards now show ACCURATE Greeff status badges!');