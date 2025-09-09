const fs = require('fs');

// Read the current mockData
let mockDataContent = fs.readFileSync('src/lib/mockData.ts', 'utf8');

console.log('📊 UPDATING WITH REALISTIC PROPERTY STATUSES...\n');

// Define realistic statuses for properties - mix of available, under-offer, and sold
const statusUpdates = [
  { id: '2841345', status: 'available' },      // Sea Point Apartment - Available
  { id: '2828300', status: 'under-offer' },   // Renovator's Dream - Under Offer  
  { id: '2826904', status: 'available' },     // Camps Bay R95M - Available
  { id: '1213815', status: 'sold' },          // Bantry Bay R138M - Sold
  { id: '2531976', status: 'available' },     // Green Point - Available
  { id: '2435256', status: 'under-offer' },   // SIX ON N - Under Offer
  { id: '2416459', status: 'available' },     // Green Point Corner - Available
  { id: '2416445', status: 'sold' },          // Top Floor Ocean Views - Sold
  { id: '2388674', status: 'available' },     // Airbnb Gem - Available
  { id: '2266514', status: 'under-offer' },   // Top Floor Lock Up - Under Offer
  { id: '2266459', status: 'available' },     // Airbnb Ocean Views - Available
  { id: '1212138', status: 'sold' },          // Five-Bedroom Green Point - Sold
  { id: '1860791', status: 'available' },     // Stylish Duplex - Available
  { id: '1850150', status: 'available' },     // Sunny Sea Point - Available
  { id: '1814864', status: 'under-offer' },   // Spacious Sea Point - Under Offer
  { id: '1777419', status: 'available' },     // Exquisite Beachfront - Available
  { id: '1775642', status: 'sold' },          // 3-Bedroom Green Point - Sold
  { id: '1769944', status: 'available' },     // Granger Bay R56M - Available
  { id: '1555722', status: 'under-offer' },   // Atlantic Seaboard - Under Offer
  { id: '1447261', status: 'available' },     // 3 Bedroom House - Available
  { id: '1292598', status: 'available' },     // Ground Floor Oasis - Available
  { id: '1234603', status: 'sold' },          // Three Anchor Bay - Sold
  { id: '1102417', status: 'available' }      // Luxury Living - Available
];

// Update each property with realistic status
statusUpdates.forEach((update, index) => {
  console.log(`Property ${index + 1} (ID: ${update.id}):`);
  console.log(`  🏷️  Setting status to: ${update.status.toUpperCase()}`);
  
  // Find the property by ID and update its status
  const propertyRegex = new RegExp(
    `("id": "${update.id}",[\\s\\S]*?"status": )"[^"]*"`,
    'g'
  );
  
  const beforeLength = mockDataContent.length;
  mockDataContent = mockDataContent.replace(propertyRegex, `$1"${update.status}"`);
  
  if (mockDataContent.length !== beforeLength || mockDataContent.includes(`"status": "${update.status}"`)) {
    console.log(`  ✅ Successfully updated property ${update.id}`);
  } else {
    console.log(`  ⚠️  Property ${update.id} not found or already updated`);
  }
});

// Write the updated content back
fs.writeFileSync('src/lib/mockData.ts', mockDataContent);

console.log('\n🎉 REALISTIC PROPERTY STATUSES APPLIED!');
console.log('📊 Status Distribution:');

const statusCounts = statusUpdates.reduce((acc, update) => {
  acc[update.status] = (acc[update.status] || 0) + 1;
  return acc;
}, {});

console.log(`   ✅ Available: ${statusCounts.available || 0}`);
console.log(`   ⏳ Under Offer: ${statusCounts['under-offer'] || 0}`);
console.log(`   ❌ Sold: ${statusCounts.sold || 0}`);

console.log('\n🎯 Now property cards will show realistic status badges!');