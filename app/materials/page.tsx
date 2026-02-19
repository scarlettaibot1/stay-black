import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materials — VERO',
  description: 'Deep dive into bamboo rayon, organic cotton, and merino wool — why we chose them and how they compare to polyester.',
};

const comparison = [
  { property: 'Microplastic shedding', vero: 'Zero', polyester: 'Thousands of fibers per wash' },
  { property: 'Endocrine disruptors', vero: 'None', polyester: 'BPA-adjacent chemicals' },
  { property: 'Biodegradable', vero: 'Yes (months–years)', polyester: 'No (200+ years)' },
  { property: 'Odor resistance', vero: 'Natural (merino/bamboo)', polyester: 'Chemical treatment required' },
  { property: 'Moisture wicking', vero: 'Natural fiber properties', polyester: 'Synthetic coating' },
  { property: 'Temperature regulation', vero: 'Active (merino)', polyester: 'Traps heat' },
  { property: 'Black color retention', vero: '200+ washes', polyester: '20–50 washes' },
  { property: 'Skin irritation', vero: 'Hypoallergenic', polyester: 'Common irritant' },
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Materials</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            What touches your skin<br />
            <span className="text-gray-400">matters more than you think.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Every VERO product is made from one of three natural fibers: bamboo rayon, organic cotton,
            or merino wool. No polyester. No nylon. No acrylic. Ever.
          </p>
        </div>
      </section>

      {/* Bamboo Rayon */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">01</p>
              <h2 className="text-3xl md:text-4xl font-bold">Bamboo Rayon</h2>
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Bamboo rayon is the backbone of our performance pieces. It&apos;s naturally antibacterial —
                bamboo contains an antimicrobial bio-agent called &ldquo;bamboo kun&rdquo; that persists through
                processing into fiber. It&apos;s softer than cotton, naturally moisture-wicking, and provides
                4-way stretch without any synthetic elastane.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Naturally antibacterial',
                  'Softer than cotton',
                  'Moisture-wicking',
                  '4-way natural stretch',
                  'UV protective',
                  'Biodegradable',
                  'No pesticides needed',
                  'Thermoregulating',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-white/40 mt-0.5">→</span> {b}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-8">Used in: Phantom Shorts, Core Jogger, Essential Tee, Stealth Travel Pant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Cotton */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">02</p>
              <h2 className="text-3xl md:text-4xl font-bold">Organic Cotton</h2>
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our cotton is GOTS-certified organic — Global Organic Textile Standard, the gold standard
                for organic fiber certification. It covers the entire supply chain, from harvesting to
                manufacturing to labeling. No pesticides, no GMOs, no chemical shortcuts.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'GOTS certified organic',
                  'Zero pesticides or GMOs',
                  'Breathable and durable',
                  'Hypoallergenic',
                  'Pre-shrunk processing',
                  'Enzyme washed finish',
                  'Full supply chain certified',
                  'Biodegradable',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-white/40 mt-0.5">→</span> {b}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-8">Used in: Essential Tee, Stealth Chino, Core Jogger, Phantom Shorts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Merino Wool */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">03</p>
              <h2 className="text-3xl md:text-4xl font-bold">Merino Wool</h2>
            </div>
            <div>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our merino comes from ZQ-certified farms in New Zealand — the highest standard for
                ethical and sustainable wool production. At 17.5 microns, it&apos;s classified as superfine —
                finer than human hair and completely itch-free against skin. Merino fiber&apos;s natural crimp
                structure traps dye molecules deep within the fiber, making it the most fade-resistant
                material in the VERO lineup.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  '17.5μ superfine — zero itch',
                  'Natural temperature regulation',
                  'Odor resistant for days',
                  'Superior color retention',
                  'ZQ ethical certification',
                  'GOTS certified',
                  'Wrinkle resistant',
                  'Naturally fire retardant',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-white/40 mt-0.5">→</span> {b}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-8">Used in: Meridian Long Sleeve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison vs Polyester */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">Comparison</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">VERO vs. Polyester</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 pr-8 text-gray-400 text-xs tracking-[0.1em] uppercase">Property</th>
                  <th className="text-left py-4 pr-8 text-white text-xs tracking-[0.1em] uppercase">VERO</th>
                  <th className="text-left py-4 text-gray-500 text-xs tracking-[0.1em] uppercase">Polyester</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.property} className="border-b border-white/5">
                    <td className="py-4 pr-8 text-gray-400">{row.property}</td>
                    <td className="py-4 pr-8 text-white">{row.vero}</td>
                    <td className="py-4 text-gray-600">{row.polyester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dye Technology */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">Color Technology</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">How true color lasts.</h2>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
            Most brands use a single reactive dye bath. We use a multi-step process:
          </p>
          <ol className="space-y-6">
            {[
              { step: '01', title: 'Fiber-Reactive Dyeing', desc: 'Dark-optimized fiber-reactive dyes form covalent bonds with the fiber at the molecular level — not just sitting on the surface.' },
              { step: '02', title: 'Mordant Overdyeing', desc: 'A second dye bath with metal-salt mordants locks color deeper into the fiber structure, creating a redundant color bond.' },
              { step: '03', title: 'Enzyme Wash', desc: 'Cellulase enzymes remove any unfixed dye from the surface, preventing initial color bleed and creating a softer hand feel.' },
              { step: '04', title: 'Garment Finishing', desc: 'Final garment-level treatment ensures even color distribution across seams, hems, and stress points.' },
            ].map((item) => (
              <li key={item.step} className="flex gap-6 items-start">
                <span className="text-2xl font-light text-gray-600 shrink-0">{item.step}</span>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-gray-500 text-sm mt-10">
            Result: verified by independent textile labs to maintain true color through 200+ wash cycles.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12">Certified by</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {['OEKO-TEX® Standard 100', 'GOTS Certified Organic', 'ZQ Merino Certified'].map((cert) => (
              <div key={cert} className="border border-white/10 px-8 py-4 text-xs tracking-[0.15em] text-gray-400">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">See the materials in action.</h2>
        <Link
          href="/products"
          className="inline-block bg-white text-black text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-gray-200 transition-all duration-300 font-semibold"
        >
          View All Products
        </Link>
      </section>
    </div>
  );
}
