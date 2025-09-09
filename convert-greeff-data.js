const fs = require('fs');

// Read the scraped data
const greeffData = JSON.parse(fs.readFileSync('greeff-properties.json', 'utf8'));

// Function to extract numbers from text
function extractNumber(text) {
  if (!text) return null;
  const match = text.match(/\d+/);
  return match ? parseInt(match[0]) : null;
}

// Function to determine property type from URL and title
function getPropertyType(url, title) {
  if (url.includes('/house/') || title.toLowerCase().includes('house')) return 'House';
  if (url.includes('/apartment/') || title.toLowerCase().includes('apartment')) return 'Apartment';
  if (url.includes('/studio-apartment/') || title.toLowerCase().includes('studio')) return 'Studio';
  if (url.includes('/sectional-title/')) return 'Sectional Title';
  return 'Property';
}

// Function to extract location from URL
function getLocation(url) {
  const parts = url.split('/');
  const cityIndex = parts.findIndex(part => part === 'cape-town');
  if (cityIndex !== -1 && cityIndex + 1 < parts.length) {
    const area = parts[cityIndex + 1].replace(/-/g, ' ');
    return area.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ') + ', Cape Town';
  }
  return 'Cape Town';
}

// Function to determine status (all appear to be available since they're on the website)
function getStatus() {
  return 'available';
}

// Function to create features array from property details
function createFeatures(property) {
  const features = [];
  
  // Add based on property info from the scraped text
  if (property.allText) {
    const text = property.allText.toLowerCase();
    
    if (text.includes('parking') || text.includes('garage')) features.push('Parking');
    if (text.includes('pool') || text.includes('swimming')) features.push('Swimming Pool');
    if (text.includes('garden')) features.push('Garden');
    if (text.includes('balcony')) features.push('Balcony');
    if (text.includes('terrace')) features.push('Terrace');
    if (text.includes('sea view') || text.includes('ocean view')) features.push('Sea Views');
    if (text.includes('mountain view')) features.push('Mountain Views');
    if (text.includes('secure') || text.includes('security')) features.push('Security');
    if (text.includes('airbnb') || text.includes('rental potential')) features.push('Rental Potential');
    if (text.includes('pet friendly')) features.push('Pet Friendly');
    if (text.includes('furnished')) features.push('Furnished');
  }
  
  return features.length > 0 ? features : ['Modern Property', 'Prime Location'];
}

// Function to extract description from the text
function getDescription(property) {
  if (!property.allText) return property.title || 'Luxury property in Cape Town';
  
  // Look for the main description in the text
  const text = property.allText;
  const sentences = text.split('.').filter(sentence => 
    sentence.length > 50 && 
    sentence.length < 300 &&
    !sentence.includes('Cookie') &&
    !sentence.includes('Privacy Policy') &&
    !sentence.includes('reCAPTCHA')
  );
  
  return sentences[0] ? sentences[0].trim() + '.' : property.title || 'Luxury property in Cape Town';
}

// Convert Greeff data to website format
const convertedProperties = greeffData.properties.map(property => {
  // Extract bedroom and bathroom info from the scraped text
  const text = property.allText || '';
  const bedroomMatch = text.match(/(\d+)\s*Bedroom/i);
  const bathroomMatch = text.match(/(\d+(?:\.\d+)?)\s*Bathroom/i);
  const sizeMatch = text.match(/(\d+(?:\.\d+)?)\s*m²/i);
  
  return {
    id: property.id,
    title: property.title || `Property for Sale in ${getLocation(property.url)}`,
    price: property.price || 'Price on Application',
    location: getLocation(property.url),
    bedrooms: bedroomMatch ? parseInt(bedroomMatch[1]) : null,
    bathrooms: bathroomMatch ? parseFloat(bathroomMatch[1]) : null,
    area: sizeMatch ? `${sizeMatch[1]} m²` : null,
    type: getPropertyType(property.url, property.title || ''),
    status: getStatus(),
    images: property.images.length > 0 ? property.images : [
      `https://images.greeff.co.za/property/${property.id}/main.jpg`, // Placeholder image URLs
      `https://images.greeff.co.za/property/${property.id}/1.jpg`,
      `https://images.greeff.co.za/property/${property.id}/2.jpg`
    ],
    description: getDescription(property),
    features: createFeatures(property),
    source: 'greeff',
    sourceUrl: property.url,
    agentName: 'Michael Maingard',
    agentContact: '+27 82 497 7888'
  };
});

// Generate the TypeScript file content
const tsContent = `import { Property, AgentProfile } from '@/types/property';

export const agentProfile: AgentProfile = {
  name: "Michael Maingard",
  title: "Luxury Property Specialist",
  company: "Greeff Christie's International Real Estate",
  phone: "+27 82 497 7888",
  email: "michael@greeff.co.za",
  officePhone: "+27 21 763 4120",
  address: "Greeff House, 262 Main Road, Kenilworth, Cape Town, 7708",
  bio: "Michael Maingard is a distinguished real estate professional specializing in Cape Town's prestigious Atlantic Seaboard. With a deep understanding of the luxury property market and backed by Christie's International Real Estate network, Michael combines refined international standards with unparalleled local market expertise. His philosophy centers on working with the best in the business, ensuring clients receive exceptional service in their property journey.",
  specializations: [
    "Luxury Apartments",
    "Beachfront Properties", 
    "Investment Properties",
    "Sectional Title Units",
    "High-End Residential Sales"
  ],
  areas: [
    "Sea Point",
    "Green Point", 
    "Camps Bay",
    "Bantry Bay",
    "Atlantic Seaboard"
  ],
  profileImage: "/michael.png",
  achievements: [
    "Part of Christie's International Real Estate network",
    "Specialist in properties ranging from R2.6M to R95M",
    "Expert in Cape Town's most dynamic coastal precincts",
    "Access to global buyer networks"
  ]
};

export const mockProperties: Property[] = ${JSON.stringify(convertedProperties, null, 2)};
`;

// Write the updated mockData.ts file
fs.writeFileSync('src/lib/mockData.ts', tsContent);

console.log('✅ Successfully converted Greeff data to website format!');
console.log(`📊 Converted ${convertedProperties.length} properties`);
console.log('📁 Updated src/lib/mockData.ts');

// Log summary of properties
console.log('\n--- CONVERTED PROPERTIES SUMMARY ---');
convertedProperties.forEach((prop, index) => {
  console.log(`${index + 1}. ${prop.title}`);
  console.log(`   💰 ${prop.price} | 🏠 ${prop.bedrooms || '?'} bed, ${prop.bathrooms || '?'} bath | 📍 ${prop.location}`);
  console.log(`   🔗 ${prop.sourceUrl}`);
  console.log('');
});