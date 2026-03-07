import ServicePageLayout from '../../components/ServicePageLayout'

const drywallService = {
  title: 'Drywall & Finishing',
  category: 'Drywall Services',
  heroImage: '/services/drywall.png',
  heroSubtitle:
    'From small patches to full room drywall installations — smooth, seamless, paint-ready walls. Our finishing work is invisible at every light angle.',

  stats: [
    { number: '1,000+', label: 'Wall Repairs Done' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '1-Year', label: 'Warranty on Work' },
  ],

  overviewTitle: 'Walls That Look Factory-New.',
  overviewText1:
    'Drywall is the backbone of every interior space — and bad drywall work is impossible to hide. Bumps, seams, cracks, and uneven texture show up as soon as light hits the wall at an angle. We have spent years perfecting the art of drywall finishing so our work disappears entirely under paint.',
  overviewText2:
    `Whether you have a small hole from a doorknob, water-damaged ceilings, or you're building out a new room from scratch, our team handles every scale of work with the same level of care. We tape, float, sand, and prime — so your painter (or ours) gets walls that are ready to shine.`,
  overviewImage: '/services/drywall.png',
  overviewBullets: [
    'Patch repairs — holes, dents, cracks of any size',
    'Full drywall installation for new rooms and additions',
    'Smooth Level 5 finish available for painting',
    'Ceiling repair including water stain remediation',
    'Knock-down and orange peel texture matching',
    'Corner bead installation and finishing',
  ],

  included: [
    {
      icon: 'wrench',
      title: 'Drywall Hanging',
      description:
        'New drywall installed on walls and ceilings with proper screw spacing, correct panel orientation, and tight seams.',
    },
    {
      icon: 'sparkles',
      title: 'Patch & Repair',
      description:
        'Holes, cracks, dents, and damaged sections patched with matching materials and feathered seamlessly into surrounding surface.',
    },
    {
      icon: 'clipboard',
      title: 'Tape & Bed',
      description:
        'Fiberglass mesh or paper tape applied over seams and fasteners. Multiple coats of joint compound applied and feathered out.',
    },
    {
      icon: 'cog',
      title: 'Sanding & Smoothing',
      description:
        'Mechanical and hand sanding to create a perfectly flat surface. We use dust-collection sanders to keep your home clean.',
    },
    {
      icon: 'home',
      title: 'Texture Matching',
      description:
        'Knock-down, orange peel, skip trowel, or smooth — we match your existing wall texture so repairs are completely invisible.',
    },
    {
      icon: 'paint',
      title: 'Prime Coat',
      description:
        'A drywall primer coat applied after sanding to seal the surface and ensure even paint absorption across the entire wall.',
    },
  ],

  process: [
    {
      title: 'Assess & Plan',
      description: 'We evaluate existing walls, identify all repairs needed, and plan the scope — including structural backing if required.',
    },
    {
      title: 'Cut & Hang',
      description: 'New drywall panels cut precisely, hung with proper fastener patterns, and seams planned for minimal visibility.',
    },
    {
      title: 'Tape, Coat & Sand',
      description: 'Three coats of joint compound applied and sanded between each coat. Final sand creates a paint-ready surface.',
    },
    {
      title: 'Prime & Inspect',
      description: 'Primer applied, walls inspected under raking light. Any imperfections caught and corrected before we finish.',
    },
  ],

  galleryImages: [
    '/services/drywall.png',
    '/services/drywall.png',
    '/services/drywall.png',
  ],

  benefitsTitle: 'Invisible Seams, Perfect Walls',
  benefitsText:
    'The difference between amateur and professional drywall finishing shows itself clearly under paint. Our Level 5 finish eliminates all texture variation — the sign of true craftsmanship you can see and feel.',
  benefits: [
    {
      icon: 'bulb',
      title: 'Raking Light Test',
      description: 'We check all finished walls under raking light (flashlight parallel to wall) to catch any imperfections before the job is done.',
    },
    {
      icon: 'silent',
      title: 'Dust Control',
      description: 'We use HEPA-equipped dustless sanding tools and seal off work areas to keep drywall dust out of your living spaces.',
    },
    {
      icon: 'shield',
      title: 'Water Damage Expertise',
      description: 'We properly dry and treat water-damaged drywall, treat for mold if found, and rebuild it correctly to prevent future issues.',
    },
    {
      icon: 'calculator',
      title: 'Proper Corner Work',
      description: `Metal and vinyl corner bead installed at all outside corners for sharp, durable edges that won't chip or dent.`,
    },
  ],

  materialsTitle: 'Professional-Grade Products Only',
  materials: [
    { icon: 'clipboard', name: 'USG Sheetrock®', description: 'Industry-standard 1/2" and 5/8" drywall for walls, ceilings, and fire-rated applications.' },
    { icon: 'refresh', name: 'USG All-Purpose Joint Compound', description: 'Lightweight compound for taping and topping coats that sands smoothly.' },
    { icon: 'cube', name: 'Fiberglass Mesh Tape', description: 'Alkali-resistant mesh tape for strong, crack-resistant seam reinforcement.' },
    { icon: 'wrench', name: 'Steel Corner Bead', description: 'Galvanized metal corner bead for sharp outside corners that hold up to impact.' },
  ],

  faqs: [
    {
      question: 'How long does a drywall repair take to dry?',
      answer:
        'Each coat of joint compound needs 24 hours to dry fully before sanding and recoating. A typical patch with 3 coats takes 3 days of drying time. We schedule around this to minimize disruption to your home.',
    },
    {
      question: 'Can you match my existing wall texture?',
      answer:
        'Yes — texture matching is one of our specialties. We can replicate knock-down, orange peel, skip trowel, and most other common textures. We test spray or trowel the texture on a small area first to make sure it matches before covering the entire repair.',
    },
    {
      question: 'What is a Level 5 finish?',
      answer:
        'Level 5 is the highest-quality drywall finish. It involves applying a skim coat of joint compound over the entire wall surface, creating a perfectly smooth, paint-ready wall with no texture at all. We recommend it for rooms with glossy paint or bright light that would show any surface variation.',
    },
    {
      question: 'Do you handle water-damaged drywall?',
      answer:
        'Yes. Water-damaged drywall must be removed and replaced — it cannot simply be dried and reused because it becomes structurally weak and promotes mold growth. We remove all affected material, treat the framing if needed, and install fresh drywall properly.',
    },
    {
      question: 'Can drywall work be done while the house is occupied?',
      answer:
        `Yes, with some precautions. We seal off work areas with plastic sheeting to contain dust, work in sections, and schedule the messiest steps (like sanding) for times that are least disruptive. We're experienced working in occupied homes.`,
    },
  ],
}

export default function DrywallPage() {
  return <ServicePageLayout service={drywallService} />
}
