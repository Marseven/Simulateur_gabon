// Re-export startups as projects for convenience
export { startups as projects } from './mockStartups.js'

// Additional project-related data
export const callsForProjects = [
  {
    id: 1,
    investor: "BGD Capital",
    investorId: 1,
    title: "Innovation Fintech 2024",
    sector: "Fintech",
    amountMin: 100000000,
    amountMax: 500000000,
    deadline: "2024-03-30",
    applicants: 12,
    description: "Recherchons startups innovantes dans le paiement mobile, les services financiers digitaux et l'inclusion financiere.",
    requirements: [
      "Entreprise immatriculee au Gabon",
      "Equipe d'au moins 3 personnes",
      "MVP fonctionnel",
      "Traction demontree"
    ],
    status: "open"
  },
  {
    id: 2,
    investor: "Africa Green Fund",
    investorId: 4,
    title: "GreenTech Gabon 2024",
    sector: "GreenTech",
    amountMin: 200000000,
    amountMax: 1000000000,
    deadline: "2024-04-15",
    applicants: 8,
    description: "Projets a impact environnemental positif. Energie renouvelable, gestion des dechets, agriculture durable, foresterie responsable.",
    requirements: [
      "Impact environnemental mesurable",
      "Business model viable",
      "Equipe experimentee",
      "Scalabilite regionale"
    ],
    status: "open"
  },
  {
    id: 3,
    investor: "BGFI Ventures",
    investorId: 2,
    title: "Digital Health Challenge",
    sector: "Technologies",
    amountMin: 50000000,
    amountMax: 300000000,
    deadline: "2024-05-01",
    applicants: 5,
    description: "Solutions digitales pour le secteur de la sante. Telemedecine, gestion hospitaliere, e-pharmacie.",
    requirements: [
      "Solution technologique innovante",
      "Conformite reglementaire",
      "Partenariats sante existants ou potentiels"
    ],
    status: "open"
  }
]

export const successStories = [
  {
    id: 1,
    company: "PayLib Gabon",
    companyId: 2,
    investor: "BGFI Ventures",
    investorId: 2,
    amount: 120000000,
    date: "2023-06-15",
    quote: "La plateforme nous a permis de trouver notre investisseur ideal en 3 mois. L'accompagnement a ete remarquable.",
    sector: "Fintech"
  },
  {
    id: 2,
    company: "GreenWood Solutions",
    companyId: 5,
    investor: "Africa Green Fund",
    investorId: 4,
    amount: 200000000,
    date: "2023-09-20",
    quote: "Un accompagnement de qualite du debut a la fin. Notre projet de reforestation a trouve le partenaire ideal.",
    sector: "Bois"
  },
  {
    id: 3,
    company: "AgriGabon Tech",
    companyId: 1,
    investor: "BGD Capital",
    investorId: 1,
    amount: 45000000,
    date: "2023-04-10",
    quote: "Grace a la PNMR, nous avons leve les fonds necessaires pour deployer notre solution dans tout le pays.",
    sector: "Agritech"
  }
]

export const platformStats = {
  totalProjects: 527,
  totalInvestors: 253,
  totalRaised: 850000000,
  totalMatches: 1240,
  averageTimeToFunding: 90, // jours
  successRate: 68 // pourcentage
}

export default {
  callsForProjects,
  successStories,
  platformStats
}
