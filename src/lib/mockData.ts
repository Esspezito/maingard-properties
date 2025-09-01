import { Property, AgentProfile } from '@/types/property';

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
  profileImage: "/mike-maingard.jpeg",
  achievements: [
    "Part of Christie's International Real Estate network",
    "Specialist in properties ranging from R2.6M to R95M",
    "Expert in Cape Town's most dynamic coastal precincts",
    "Access to global buyer networks"
  ]
};

export const mockProperties: Property[] = [
  {
    id: "116371868",
    title: "Sea Point Apartment – Ideal Starter Home or Investment",
    price: "R 2,695,000",
    location: "Sea Point, Cape Town",
    bedrooms: 1,
    bathrooms: 1,
    area: "45 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/363924502/Crop600x400",
      "https://images.prop24.com/363924503/Crop600x400",
      "https://images.prop24.com/363924504/Crop600x400"
    ],
    description: "This compact 1-bedroom apartment in Sea Point offers excellent potential as a starter home or investment property. Located in one of Cape Town's most vibrant neighborhoods, it provides easy access to the beach, restaurants, and entertainment.",
    features: [
      "1 Bedroom",
      "Starter Home",
      "Investment Potential",
      "Sea Point Location",
      "Close to Beach",
      "Urban Lifestyle"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/116371868",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "116329989",
    title: "Spacious Sea Point Apartment - Renovator's Dream",
    price: "R 7,995,000",
    location: "Sea Point, Cape Town",
    bedrooms: 3,
    bathrooms: 2.5,
    area: "155 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/363165824/Crop600x400",
      "https://images.prop24.com/363165825/Crop600x400",
      "https://images.prop24.com/363165826/Crop600x400"
    ],
    description: "Located in the heart of Sea Point, this spacious 155 sqm apartment offers a rare opportunity to create your dream home. With breathtaking views and potential for modern finishes throughout, this property represents exceptional value in one of Cape Town's most sought-after neighborhoods.",
    features: [
      "Ocean Views",
      "Renovator's Dream",
      "3 Bedrooms",
      "2.5 Bathrooms",
      "Prime Location",
      "Spacious Layout"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/116329989",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115918489",
    title: "Beautifully Finished Apartment in SIX ON N Development",
    price: "R 2,695,000",
    location: "Sea Point, Cape Town",
    bedrooms: 1,
    bathrooms: 1,
    area: "35 m²",
    type: "Apartment",
    status: "under-offer",
    images: [
      "https://images.prop24.com/350908862/Crop600x400",
      "https://images.prop24.com/350908863/Crop600x400",
      "https://images.prop24.com/350908864/Crop600x400"
    ],
    description: "This beautifully finished apartment in the prestigious SIX ON N development offers modern living in Sea Point's most sought-after location. Perfect for young professionals or as an investment property.",
    features: [
      "SIX ON N Development",
      "Modern Finishes",
      "Secure Building",
      "Sea Point Location",
      "Investment Opportunity",
      "Lock-up and Go"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115918489",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115884636",
    title: "Top Floor Apartment with Ocean Views – A Rare Sea Point Gem",
    price: "R 4,250,000",
    location: "Sea Point, Cape Town",
    bedrooms: 2,
    bathrooms: 1,
    area: "89 m²",
    type: "Apartment",
    status: "under-offer",
    images: [
      "https://images.prop24.com/355723549/Crop600x400",
      "https://images.prop24.com/355723550/Crop600x400",
      "https://images.prop24.com/355723551/Crop600x400"
    ],
    description: "This top floor apartment offers stunning ocean views and represents a rare gem in Sea Point. With 2 bedrooms and excellent positioning, this property provides the perfect coastal lifestyle with urban convenience.",
    features: [
      "Top Floor Position",
      "Ocean Views",
      "2 Bedrooms",
      "Rare Sea Point Gem",
      "Close to Beach",
      "Prime Location"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115884636",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115896136",
    title: "Renovated Corner Apartment with Sea Views in Green Point",
    price: "R 4,500,000",
    location: "Green Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "118 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/355899672/Crop600x400",
      "https://images.prop24.com/355899673/Crop600x400",
      "https://images.prop24.com/355899674/Crop600x400"
    ],
    description: "This renovated corner apartment in Green Point offers spectacular sea views and modern finishes. Located close to the V&A Waterfront, it provides the perfect combination of luxury living and urban convenience.",
    features: [
      "Corner Position",
      "Sea Views",
      "Renovated",
      "Green Point Location",
      "Close to V&A Waterfront",
      "Modern Finishes"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/green-point/cape-town/western-cape/11017/115896136",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  }
];