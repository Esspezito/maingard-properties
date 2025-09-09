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
  profileImage: "/michael.png",
  achievements: [
    "Part of Christie's International Real Estate network",
    "Specialist in properties ranging from R2.6M to R95M",
    "Expert in Cape Town's most dynamic coastal precincts",
    "Access to global buyer networks"
  ]
};

export const mockProperties: Property[] = [
  {
    "id": "2841345",
    "title": "Sea Point Apartment – Ideal Starter Home or Investment",
    "price": "R2,695,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 1,
    "bathrooms": 1,
    "area": "45.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_e3491d102f22430298901cdc6f5d2737_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_4cf0c3c2b8254e5a9cf7eec0e179b198_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_dba0f4bbd12441f9a644e64ffd6b7a79_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking",
      "Sea Views",
      "Security"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2841345/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2828300",
    "title": "Renovator’s Dream in Prime Sea Point",
    "price": "R7,995,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 3,
    "bathrooms": 2.5,
    "area": "155.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_8a5a376eb2124240a7bba3c83eccf62f_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_47ae1e6757134ddb9db2054bb6ed95df_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_d5d3e2bf91fd4bb3b8555faba70a1d21_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2828300/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2826904",
    "title": "Where Camps Bay Views Reach Their Peak",
    "price": "R95,000,000",
    "location": "Camps Bay, Cape Town",
    "bedrooms": 5,
    "bathrooms": 6.5,
    "area": "1293.00 m²",
    "type": "House",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_2566485d745540d8a288bd1a3adc95f0_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_11c2333cd0114410a70810310dcefd64_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/8/49_c18863548a6540f289e6e17bc15d6321_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Swimming Pool",
      "Garden",
      "Terrace",
      "Mountain Views"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/camps-bay/house/2826904/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1213815",
    "title": "A BREATHTAKING, OTHERWORLDLY RETREAT ON THE ATLANTIC SEABOARD",
    "price": "R138,000,000",
    "location": "Bantry Bay, Cape Town",
    "bedrooms": 5,
    "bathrooms": 6,
    "area": "744.00 m²",
    "type": "House",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/7/49_b68face2a95a422b9b9714dbf7f22de3_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/7/49_7d0551d7dea64284a7aace7a5d670238_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/7/49_e255c2bf3cbb40e5ade5aef82761a959_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking",
      "Security"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/bantry-bay/house/1213815/196-kloof-road/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2531976",
    "title": "Modern, Light-Filled Two-Bedroom Apartment in Prime Green Point Location",
    "price": "R4,500,000",
    "location": "Green Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 1,
    "area": "78.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/6/49_52af154f547047698f4785d6ae5672ce_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/6/49_1b11508568c647d3954744e591f2f73c_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/6/49_2fd0e5c7650d41f7b429bfc623755919_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Modern Property",
      "Prime Location"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/2531976/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2435256",
    "title": "Stylish Living with Iconic Views at SIX ON N",
    "price": "R2,695,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 1,
    "bathrooms": 1,
    "area": null,
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_06207cf1caa547a7b215e234ebfa30be_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_3a8b56dd99e64d89a98b1f206b4e708a_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_4d74d78ef4474a9e913792d62d114863_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Modern Property",
      "Prime Location"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2435256/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2416459",
    "title": "Renovated Corner Apartment with Sea Views in the Heart of Green Point",
    "price": "R4,500,000",
    "location": "Green Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "118.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_f854f5edf8fe426ba9c300148491096c_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_c718a3e2e41a49ec952493802b068e9b_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_203381cc501e4bb28a2af1b77cc19da0_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Sea Views"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/2416459/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2416445",
    "title": "Top Floor Apartment with Ocean Views – A Rare Sea Point Gem",
    "price": "R4,250,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 1,
    "area": "89.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_28c35bbce8094cd1a1df0f292500ad7e_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_7bb310dec9c142c7824ccee1be9a81de_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_dd178d86932449388cc337bb02de522e_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking",
      "Sea Views"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2416445/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2388674",
    "title": "Airbnb Gem with Lion's Head Views",
    "price": "R2,950,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 5,
    "bathrooms": 1,
    "area": "31.00 m²",
    "type": "Studio",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_99597f7caa8548e88d3e009d87bfe17c_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_bae4df5f203f41f7a36bdf04e5a5eeaf_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/4/49_0cfd66b2e590446e8f6c388086353d2b_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Rental Potential"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/studio-apartment/2388674/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2266514",
    "title": "Top Floor Lock Up & Go With Expansive Views Of The Atlantic",
    "price": "R5,995,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "80.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/2/49_5915c3dbaf004448ae9bb717c3659101_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/2/49_f0019efec80f414ba2547c414287ef77_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/2/49_f3820011a7de48298c234ac8a0a52321_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Balcony",
      "Sea Views"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2266514/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "2266459",
    "title": "Airbnb Gem with Ocean Views",
    "price": "R2,995,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 1,
    "bathrooms": 1,
    "area": "43.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/2/49_ca2e1b5ab91d4b60ab137f07fe1a3049_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/2/49_8579e567f8704b319aa5fccc130326f9_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/2/49_e13ed09da1af40f8a795fe78825dc198_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Balcony",
      "Sea Views",
      "Rental Potential"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/2266459/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1212138",
    "title": "Five-Bedroom house in Green Point - perfect for luxury living with stunning views.",
    "price": "R20,995,000",
    "location": "Green Point, Cape Town",
    "bedrooms": 5,
    "bathrooms": 4,
    "area": "471.00 m²",
    "type": "House",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/1/49_501f661990e64172b4fddd383393a343_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/1/49_19037b0b432d4fa48abe313940cd270d_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2025/1/49_15ff043c01a6475ea9cc370584ddb5ed_t_w_1440_h_900.avif"
    ],
    "description": "Send\nPrint\nDownload brochure\nShare this listing\nOverview\nFeatures\nLocation\nFinance\nFive-Bedroom house in Green Point - perfect for luxury living with stunning views.",
    "features": [
      "Parking",
      "Swimming Pool",
      "Terrace",
      "Rental Potential"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/house/1212138/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1860791",
    "title": "Stylish Duplex with Garden and Pool.",
    "price": "R4,995,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 3,
    "bathrooms": 3,
    "area": "156.00 m²",
    "type": "House",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/12/49_0b37b85c9f4e404b8d4ea9ca970a9fd3_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/12/49_103c8c48b22446c39026530a34ed2235_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/12/49_47fa70d1824c44a08370dc362dacd325_t_w_1440_h_900.avif"
    ],
    "description": "Send\nPrint\nDownload brochure\nShare this listing\nOverview\nFeatures\nFinance\nStylish Duplex with Garden and Pool.",
    "features": [
      "Swimming Pool",
      "Garden",
      "Balcony",
      "Sea Views"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/house/1860791/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1850150",
    "title": "Sunny Sea Point apartment!",
    "price": "R2,495,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 1,
    "bathrooms": 1,
    "area": "82.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/11/49_803d857e3275454f98f11dbdff5162fb_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/11/49_f507d0ba2652470199940eacf120a886_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/11/49_95ae5b6b18a241fcb9277941b7c0578c_t_w_1440_h_900.avif"
    ],
    "description": "Send\nPrint\nDownload brochure\nShare this listing\nOverview\nFeatures\nFinance\nSunny Sea Point apartment!\nWeb Ref.",
    "features": [
      "Modern Property",
      "Prime Location"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1850150/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1814864",
    "title": "Spacious Sea Point Apartment with Short-Term Rental Potential",
    "price": "R7,950,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2.5,
    "area": "151.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/10/49_860f795c787748888bfaa0398bd9845d_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/10/49_38c593a1902b467192d9bd051ee86982_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/10/49_57668dfd9296493aae423f9b8f75ce1a_t_w_1440_h_900.avif"
    ],
    "description": "5\nBathrooms\n1\nGarages\nMichael Maingard\nRegistered with the PPRA | Property Practitioner\n\n\nView my listings\nRequest Info\nNewsletter\nProperty alerts\nWe will communicate real estate related marketing information and related services.",
    "features": [
      "Parking",
      "Security",
      "Rental Potential"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1814864/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1777419",
    "title": "Exquisite Beachfront Living with Unrivalled Elegance",
    "price": "R11,800,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "154.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/10/49_a4f8e99516a14f0b80a02e735c4de686_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/10/49_0fc01df946b2439b9f39b797424ddcc7_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/10/49_0530c2cf619e41ee9463dbd988ce19b3_t_w_1440_h_900.avif"
    ],
    "description": "Send\nPrint\nDownload brochure\nShare this listing\nOverview\nFeatures\nFinance\nExquisite Beachfront Living with Unrivalled Elegance\nWeb Ref.",
    "features": [
      "Parking",
      "Balcony",
      "Sea Views"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1777419/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1775642",
    "title": "Stylish 3-Bedroom Apartment in Green Point.",
    "price": "R4,000,000",
    "location": "Green Point, Cape Town",
    "bedrooms": 3,
    "bathrooms": 1.5,
    "area": "113.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/9/49_8cf4d538edc340c199b803fe5cb73bfa_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/9/49_f116d8cc3acc4bbf8e2e1569dd06c543_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/9/49_b6ebda582e0e4d4e80f1c3a3f1f2dc60_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/apartment/1775642/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1769944",
    "title": "Luxurious Garden Apartment on Granger Bay's Water’s Edge",
    "price": "R56,400,000",
    "location": "Mouille Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2.5,
    "area": "277.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/9/49_c9e4c0891ede43a7bb2de81d38e0d395_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/9/49_da04baa032214d7b9b76ae87f13c1ccb_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/9/49_279fadff9ce34827ba8bd1f91a07fa66_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking",
      "Garden"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/mouille-point/apartment/1769944/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1555722",
    "title": "Enhance your lifestyle on the Atlantic Seaboard",
    "price": "R7,250,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "149.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/7/49_32f4e380bdf24ed0a3683a6c3e48f6c5_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/7/49_e12bcebb80474d69a440b66c8d7f0ca5_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/7/49_1bf06fd3ce3b41ca8664605880cde386_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1555722/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1447261",
    "title": "3 Bedroom House For Sale in Green Point",
    "price": "R6,500,000",
    "location": "Green Point, Cape Town",
    "bedrooms": 3,
    "bathrooms": 2,
    "area": "168.00 m²",
    "type": "House",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/5/49_66c01f6735e74cf0a74487a4b1c99732_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/5/49_604a17b8a0fc46d190e2b76a461e4466_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/5/49_080672051cda4106bc8ecf93ebb27321_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/green-point/house/1447261/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1292598",
    "title": "Ground Floor Apartment with Outdoor Oasis in Sea Point",
    "price": "R4,500,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 3,
    "bathrooms": 2.5,
    "area": "103.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/3/49_4a9f802a7585468982ac2844f68dee57_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/3/49_5ea15a87d7fe486594a1b27a58b99f8e_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/3/49_b27064f2cf604842b1b5755c7869efbe_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Modern Property",
      "Prime Location"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/sectional-title/1292598/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1234603",
    "title": "2 Bedroom Apartment For Sale in Three Anchor Bay",
    "price": "R13,850,000",
    "location": "Three Anchor Bay, Cape Town",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": "186.00 m²",
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/1/49_790f78613bfe406684eba34d97a9ea56_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/1/49_b8b60839e6344f63877706348c2e511c_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2024/1/49_6adbd2c555134d3f84f6b66615e574f4_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Parking",
      "Balcony",
      "Terrace"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/three-anchor-bay/apartment/1234603/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  },
  {
    "id": "1102417",
    "title": "Discover Luxury Living",
    "price": "R23,500,000",
    "location": "Sea Point, Cape Town",
    "bedrooms": 3,
    "bathrooms": 3.5,
    "area": null,
    "type": "Apartment",
    "status": "available",
    "images": [
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2023/10/49_f22e710f86ba4312b48e14cc93fe2fdb_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2023/10/49_b839ec194d9b45faa7311cd6665a8355_t_w_1440_h_900.avif",
      "https://d21tw07c6rnmp0.cloudfront.net/media/uploads/49/residential/2023/9/49_9345d047330643fdb0be989aef6e2539_t_w_1440_h_900.avif"
    ],
    "description": "These cookies are used to collect information about how you interact with our website and allow us to remember you.",
    "features": [
      "Modern Property",
      "Prime Location"
    ],
    "source": "greeff",
    "sourceUrl": "https://www.greeff.co.za/results/residential/for-sale/cape-town/sea-point/apartment/1102417/",
    "agentName": "Michael Maingard",
    "agentContact": "+27 82 497 7888"
  }
];
