import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Stay Black',
  description: 'Why Stay Black exists: the polyester problem, our mission, and the materials that make black stay black.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            We built Stay Black because<br />
            <span className="text-gray-400">nothing else existed.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            The founder tried every gym short on the market. Nero had beautiful minimal pockets but no zippers —
            his iPhone Pro Max fell out at every airport, beach, and gym. Alo Yoga had zippers but they&apos;re made
            of polyester and the zipper pulls are visible from a mile away. Lululemon was fine, until the research
            on microplastics became undeniable.
          </p>
        </div>
      </section>

      {/* The pivot */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-white/20 pl-8 py-4">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
              &ldquo;If no brand makes what a health-conscious man who only wears black needs,
              build it.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Problem with Polyester */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            The polyester problem is bigger than you think.
          </h2>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl">
            The athleisure market is dominated by polyester. Most men wearing Lululemon, Vuori, or Alo are
            unknowingly wearing petroleum-derived plastics against their skin every day.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-4">Microplastics in Your Blood</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every polyester garment sheds thousands of microplastic fibers per wash. These fibers enter waterways,
                accumulate in the food chain, and have been found in human blood, lungs, and placenta. A single load
                of polyester laundry can release over 700,000 microplastic fibers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Endocrine Disruptors</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Synthetic dyes and petrochemical fibers contain BPA-adjacent chemicals that disrupt hormone function.
                You wear these fabrics against your skin for 16+ hours a day, absorbing them through sweat and skin contact.
                Studies link these chemicals to reduced testosterone, thyroid disruption, and reproductive issues.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">200-Year Decomposition</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Polyester doesn&apos;t biodegrade. Every polyester garment ever made still exists somewhere on this planet.
                When you&apos;re done wearing it, it sits in a landfill for 200+ years, continuing to shed microplastics
                into soil and groundwater.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">The Fading Problem</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every man who loves black clothing knows the heartbreak: wash it a few times and it turns gray.
                Most brands use cheap reactive dyes that rinse out immediately. We use fiber-reactive dyes with
                mordant overdyeing — bonded at the molecular level. 200+ washes, still jet black.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">Our Mission</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
            Healthy. Sustainable.<br />
            <span className="text-gray-400">Black forever.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Health is not optional</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your clothing touches your skin more than anything else you own. We believe what you wear should be
                as clean as what you eat. No synthetics. No petrochemicals. No compromise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quality over quantity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We make nine products. Not ninety. Every piece is designed to be the best version of itself —
                bought once, worn for years, and still jet black when you&apos;re done.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">The uniform is black</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We don&apos;t chase trends or seasonal colors. Black is the uniform. It&apos;s what you reach for
                every morning without thinking. We make sure it stays that way.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Invisible excellence</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The best features are the ones you don&apos;t see. Hidden zippers, molecular-bonded dye, flat-lock
                seams. No logos screaming for attention. Just quiet, relentless quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Overview */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">Our Materials</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
            Three fibers. Zero synthetics.
          </h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <h3 className="text-2xl font-light">Bamboo Rayon</h3>
              <div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Naturally antibacterial, softer than cotton, and moisture-wicking without any synthetic fibers.
                  Bamboo rayon provides natural 4-way stretch — no Lycra or spandex needed. It&apos;s biodegradable
                  and grows without pesticides or irrigation.
                </p>
                <p className="text-gray-500 text-xs">Used in: Phantom Shorts, Core Jogger, Essential Tee</p>
              </div>
            </div>
            <div className="border-t border-white/5" />
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <h3 className="text-2xl font-light">Organic Cotton</h3>
              <div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  GOTS-certified organic cotton — no pesticides, no GMOs, no shortcuts. Breathable, durable, and
                  hypoallergenic. Our cotton is pre-shrunk and enzyme-washed for a true-to-size fit from the first wear.
                </p>
                <p className="text-gray-500 text-xs">Used in: Essential Tee, Stealth Chino, Core Jogger</p>
              </div>
            </div>
            <div className="border-t border-white/5" />
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start">
              <h3 className="text-2xl font-light">Merino Wool</h3>
              <div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  17.5-micron superfine merino from ZQ-certified New Zealand farms. Zero itch against skin.
                  Natural temperature regulation — cool in heat, warm in cold. Odor-resistant — wear for days
                  without washing. And merino fiber&apos;s natural crimp traps dye molecules deep, making it the
                  most fade-resistant fiber in our lineup.
                </p>
                <p className="text-gray-500 text-xs">Used in: Meridian Long Sleeve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">Certifications</p>
          <h2 className="text-3xl font-bold mb-12">Verified clean. From fiber to finished garment.</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-lg mx-auto">
            <div className="border border-white/10 p-8">
              <h3 className="text-sm font-semibold tracking-wide mb-3">OEKO-TEX® Standard 100</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Independent testing confirms our fabrics are free from harmful substances.
                Every component tested — from fiber to thread to dye.
              </p>
            </div>
            <div className="border border-white/10 p-8">
              <h3 className="text-sm font-semibold tracking-wide mb-3">GOTS Certified Organic</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Global Organic Textile Standard certification for our organic cotton and merino wool products.
                Covers the entire supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to see the products?</h2>
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
