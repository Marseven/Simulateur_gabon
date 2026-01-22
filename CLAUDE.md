# Plateforme Nationale de Mise en Relation - Gabon

## 📋 Informations Projet

- **Objectif** : Prototype de démonstration pour présentation
- **Technologie** : Vue.js 3 (Composition API)
- **Style** : Couleurs officielles du Gabon (Vert, Jaune, Bleu)
- **Base de données** : Aucune (données mockées en JSON)
- **Délai** : Présentation demain

---

## 🎨 Charte Graphique - Couleurs du Gabon

| Couleur | Hex | Usage |
|---------|-----|-------|
| Vert | `#009639` | Header, boutons principaux, succès |
| Jaune/Or | `#FCD116` | Accents, highlights, badges |
| Bleu | `#3A75C4` | Liens, éléments interactifs, info |
| Blanc | `#FFFFFF` | Fond, texte sur couleurs |
| Gris foncé | `#2D3748` | Texte principal |

---

## 🏗️ Architecture du Prototype

```
simulateur-gabon/
├── index.html              # Point d'entrée
├── src/
│   ├── App.vue             # Composant racine
│   ├── main.js             # Initialisation Vue
│   ├── router/
│   │   └── index.js        # Configuration des routes
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── AppSidebar.vue
│   │   ├── common/
│   │   │   ├── BaseButton.vue
│   │   │   ├── BaseCard.vue
│   │   │   ├── BaseBadge.vue
│   │   │   └── BaseModal.vue
│   │   └── features/
│   │       ├── ProjectCard.vue
│   │       ├── InvestorCard.vue
│   │       ├── SupplierCard.vue
│   │       └── StatCard.vue
│   ├── views/
│   │   ├── HomePage.vue           # Page d'accueil
│   │   ├── LoginPage.vue          # Connexion
│   │   ├── RegisterPage.vue       # Inscription (choix profil)
│   │   ├── dashboard/
│   │   │   ├── StartupDashboard.vue
│   │   │   ├── InvestorDashboard.vue
│   │   │   ├── SupplierDashboard.vue
│   │   │   └── AdminDashboard.vue
│   │   ├── projects/
│   │   │   ├── ProjectsList.vue
│   │   │   ├── ProjectDetail.vue
│   │   │   └── CreateProject.vue
│   │   ├── investors/
│   │   │   └── InvestorsList.vue
│   │   └── suppliers/
│   │       └── SuppliersList.vue
│   ├── data/
│   │   ├── mockStartups.js
│   │   ├── mockInvestors.js
│   │   ├── mockSuppliers.js
│   │   └── mockProjects.js
│   └── assets/
│       ├── styles/
│       │   └── main.css
│       └── images/
│           └── gabon-flag.svg
└── package.json
```

---

## 📱 Pages à Développer (Priorité)

### Phase 1 - Core (Obligatoire pour démo)
- [x] Structure projet Vue.js
- [ ] Page d'accueil avec statistiques
- [ ] Page de connexion/inscription
- [ ] Dashboard Startup/PME
- [ ] Dashboard Investisseur
- [ ] Liste des projets avec filtres
- [ ] Fiche projet détaillée

### Phase 2 - Enrichissement (Si temps)
- [ ] Dashboard Fournisseur
- [ ] Dashboard Admin/Institutionnel
- [ ] Système de messagerie (maquette)
- [ ] Page de matching intelligent

---

## 🔧 Stack Technique

| Outil | Version | Usage |
|-------|---------|-------|
| Vue.js | 3.x | Framework frontend |
| Vue Router | 4.x | Navigation SPA |
| Pinia | 2.x | State management (optionnel) |
| Tailwind CSS | 3.x | Styling rapide |
| Vite | 5.x | Build tool |
| Heroicons | - | Icônes |

---

## 📊 Données Mockées

### Startups/PME (exemple)
```json
{
  "id": 1,
  "name": "TechGabon Solutions",
  "sector": "Technologies",
  "stage": "Croissance",
  "fundingNeeded": 50000000,
  "description": "Solutions digitales pour PME gabonaises",
  "team": 8,
  "location": "Libreville",
  "verified": true
}
```

### Investisseurs (exemple)
```json
{
  "id": 1,
  "name": "Banque Gabonaise de Développement",
  "type": "Institution publique",
  "sectors": ["Technologies", "Agriculture", "Industrie"],
  "ticketMin": 10000000,
  "ticketMax": 500000000,
  "activeDeals": 12
}
```

---

## 📝 Journal de Développement

### Jour 1 - [Date actuelle]
- ✅ Création du document Claude.md
- ✅ Définition du plan de développement
- 🔄 En cours : Setup projet Vue.js

---

## 🎯 Objectifs Présentation

1. **Montrer le parcours utilisateur complet** (inscription → dashboard → exploration)
2. **Démontrer l'interface professionnelle** aux couleurs du Gabon
3. **Illustrer le matching** startups ↔ investisseurs
4. **Présenter les statistiques** du tableau de bord institutionnel

---

## ⚠️ Notes Importantes

- Prototype sans backend = toutes les données sont en mémoire
- Les actions (connexion, inscription) sont simulées
- Focus sur l'UX/UI et la fluidité des animations
- Responsive design pour démo sur différents écrans
