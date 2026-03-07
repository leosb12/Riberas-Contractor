import ServicePageLayout from '../../components/ServicePageLayout'

const flooringService = {
  title: 'Flooring Installation',
  category: 'Flooring Services',
  heroImage: '/services/flooring.png',
  heroSubtitle:
    'From laminate hardwood to ceramic and porcelain tile — we install flooring that looks high-end, performs long-term, and transforms any room from the ground up.',

  stats: [
    { number: '50K+', label: 'Sq. Ft. Installed' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '5-Year', label: 'Warranty on Labor' },
  ],

  overviewTitle: 'Flooring That Defines Every Room.',
  overviewText1:
    'New flooring is one of the most impactful upgrades you can make to your home. It changes the way a room feels, the way light reflects, and the way your entire home presents itself. We specialize in both laminate and ceramic tile floor installations — two of the most popular and durable flooring options available.',
  overviewText2:
    `Our process starts with a thorough subfloor inspection. A floor is only as good as what's underneath it. We level, clean, and prepare the subfloor before any material goes down, ensuring your new floor stays flat, gap-free, and beautiful for decades.`,
  overviewImage: '/services/flooring.png',
  overviewBullets: [
    'Laminate, LVP, and hardwood-look plank installation',
    'Ceramic and porcelain tile — any size, any pattern',
    'Subfloor inspection, leveling, and preparation',
    'Precision cuts around cabinets, doors, and walls',
    'Transition strips, baseboards, and trim included',
    'Bathroom, kitchen, hallway, living room — any space',
  ],

  included: [
    {
      icon: 'layers',
      title: 'Laminate & LVP Installation',
      description:
        'Floating floor installation with underlayment, precise cuts, and properly fitted transition strips for a seamless finished look.',
    },
    {
      icon: 'grid',
      title: 'Ceramic & Porcelain Tile',
      description:
        'Full tile installation from layout planning to grouting. Any format, any pattern — straight lay, diagonal, herringbone.',
    },
    {
      icon: 'calculator',
      title: 'Subfloor Leveling',
      description:
        'We inspect and repair your subfloor before installation. Self-leveling compound applied where needed to ensure a flat surface.',
    },
    {
      icon: 'cog',
      title: 'Door & Cabinet Undercutting',
      description:
        'We undercut door jambs and trim pieces so flooring slides cleanly underneath — the mark of a professional install.',
    },
    {
      icon: 'refresh',
      title: 'Transition & Threshold Strips',
      description:
        'Clean transitions between different flooring types, rooms, and level changes — properly installed and matching your floor.',
    },
    {
      icon: 'home',
      title: 'Baseboard Reinstallation',
      description:
        'We remove, store, and reinstall existing baseboards after your new floor goes in, or supply new trim as needed.',
    },
  ],

  process: [
    {
      title: 'Measure & Plan',
      description: 'We measure your space precisely and calculate material quantities, pattern layout, and starting point.',
    },
    {
      title: 'Subfloor Prep',
      description: 'Remove old flooring, inspect the subfloor, level any low spots, and repair squeaks or soft areas.',
    },
    {
      title: 'Installation',
      description: 'Lay the flooring following the plan. Precise cuts at every wall, obstacle, and doorway.',
    },
    {
      title: 'Finishing Touches',
      description: 'Reinstall baseboards, add transition strips, clean up thoroughly, and walk through with you.',
    },
  ],

  galleryImages: [
    '/flooring/3.jpg',
    '/flooring/1.jpg',
    '/flooring/2.jpg',
  ],

  beforeAfterPairs: [
    {
      before: '/flooring/flooring%201.jpg',
      after: '/flooring/flooring%202.jpg',
    },
    {
      before: '/flooring/flooring%201.1.jpg',
      after: '/flooring/flooring%201.2.jpg',
    },
  ],

  benefitsTitle: 'Installed Right the First Time',
  benefitsText:
    'Poor floor installation shows immediately — gaps, uneven tiles, hollow spots. We have the experience and precision tools to deliver floors that are absolutely flat, perfectly aligned, and built to last.',
  benefits: [
    {
      icon: 'calculator',
      title: 'Precision Layout Planning',
      description: 'We calculate exact starting points and patterns to ensure your floor looks balanced and centered in every room.',
    },
    {
      icon: 'silent',
      title: 'Squeak-Free Floors',
      description: 'We secure subfloor panels and use appropriate underlayment to eliminate squeaks and flexion before installing.',
    },
    {
      icon: 'shield',
      title: 'Moisture Protection',
      description: 'We apply moisture barriers in bathrooms, kitchens, and over concrete slabs to protect your investment from below.',
    },
    {
      icon: 'wrench',
      title: 'Professional-Grade Cuts',
      description: 'Diamond wet saws, miter saws, and jig saws give us the precision needed for complex cuts around obstacles.',
    },
  ],

  materialsTitle: 'Top-Tier Flooring Materials',
  materials: [
    { icon: 'layers', name: 'Shaw & Pergo Laminate', description: 'High-traffic AC4 and AC5 rated laminate with realistic wood grain patterns.' },
    { icon: 'shield', name: 'COREtec LVP', description: 'Waterproof luxury vinyl plank that looks like hardwood and handles moisture perfectly.' },
    { icon: 'grid', name: 'Daltile & Florida Tile', description: 'Premium ceramic and porcelain tile in hundreds of sizes, colors, and finishes.' },
    { icon: 'cube', name: 'Roberts Underlayment', description: 'Acoustic and moisture-barrier underlayment for quieter, dry, stable floors.' },
  ],

  faqs: [
    {
      question: 'How long does flooring installation take?',
      answer:
        `A standard bedroom or living room (200–400 sq ft) typically takes one day. Larger areas or complex tile work may take 2–3 days. We'll give you a clear timeline before starting.`,
    },
    {
      question: 'Do I need to acclimate laminate flooring before installation?',
      answer:
        `Yes — laminate and wood-look flooring should acclimate to your home's temperature and humidity for 48–72 hours before installation. We factor this into the project schedule.`,
    },
    {
      question: 'Can you install flooring over existing tile or hardwood?',
      answer:
        'In many cases, yes. Laminate can be installed over existing hard flooring if it is flat and in good condition. Tile-over-tile is possible depending on height clearance. We assess this during the estimate.',
    },
    {
      question: `What's the difference between laminate and LVP (Luxury Vinyl Plank)?`,
      answer:
        'Both look like hardwood, but LVP is fully waterproof and more comfortable underfoot. Laminate is not waterproof and is better for dry spaces like bedrooms and living rooms. We recommend LVP for kitchens and bathrooms.',
    },
    {
      question: 'Do you haul away old flooring?',
      answer:
        `Yes. Demolition and cleanup of existing flooring is included in our service. We bag it up and remove it from your property so you don't have to worry about disposal.`,
    },
  ],
}

export default function FlooringPage() {
  return <ServicePageLayout service={flooringService} />
}
