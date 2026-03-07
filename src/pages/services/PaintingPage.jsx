import ServicePageLayout from '../../components/ServicePageLayout'

const paintingService = {
  title: 'Interior & Exterior Painting',
  category: 'Painting Services',
  heroImage: '/services/painting.png',
  heroSubtitle:
    'Transform any space with flawless brushwork, premium paints, and expert color consulting. We prep every surface properly so the finish lasts for years.',

  stats: [
    { number: '500+', label: 'Projects Completed' },
    { number: '8+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction Rate' },
    { number: '2-Year', label: 'Warranty on Labor' },
  ],

  overviewTitle: 'Professional Paint. Lasting Results.',
  overviewText1:
    `We believe a great paint job starts long before any brush touches the wall. Our team does thorough surface preparation — filling holes, sanding rough areas, taping edges, and priming before applying any coat of paint. This is the step most contractors skip, and it's the reason our work lasts.`,
  overviewText2:
    `Whether you want a single accent wall or a full interior repaint, or your home's exterior completely refreshed, our crew shows up on time, protects your furniture and flooring, and delivers a clean, beautiful result every single time.`,
  overviewImage: '/services/painting.png',
  overviewBullets: [
    'Free color consultation included with every project',
    'Premium Sherwin-Williams and Benjamin Moore paints',
    'Complete surface preparation — no shortcuts',
    'Clean, dust-free work environment guaranteed',
    'Single-coat or multi-coat finishes available',
    'Interior rooms, trim, ceilings, and exteriors',
  ],

  included: [
    {
      icon: 'paint',
      title: 'Interior Wall Painting',
      description:
        'Full room repaints including walls, ceilings, and accent features. We move furniture and protect floors before starting.',
    },
    {
      icon: 'home',
      title: 'Exterior Painting',
      description:
        'Complete exterior repaints including siding, soffits, fascia, and trim. Power washing and surface repair included.',
    },
    {
      icon: 'layers',
      title: 'Trim & Molding',
      description:
        'Doors, window frames, baseboards, crown molding, and all architectural trim painted to a crisp, clean finish.',
    },
    {
      icon: 'cube',
      title: 'Primer Application',
      description:
        'Professional primer applied to new drywall, repaired areas, and surfaces switching color drastically.',
    },
    {
      icon: 'wrench',
      title: 'Surface Preparation',
      description:
        'Holes filled, cracks repaired, surfaces sanded smooth. We treat every surface before paint touches it.',
    },
    {
      icon: 'swatch',
      title: 'Color Consulting',
      description:
        'Not sure what color to choose? We offer free on-site color advice and can bring paint swatches to your home.',
    },
  ],

  process: [
    {
      title: 'Free Estimate',
      description: 'We visit your home, assess the scope, and provide a detailed written estimate at no charge.',
    },
    {
      title: 'Surface Prep',
      description: 'Patching, sanding, taping, and priming — we make sure each surface is perfectly ready.',
    },
    {
      title: 'Paint Application',
      description: 'Two coats of premium paint applied in smooth, even strokes. We never rush this step.',
    },
    {
      title: 'Final Inspection',
      description: 'We walk through every room with you. Touch-ups handled immediately before we leave.',
    },
  ],

  galleryImages: [
    '/services/painting.png',
    '/services/painting.png',
    '/services/painting.png',
  ],

  benefitsTitle: 'Expert Color, Flawless Execution',
  benefitsText:
    `We don't just paint walls — we refresh homes. Our attention to detail, clean process, and premium materials mean you get a result that looks professional and holds up for years.`,
  benefits: [
    {
      icon: 'star',
      title: 'Premium Paint Brands Only',
      description: 'We exclusively use Sherwin-Williams SuperPaint and Benjamin Moore Regal lines for superior coverage and longevity.',
    },
    {
      icon: 'shield',
      title: 'Zero-Mess Guarantee',
      description: 'We cover all floors, furniture, and fixtures. When we leave, the only thing that changed is the walls.',
    },
    {
      icon: 'calculator',
      title: 'Precision Cutting & Edges',
      description: 'Our painters cut straight, clean lines along ceilings, trim, and corners — no tape bleed, no messy edges.',
    },
    {
      icon: 'sun',
      title: 'Weather-Resistant Exterior Coatings',
      description: 'Exterior projects use formulas specifically engineered to resist the Kentucky heat, humidity, and winter freeze cycles.',
    },
  ],

  materialsTitle: 'We Only Use the Best',
  materials: [
    { icon: 'swatch', name: 'Sherwin-Williams SuperPaint', description: 'Industry-leading interior and exterior paint with 100% acrylic formula.' },
    { icon: 'sparkles', name: 'Benjamin Moore Regal', description: 'Low-VOC premium paint known for its color accuracy and durability.' },
    { icon: 'beaker', name: 'Zinsser Primers', description: 'High-adhesion primers that seal stains and ensure perfect color foundation.' },
    { icon: 'paint', name: 'Purdy Brushes & Rollers', description: 'Professional-grade applicators for ultra-smooth, consistent finishes.' },
  ],

  faqs: [
    {
      question: 'How long does a typical interior paint job take?',
      answer:
        'A single room usually takes one full day including prep, two coats, and drying time between coats. A full-house interior typically takes 3–5 days depending on the number of rooms, ceilings, and trim involved.',
    },
    {
      question: 'Do I need to move my furniture?',
      answer:
        'We ask that you remove small valuables and fragile items from the rooms being painted. Our crew will move large furniture to the center of the room and cover it with protective drop cloths. After the job is done, we put everything back in place.',
    },
    {
      question: 'What kind of paint do you use?',
      answer:
        'We use Sherwin-Williams SuperPaint and Benjamin Moore Regal Select for interiors and Sherwin-Williams Emerald Exterior for outdoor surfaces. These are premium, durable paints. We never substitute with budget-grade products without your approval.',
    },
    {
      question: 'How do I choose the right color?',
      answer:
        `We include a free color consultation with every project. We can bring swatches, review your existing décor, and recommend accent combinations that work. If you already have a color in mind, we'll match it exactly.`,
    },
    {
      question: 'Do you offer any warranty?',
      answer:
        `Yes — we provide a 2-year labor warranty on all interior paint work. If the paint peels, bubbles, or fails within 2 years under normal conditions, we'll come back and fix it at no cost to you.`,
    },
  ],
}

export default function PaintingPage() {
  return <ServicePageLayout service={paintingService} />
}
