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
    title: "1 Bedroom Apartment / Flat for Sale in Sea Point",
    price: "R 2,695,000",
    location: "Sea Point, Cape Town",
    bedrooms: 1,
    bathrooms: 1,
    area: "45 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/363924502/Ensure960x540",
      "https://images.prop24.com/363924503/Ensure960x540",
      "https://images.prop24.com/363924504/Ensure960x540"
    ],
    description: "Sea Point Apartment – Ideal Starter Home or Investment. This neat one-bedroom, one-bathroom apartment is perfectly positioned just off Ocean View Drive.",
    features: [
      "Secure Parking Bay",
      "Outdoor Area",
      "Pet Friendly",
      "Garden",
      "Starter Home",
      "Investment Potential"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/116371868",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115918489",
    title: "1 Bedroom Apartment / Flat for Sale in Sea Point",
    price: "R 2,695,000",
    location: "Sea Point, Cape Town",
    bedrooms: 1,
    bathrooms: 1,
    area: "35 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/350908862/Ensure960x540",
      "https://images.prop24.com/350908863/Ensure960x540",
      "https://images.prop24.com/350908864/Ensure960x540"
    ],
    description: "Part of BLOK's SIX ON N development. Located in vibrant Sea Point neighborhood. 31m² internal space + 4m² private balcony with views of Lion's Head.",
    features: [
      "SIX ON N Development",
      "Lion's Head Views",
      "Rooftop Pool",
      "Fully Equipped Gym",
      "Concierge Services",
      "Furnished"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115918489",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115884636",
    title: "2 Bedroom Apartment / Flat for Sale in Sea Point",
    price: "R 4,250,000",
    location: "Sea Point, Cape Town",
    bedrooms: 2,
    bathrooms: 1,
    area: "89 m²",
    type: "Apartment",
    status: "under-offer",
    images: [
      "https://images.prop24.com/355723549/Ensure960x540",
      "https://images.prop24.com/355723550/Ensure960x540",
      "https://images.prop24.com/355723551/Ensure960x540"
    ],
    description: "Top Floor Apartment with Ocean Views – A Rare Sea Point Gem. Located on 8th floor of Geneva Place, owned by same owner since 1970s.",
    features: [
      "Top Floor Position",
      "Ocean Views",
      "Private Storeroom",
      "Lock-up Garage",
      "Secure Building",
      "Sea View Balcony"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115884636",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115896136",
    title: "2 Bedroom Apartment / Flat for Sale in Green Point",
    price: "R 4,500,000",
    location: "Green Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "118 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/355899672/Ensure960x540",
      "https://images.prop24.com/355899673/Ensure960x540",
      "https://images.prop24.com/355899674/Ensure960x540"
    ],
    description: "Renovated Corner Apartment with Sea Views in the Heart of Green Point. Features sea and Signal Hill views with open-plan living and original fireplace.",
    features: [
      "Corner Unit",
      "Sea Views",
      "Signal Hill Views",
      "Wooden Floors",
      "Private Patio",
      "Security Complex"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/green-point/cape-town/western-cape/11017/115896136",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115547249",
    title: "2 Bedroom Apartment / Flat for Sale in Sea Point",
    price: "R 5,995,000",
    location: "Sea Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "80 m²",
    type: "Apartment",
    status: "under-offer",
    images: [
      "https://images.prop24.com/350912456/Ensure960x540",
      "https://images.prop24.com/350912457/Ensure960x540",
      "https://images.prop24.com/350912458/Ensure960x540"
    ],
    description: "Experience luxury living in this premier two-bedroom, two-bathroom apartment situated on the top floor of the esteemed SIX ON N development.",
    features: [
      "Top Floor Position",
      "Panoramic Sea Views",
      "High Ceilings",
      "Expansive Balcony",
      "Smeg Kitchen Appliances",
      "Rooftop Pool"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115547249",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115547283",
    title: "1 Bedroom Apartment / Flat for Sale in Sea Point",
    price: "R 2,995,000",
    location: "Sea Point, Cape Town",
    bedrooms: 1,
    bathrooms: 1,
    area: "43 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/350908862/Ensure960x540",
      "https://images.prop24.com/350908863/Ensure960x540",
      "https://images.prop24.com/350908864/Ensure960x540"
    ],
    description: "Welcome to this generously sized 37-square-meter studio apartment located at the prestigious SIX ON N development in Sea Point. This modern unit boasts a 6-square-meter balcony, offering views of the Atlantic Ocean.",
    features: [
      "Ocean Views",
      "6m² Balcony",
      "Premium Smeg Kitchen",
      "Rooftop Pool",
      "Fitness Studio",
      "Furnished"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115547283",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  },
  {
    id: "115005405",
    title: "2 Bedroom Apartment / Flat for Sale in Sea Point",
    price: "R 11,800,000",
    location: "Sea Point, Cape Town",
    bedrooms: 2,
    bathrooms: 2,
    area: "154 m²",
    type: "Apartment",
    status: "available",
    images: [
      "https://images.prop24.com/342699097/Ensure960x540",
      "https://images.prop24.com/342699098/Ensure960x540",
      "https://images.prop24.com/342699099/Ensure960x540"
    ],
    description: "Exquisite Beachfront Living with Unrivalled Elegance. Panoramic sea views with open-plan living area, generous balcony, and high-end kitchen appliances.",
    features: [
      "Beachfront Location",
      "Panoramic Sea Views",
      "Pet Friendly",
      "24-Hour Security",
      "Underfloor Heating",
      "Secure Double Garage"
    ],
    source: "property24",
    sourceUrl: "https://www.property24.com/for-sale/sea-point/cape-town/western-cape/11021/115005405",
    agentName: "Michael Maingard",
    agentContact: "+27 82 497 7888"
  }
];