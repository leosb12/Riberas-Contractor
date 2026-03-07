import ServicePageLayout from '../../components/ServicePageLayout'

const deckService = {
  title: 'Deck & Balcony Construction',
  category: 'Outdoor Construction',
  heroImage: '/services/balcon.png',
  heroSubtitle:
    'Custom-built decks and balconies designed to expand your living space outdoors. Engineered for safety, built to last decades, and finished to impress.',

  stats: [
    { number: '100+', label: 'Decks Built' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: 'Code', label: 'Compliant Builds' },
  ],

  overviewTitle: 'Outdoor Living, Professionally Built.',
  overviewText1:
    'A deck or balcony is one of the best investments you can make in your home. It extends your living area into the outdoors, increases property value, and becomes a space your family truly uses — for barbecues, morning coffee, evening hangouts, or quiet relaxation.',
  overviewText2:
    `We design and build custom decks and balconies that are structurally engineered for safety, compliant with Bowling Green building codes, and finished with materials that handle Kentucky's four seasons. From planning through the final railing install, every step is done right.`,
  overviewImage: '/services/balcon.png',
  overviewBullets: [
    'Custom deck design tailored to your home and yard',
    'Pressure-treated lumber and composite decking options',
    'Code-compliant footings, framing, and railing systems',
    'Permit assistance and inspection coordination',
    'Stairs, planters, lighting integration, and gates',
    'Deck repair and restoration of existing structures',
  ],

  included: [
    {
      icon: 'calculator',
      title: 'Custom Design & Planning',
      description:
        `We design your deck to fit your home's architecture, yard layout, and your vision. You review and approve before any digging starts.`,
    },
    {
      icon: 'pin',
      title: 'Concrete Footings',
      description:
        'Below-frost-line concrete footings pour to permanently anchor your deck structure — the most critical part of a safe deck.',
    },
    {
      icon: 'layers',
      title: 'Framing & Decking',
      description:
        'Pressure-treated framing or composite structure, then your choice of decking board — cedar, composite, or pressure-treated pine.',
    },
    {
      icon: 'shield',
      title: 'Railing Systems',
      description:
        'Code-compliant railings installed in wood, cable, composite, or metal. Proper height, spacing, and post anchoring required by code.',
    },
    {
      icon: 'layers',
      title: 'Stair Construction',
      description:
        'Properly spaced stair stringers, risers, and handrails. We design stairs to meet code and look beautiful entering your deck.',
    },
    {
      icon: 'sparkles',
      title: 'Finishing & Sealing',
      description:
        'All wood surfaces sealed or stained for moisture protection. Hardware is hidden or finished to eliminate sharp edges.',
    },
  ],

  process: [
    {
      title: 'Design Consultation',
      description: 'We walk your yard, discuss your vision and budget, and design a custom deck plan with material and color options.',
    },
    {
      title: 'Permits & Materials',
      description: 'We pull the necessary permits, order all materials, and schedule the build sequence for an efficient timeline.',
    },
    {
      title: 'Foundation & Framing',
      description: 'Footings dug and poured, ledger attached to house, beams set. The structural skeleton is built to last decades.',
    },
    {
      title: 'Deck, Rails & Stairs',
      description: 'Decking boards laid, railings installed, stairs built. Final inspection, sealing, and cleanup complete the project.',
    },
  ],

  galleryImages: [
    '/services/balcon.png',
    '/services/balcon.png',
    '/services/balcon.png',
  ],

  benefitsTitle: 'Built to Code, Built to Last',
  benefitsText:
    `A deck that isn't built properly is a safety hazard. We follow all local building codes, pull proper permits, and build structures that are inspected and certified — protecting your family and your investment.`,
  benefits: [
    {
      icon: 'building',
      title: 'Permit-Pulled & Inspected',
      description: 'We handle all permit applications and schedule city inspections. Your deck is legally compliant for insurance and resale.',
    },
    {
      icon: 'sun',
      title: 'Built for Kentucky Weather',
      description: 'Footings below frost line, proper drainage slope, and moisture-resistant materials ensure your deck survives freeze-thaw cycles.',
    },
    {
      icon: 'refresh',
      title: 'Composite Options Available',
      description: 'Trex and TimberTech composite decking never needs staining or sealing and comes with 25-year fade and stain warranties.',
    },
    {
      icon: 'trending',
      title: 'Home Value Boost',
      description: 'A quality deck adds measurable value to your home — the ROI on outdoor living projects is among the highest in remodeling.',
    },
  ],

  materialsTitle: 'Durable Materials for Outdoor Life',
  materials: [
    { icon: 'sparkles', name: 'Pressure-Treated Lumber', description: 'ACQ-treated pine rated for ground contact — the backbone of every durable deck.' },
    { icon: 'refresh', name: 'Trex Composite Decking', description: '25-year warranty composite boards that never splinter, rot, or require annual sealing.' },
    { icon: 'wrench', name: 'Stainless Fasteners', description: `Corrosion-resistant screws and hardware that won't stain your decking boards.` },
    { icon: 'pin', name: 'Concrete Footings', description: '3,000 PSI concrete poured in tube forms to proper depth for your frost line.' },
  ],

  faqs: [
    {
      question: 'Do I need a permit to build a deck?',
      answer:
        `In most cases, yes. In Bowling Green, KY, decks over a certain height or size require a building permit. We handle the permit application, submit the required plans, and schedule all necessary inspections. This protects your home's value and your family's safety.`,
    },
    {
      question: 'How long does it take to build a deck?',
      answer:
        'A typical 12x16 deck takes 3–5 days of actual construction time, plus time for permit processing (usually 1–2 weeks) and concrete footing curing (48–72 hours). We schedule efficiently to minimize the total timeline.',
    },
    {
      question: 'What decking material should I choose?',
      answer:
        `Pressure-treated pine is the most budget-friendly and very durable when maintained. Cedar is naturally rot-resistant with a better appearance. Composite decking (Trex, TimberTech) costs more upfront but requires zero maintenance and comes with long warranties. We'll help you weigh cost vs. long-term value.`,
    },
    {
      question: 'How deep do the footings need to be?',
      answer:
        'In Bowling Green, KY, footings must extend below the frost line — typically 18–24 inches. We dig and pour all footings to proper depth and diameter to meet local code requirements.',
    },
    {
      question: 'Can you repair or rebuild my existing deck?',
      answer:
        `Yes. We evaluate your existing deck structure, identify damaged or unsafe components, and repair or replace what's needed. In some cases, a full rebuild is more cost-effective than extensive repairs. We'll give you an honest assessment.`,
    },
  ],
}

export default function DeckPage() {
  return <ServicePageLayout service={deckService} />
}
