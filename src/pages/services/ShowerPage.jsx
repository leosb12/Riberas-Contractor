import ServicePageLayout from '../../components/ServicePageLayout'

const showerService = {
  title: 'Shower Remodeling',
  category: 'Bathroom Services',
  heroImage: '/services/shower.jpg',
  heroSubtitle:
    'Complete shower transformations — from full tile installations to fixtures, glass enclosures, and waterproofing. Designed to look stunning and last a lifetime.',

  stats: [
    { number: '200+', label: 'Showers Completed' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: 'Zero', label: 'Leak Guarantee' },
  ],

  overviewTitle: 'Your Dream Shower, Built to Code.',
  overviewText1:
    'A shower remodel is one of the most impactful bathroom upgrades you can make. It improves daily comfort, adds luxury to your home, and significantly increases resale value. We handle every step — demo, waterproofing, tile setting, fixture installation, and final seal — so you get a shower that performs flawlessly and looks incredible.',
  overviewText2:
    'Proper waterproofing is the most critical — and most commonly skipped — step in shower construction. We use certified waterproofing membranes on all surfaces before any tile goes down. No shortcuts. No leaks. No moisture damage behind your walls.',
  overviewImage: '/services/shower.jpg',
  overviewBullets: [
    'Complete shower demo and rebuild from scratch',
    'Waterproof membrane installation on all surfaces',
    'Full tile installation — floor-to-ceiling',
    'Custom shower niches, benches, and built-ins',
    'Frameless glass door and enclosure installation',
    'Fixture, valve, and showerhead installation',
  ],

  included: [
    {
      icon: 'wrench',
      title: 'Full Demolition',
      description:
        'Existing shower demolished cleanly — tile, cement board, fixtures, and plumbing rough-in exposed and inspected.',
    },
    {
      icon: 'shield',
      title: 'Waterproof Membrane',
      description:
        'Schluter KERDI or RedGuard membrane installed on all shower surfaces before any tile. This is what prevents leaks and mold for life.',
    },
    {
      icon: 'grid',
      title: 'Full Tile Installation',
      description:
        'Floor-to-ceiling tile in any format — large-format slabs, subway tile, mosaic floor, herringbone — whatever your design calls for.',
    },
    {
      icon: 'home',
      title: 'Shower Niche & Bench',
      description:
        'Built-in shower niches for your shampoo and soap, and shower benches framed, waterproofed, and tiled to match.',
    },
    {
      icon: 'cog',
      title: 'Fixture Installation',
      description:
        'Showerhead, body jets, hand shower, valve, and all trim installed. We work with your plumber or coordinate directly.',
    },
    {
      icon: 'cube',
      title: 'Glass Door & Enclosure',
      description:
        'Frameless or semi-frameless glass shower enclosure and door installed with proper sealing and custom fit to your opening.',
    },
  ],

  process: [
    {
      title: 'Design & Selection',
      description: 'We help you choose tile, layout, fixtures, and glass style. A detailed plan is approved before any work starts.',
    },
    {
      title: 'Demo & Prep',
      description: 'Old shower fully removed, substrate inspected. Cement board and pre-slope floor installed to spec.',
    },
    {
      title: 'Waterproof & Tile',
      description: 'Membrane applied to all surfaces, inspected, then tile set with appropriate thinset and grout for wet areas.',
    },
    {
      title: 'Fixtures & Glass',
      description: 'Caulking applied at all changes of plane, fixtures installed, glass enclosure set. Final inspection done.',
    },
  ],

  galleryImages: [
    '/shower/shower1.jpg',
    '/services/shower.jpg',
    '/services/shower.jpg',
  ],

  benefitsTitle: 'Waterproof. Beautiful. Built Right.',
  benefitsText:
    'Most shower failures come from poor waterproofing or incorrect installation. We follow industry-best practices for every component so your shower stays beautiful and leak-free for decades.',
  benefits: [
    {
      icon: 'shield',
      title: 'Certified Waterproofing Systems',
      description: 'We use Schluter KERDI and RedGuard systems — the most trusted names in shower waterproofing used by professional tile setters worldwide.',
    },
    {
      icon: 'building',
      title: 'Structural Shower Floor',
      description: 'Pre-slope and mud bed or foam shower pan systems create the correct drain slope — every shower floor we install drains completely.',
    },
    {
      icon: 'sparkles',
      title: 'Large-Format Tile Capability',
      description: 'We have the tools and skill to install large-format tiles (24x48, 36x36) with minimal lippage — the hallmark of an expert tile setter.',
    },
    {
      icon: 'beaker',
      title: 'Niche Waterproofing',
      description: 'Shower niches are waterproofed individually with membrane on all faces — a critical detail most contractors skip.',
    },
  ],

  materialsTitle: 'The Products Behind a Perfect Shower',
  materials: [
    { icon: 'shield', name: 'Schluter KERDI Membrane', description: 'Industry-standard waterproofing membrane used in high-end shower construction worldwide.' },
    { icon: 'grid', name: 'Daltile & Florida Tile', description: 'Premium porcelain and natural stone tiles rated for shower floor and wall applications.' },
    { icon: 'beaker', name: 'Custom Building Products (CBP)', description: 'Polymer-modified thinsets and epoxy grouts formulated for wet areas and large-format tiles.' },
    { icon: 'cube', name: 'CRL Glass Systems', description: 'Frameless tempered glass enclosures with quality hardware in chrome, matte black, and brushed nickel.' },
  ],

  faqs: [
    {
      question: 'How long does a shower remodel take?',
      answer:
        'A complete shower demo and rebuild typically takes 5–8 working days. This includes 1 day for demo, 2 days for substrate and waterproofing, 2 days for tile installation, and 1–2 days for caulking, fixtures, and glass. Grout must cure 72 hours before the shower is used.',
    },
    {
      question: 'I have a leaking shower — can you fix it?',
      answer:
        `Yes, but we'll be honest: a leaking shower almost always requires a full rebuild. "Waterproofing over" an existing shower usually fails. We demo to the studs, inspect for mold and damage, treat if needed, then rebuild properly from scratch. A patch is a temporary fix on borrowed time.`,
    },
    {
      question: 'Can I choose my own tile?',
      answer:
        `Absolutely. You can purchase your own tile and we will install it, or we can help you source tile through our suppliers at competitive prices. We'll advise you on what tile formats and types are appropriate for your specific floor and wall areas.`,
    },
    {
      question: 'Do you handle the plumbing too?',
      answer:
        `We install all shower fixtures, valves, and trim (the parts you see). For rough-in plumbing changes — moving a drain, adding a body spray — we coordinate with a licensed plumber. We make the process seamless so you don't have to manage two contractors.`,
    },
    {
      question: 'Is grout the weak point in showers?',
      answer:
        'Standard cement grout can absorb moisture and stain over time. We recommend epoxy grout for shower floors or unsanded polymer grout sealed properly for walls. We also use mold-resistant caulk at all changes of plane (floor-to-wall corners, niche borders) instead of grout, which prevents cracking.',
    },
  ],
}

export default function ShowerPage() {
  return <ServicePageLayout service={showerService} />
}
