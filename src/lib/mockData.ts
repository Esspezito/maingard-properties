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
    id: "116329989",
    title: "Spacious Sea Point Apartment",
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
    description: "Located in the heart of Sea Point, this spacious 155 sqm apartment offers a rare opportunity to create your dream home. With breathtaking views and modern finishes throughout, this property represents exceptional value in one of Cape Town's most sought-after neighborhoods.",
    features: [
      "Ocean Views",
      "Modern Kitchen",
      "2.5 Bathrooms",
      "Secure Building",
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
    title: "Modern Sea Point Studio",
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
    description: "Situated in the heart of Sea Point, one of Cape Town's most vibrant and sought-after neighbourhoods. This compact studio offers excellent investment potential or a perfect lock-up-and-go lifestyle.",
    features: [
      "City Views",
      "Modern Finishes",
      "Secure Building",
      "Close to Amenities",
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
    title: "Sea Point Apartment with Views",
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
    description: "Stunning Sea Point apartment with mountain and ocean views. This well-positioned property offers excellent value and is perfect for those seeking a coastal lifestyle with urban convenience.",
    features: [
      "Mountain & Ocean Views",
      "2 Bedrooms",
      "Secure Parking",
      "Well Maintained",
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
    title: "Green Point Luxury Apartment",
    price: "R 4,500,000",
    location: "Green Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "118 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/355723549/Crop600x400",
      "https://images.prop24.com/355723550/Crop600x400",
      "https://images.prop24.com/355723551/Crop600x400"
    ],
    description: "Luxury Green Point apartment in prime location. Walking distance to the V&A Waterfront and close to all amenities. This property offers sophisticated urban living at its finest.",
    features: [
      "Walking Distance to V&A",
      "2 Bathrooms",
      "Secure Complex",
      "Modern Finishes",
      "Urban Lifestyle",
      "Prime Location"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/green-point/cape-town/western-cape/11017/115896136",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115547249",
    title: "SIX ON N - Premium Sea Point Apartment",
    price: "R 5,995,000",
    location: "Sea Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "80 m²",
    type: "Apartment",
    status: "under-offer",
    images: [
      "https://images.prop24.com/363165824/Crop600x400",
      "https://images.prop24.com/363165825/Crop600x400",
      "https://images.prop24.com/363165826/Crop600x400"
    ],
    description: "Experience luxury living in this premier two-bedroom, two-bathroom apartment situated on the top floor at the prestigious SIX ON N development. This property offers contemporary design with premium finishes throughout.",
    features: [
      "Top Floor Position",
      "Premium Development",
      "2 En-suite Bathrooms",
      "Modern Design",
      "Sea Point Location",
      "Luxury Finishes"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115547249",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115547283",
    title: "SIX ON N - Sea Point Studio",
    price: "R 2,995,000",
    location: "Sea Point, Cape Town",
    bedrooms: 1,
    bathrooms: 1,
    area: "43 m²",
    type: "Studio",
    status: "under-offer",
    images: [
      "https://images.prop24.com/350908862/Crop600x400",
      "https://images.prop24.com/350908863/Crop600x400",
      "https://images.prop24.com/350908864/Crop600x400"
    ],
    description: "Welcome to this generously sized studio apartment located at the prestigious SIX ON N development. This property offers modern living in one of Sea Point's newest luxury developments.",
    features: [
      "Prestigious Development",
      "Modern Studio",
      "Secure Building",
      "Sea Point Location",
      "Investment Opportunity",
      "Contemporary Design"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115547283",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115005405",
    title: "Lisdale - Exclusive Sea Point Residence",
    price: "R 11,800,000",
    location: "Sea Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "154 m²",
    type: "Apartment",
    status: "under-offer",
    images: [
      "https://images.prop24.com/363165824/Crop600x400",
      "https://images.prop24.com/363165825/Crop600x400",
      "https://images.prop24.com/363165826/Crop600x400"
    ],
    description: "Welcome to Lisdale, where luxury meets the ocean's edge, offering an unparalleled lifestyle. This exclusive residence features premium finishes, spacious layout, and breathtaking ocean views.",
    features: [
      "Ocean Views",
      "Exclusive Development",
      "Premium Finishes",
      "Spacious Layout",
      "2 Luxury Bathrooms",
      "Prime Sea Point Location"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115005405",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  }
];