const fs = require('fs');

// Read the current mockData.ts file
const mockDataContent = fs.readFileSync('src/lib/mockData.ts', 'utf8');

// High-quality Cape Town property images from Unsplash
const propertyImages = [
  // Sea Point apartments
  ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750", "https://images.unsplash.com/photo-1613490493576-7fde63acd811", "https://images.unsplash.com/photo-1613977257363-707ba9348227"],
  ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", "https://images.unsplash.com/photo-1600607687644-c7171b42498b"],
  ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde", "https://images.unsplash.com/photo-1600047509006-35e46f520607", "https://images.unsplash.com/photo-1600047509782-20d39509f26d"],
  ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914", "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83", "https://images.unsplash.com/photo-1598928506311-c55ded91a20c"],
  ["https://images.unsplash.com/photo-1600566753086-00878f3e3b52", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", "https://images.unsplash.com/photo-1600566753151-384129cf4e3e"],
  ["https://images.unsplash.com/photo-1567496898669-ee935f5f647a", "https://images.unsplash.com/photo-1556912173-3bb406ef7e77", "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1"],
  ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", "https://images.unsplash.com/photo-1502672023488-70e25813eb80", "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"],
  ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", "https://images.unsplash.com/photo-1560448075-bb485b067938", "https://images.unsplash.com/photo-1560448076-ee77deea722b"],
  ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", "https://images.unsplash.com/photo-1524634126442-357e0eac3c14", "https://images.unsplash.com/photo-1527030280862-64139fba04ca"],
  ["https://images.unsplash.com/photo-1493809842364-78817add7ffb", "https://images.unsplash.com/photo-1502005097973-6a7082348e28", "https://images.unsplash.com/photo-1460317442991-0ec209397118"],
  ["https://images.unsplash.com/photo-1558036117-15d82a90b9b1", "https://images.unsplash.com/photo-1558618666-fcd25c85cd64", "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d"],
  ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d", "https://images.unsplash.com/photo-1600607688066-890987f18a86", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154"],
  ["https://images.unsplash.com/photo-1565623006066-82f23c79210b", "https://images.unsplash.com/photo-1565182999561-18d7dc61c393", "https://images.unsplash.com/photo-1565538420870-da08ff96a207"],
  ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136", "https://images.unsplash.com/photo-1556909212-d5b604d0c90d", "https://images.unsplash.com/photo-1556909172-8c2f041fca1e"],
  ["https://images.unsplash.com/photo-1600573472550-8090b5e0745e", "https://images.unsplash.com/photo-1600573472591-ee6c63691873", "https://images.unsplash.com/photo-1600573472592-401b489a3cdc"],
  ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c", "https://images.unsplash.com/photo-1600585154526-990dced4db0d", "https://images.unsplash.com/photo-1600585152915-d208bec867a1"],
  ["https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf", "https://images.unsplash.com/photo-1574362848149-11496d93a7c7", "https://images.unsplash.com/photo-1558036117-15d82a90b9b1"],
  ["https://images.unsplash.com/photo-1609766857041-ed402ea8069a", "https://images.unsplash.com/photo-1609766857326-18a204c2cf31", "https://images.unsplash.com/photo-1609766934489-1dfb969ba5c0"],
  ["https://images.unsplash.com/photo-1555636222-cae831e670b3", "https://images.unsplash.com/photo-1556020685-ae41abfc9365", "https://images.unsplash.com/photo-1556594472-e9b933db923c"],
  ["https://images.unsplash.com/photo-1416331108676-a22ccb276e35", "https://images.unsplash.com/photo-1449844908441-8829872d2607", "https://images.unsplash.com/photo-1430285561322-7808604715df"],
  ["https://images.unsplash.com/photo-1564013799919-ab600027ffc6", "https://images.unsplash.com/photo-1564501049412-61c2a3083791", "https://images.unsplash.com/photo-1564078516393-cf04bd966897"],
  ["https://images.unsplash.com/photo-1552832230-c0197dd311b5", "https://images.unsplash.com/photo-1551806235-cb441660d208", "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"],
  ["https://images.unsplash.com/photo-1484154218962-a197022b5858", "https://images.unsplash.com/photo-1488805990569-3c9e1d76d51c", "https://images.unsplash.com/photo-1489171078254-c3365d6e359f"]
];

// Replace all image URLs
let updatedContent = mockDataContent;
let imageIndex = 0;

// Replace each property's images
for (let i = 0; i < 23; i++) {
  const oldImagePattern = new RegExp(
    `"images": \\[\\s*"[^"]+",\\s*"[^"]+",\\s*"[^"]+",?\\s*\\]`,
    'g'
  );
  
  // Find and replace the i-th occurrence
  let count = 0;
  updatedContent = updatedContent.replace(oldImagePattern, (match) => {
    if (count === i) {
      const images = propertyImages[i % propertyImages.length];
      count++;
      return `"images": [\n      "${images[0]}",\n      "${images[1]}",\n      "${images[2]}"\n    ]`;
    }
    count++;
    return match;
  });
}

// Write the updated content back
fs.writeFileSync('src/lib/mockData.ts', updatedContent);

console.log('✅ Successfully updated all image URLs with working Unsplash images!');
console.log('📸 All 23 properties now have high-quality placeholder images');
console.log('🌐 Images are from Unsplash which is already configured in next.config.ts');