export const investors = [
  {
    id: 1,
    name: "BGD Capital",
    type: "Fonds d'investissement",
    description: "Premier fonds dedie aux startups gabonaises. Nous accompagnons les entrepreneurs depuis le seed jusqu'a la serie A.",
    sectors: ["Fintech", "Agritech", "Technologies"],
    ticketMin: 25000000,
    ticketMax: 500000000,
    activeDeals: 12,
    portfolio: [
      { name: "PayLib Gabon", amount: 100000000 },
      { name: "AgriGabon Tech", amount: 45000000 }
    ],
    contact: {
      email: "invest@bgdcapital.ga",
      phone: "+241 01 23 45 67"
    },
    location: "Libreville"
  },
  {
    id: 2,
    name: "BGFI Ventures",
    type: "Corporate VC",
    description: "Branche capital-risque du groupe BGFI. Focus sur les innovations financieres et technologiques en Afrique Centrale.",
    sectors: ["Technologies", "Fintech", "Assurance"],
    ticketMin: 50000000,
    ticketMax: 1000000000,
    activeDeals: 8,
    portfolio: [
      { name: "HealthConnect Gabon", amount: 60000000 }
    ],
    contact: {
      email: "ventures@bgfi.com",
      phone: "+241 01 76 43 21"
    },
    location: "Libreville"
  },
  {
    id: 3,
    name: "Gabon Angels",
    type: "Business Angels",
    description: "Reseau de business angels gabonais. Nous investissons en early-stage et apportons notre expertise metier.",
    sectors: ["Tous secteurs"],
    ticketMin: 5000000,
    ticketMax: 50000000,
    activeDeals: 25,
    portfolio: [
      { name: "LogiPort Africa", amount: 15000000 },
      { name: "EduTech Gabon", amount: 20000000 }
    ],
    contact: {
      email: "contact@gabonangels.ga",
      phone: "+241 07 12 34 56"
    },
    location: "Libreville"
  },
  {
    id: 4,
    name: "Africa Green Fund",
    type: "Fonds a impact",
    description: "Fonds panafricain dedie aux projets a impact environnemental positif. Investissements durables pour un avenir vert.",
    sectors: ["GreenTech", "Agriculture", "Energie", "Bois"],
    ticketMin: 100000000,
    ticketMax: 2000000000,
    activeDeals: 15,
    portfolio: [
      { name: "GreenWood Solutions", amount: 180000000 }
    ],
    contact: {
      email: "invest@africagreen.fund",
      phone: "+241 01 98 76 54"
    },
    location: "Libreville"
  },
  {
    id: 5,
    name: "Emergence Capital",
    type: "Fonds d'investissement",
    description: "Fonds regional specialise dans les PME en croissance. Nous accompagnons la transformation digitale des entreprises.",
    sectors: ["Technologies", "Logistique", "E-commerce"],
    ticketMin: 30000000,
    ticketMax: 300000000,
    activeDeals: 6,
    portfolio: [],
    contact: {
      email: "contact@emergence-capital.ga",
      phone: "+241 01 45 67 89"
    },
    location: "Libreville"
  }
]

export default investors
