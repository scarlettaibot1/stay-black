import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import WaitlistForm from "./components/WaitlistForm";
import { products } from "./data/products";

const featuredProducts = products.filter((p) =>
  ['phantom-shorts-7', 'essential-tee-crew', 'core-jogger', 'meridian-long-sleeve'].includes(p.slug)
);

const materials = [
  { name: 'Bamboo Rayon', desc: 'Naturally antibacterial, softer than cotton, moisture-wicking without synthetics' },
  { name: 'Organic Cotton', desc: 'GOTS certified, no pesticides, breathable and durable' },
  { name: 'Merino Wool', desc: 'Temperature regulating, odor resistant, superior color retention' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lifestyle.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">
            Launching 2026
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] mb-6">
            VERO
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-4">
            True Materials. Nothing Synthetic.
          </p>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-12">
            Premium men&apos;s basics made from bamboo, organic cotton, and merino wool.
            No polyester. No microplastics. Ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-black text-sm tracking-[0.15em] uppercase px-10 py-4 hover:bg-gray-200 transition-all duration-300 font-semibold"
            >
              Explore Products
            </Link>
            <Link
              href="/about"
              className="border border-white/20 text-white text-sm tracking-[0.15em] uppercase px-10 py-4 hover:border-white/60 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-white overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-black text-xs tracking-widest uppercase mx-8 font-semibold">
              No Polyester &nbsp;·&nbsp; Bamboo Rayon &nbsp;·&nbsp; Organic Cotton &nbsp;·&nbsp; Merino Wool &nbsp;·&nbsp; OEKO-TEX &nbsp;·&nbsp; GOTS Certified &nbsp;·&nbsp; Hidden Zippers &nbsp;·&nbsp; True Materials &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section className="bg-[#0a0a0a] py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">The Black Collection</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Featured Products</h2>
            <p className="text-gray-500 text-sm mt-4">Our launch collection. More colors coming soon.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/products"
              className="inline-block border border-white/20 text-white text-xs tracking-widest uppercase px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Product - Phantom Shorts */}
      <section className="bg-black py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video overflow-hidden bg-[#0a0a0a]">
            <Image
              src="/images/shorts-7in-model.jpg"
              alt="Phantom Shorts with hidden zipper pockets"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-white text-black px-4 py-1.5 text-xs font-bold tracking-[0.15em]">
              HERO PRODUCT
            </div>
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">Phantom Shorts 7&quot;</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Invisible pockets.<br />
              <span className="text-gray-400">Undeniable function.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              The Phantom Pocket™ system uses YKK concealed zippers sewn directly into the seam allowance.
              No visible metal. No pull tab hanging. Just a clean seam line that fits your iPhone Pro Max.
            </p>
            <ul className="space-y-3 mb-10">
              {['YKK concealed zippers — invisible from outside', 'Fits iPhone 17 Pro Max (7.5" × 5.5" depth)', '70% bamboo rayon / 30% organic cotton', 'OEKO-TEX Standard 100 certified'].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-white/40 mt-0.5">→</span> {f}
                </li>
              ))}
            </ul>
            <Link
              href="/products/phantom-shorts-7"
              className="inline-block bg-white text-black text-sm tracking-[0.15em] uppercase px-8 py-3 hover:bg-gray-200 transition-all duration-300 font-semibold"
            >
              View Product — $128
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem with Polyester */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8">The Problem</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Your gym clothes are slowly poisoning you.
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl">
            Most athletic wear is made from polyester — a petrochemical-derived plastic that sheds microplastics,
            disrupts hormones, and doesn&apos;t biodegrade for 200+ years. We built an alternative.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Microplastics</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every polyester garment sheds thousands of microplastic fibers per wash.
                They enter waterways, the food chain, and your bloodstream.
                Studies have found microplastics in human blood, lungs, and placenta.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Endocrine Disruptors</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Synthetic dyes and petrochemical fibers contain BPA-adjacent chemicals
                that disrupt hormone function. You wear these against your skin 16 hours a day.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">True Color Retention</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cheap reactive dyes wash out within months. We use fiber-reactive dyes with
                mordant overdyeing — bonded at the molecular level. 200+ washes, still jet black.
              </p>
            </div>
          </div>
          <div className="mt-14 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-white text-sm tracking-[0.15em] uppercase hover:gap-5 transition-all duration-300"
            >
              Read the full story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-black py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-6">Our Materials</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Zero synthetics. Ever.
          </h2>
          <p className="text-gray-400 mb-16 max-w-xl mx-auto">
            Every VERO product is made from natural fibers — certified safe by OEKO-TEX and GOTS.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {materials.map((mat) => (
              <div key={mat.name}>
                <div className="w-16 h-px bg-white/20 mx-auto mb-6" />
                <h3 className="text-lg font-semibold mb-3">{mat.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{mat.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="border border-white/10 px-6 py-3 text-xs tracking-[0.15em] text-gray-400">
              OEKO-TEX® STANDARD 100
            </div>
            <div className="border border-white/10 px-6 py-3 text-xs tracking-[0.15em] text-gray-400">
              GOTS CERTIFIED ORGANIC
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/materials"
              className="inline-flex items-center gap-3 text-white text-sm tracking-[0.15em] uppercase hover:gap-5 transition-all duration-300"
            >
              Learn about our materials <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="bg-[#0a0a0a] py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be first to know.</h2>
          <p className="text-gray-400 mb-10">
            Join the waitlist for early access, exclusive pricing, and launch updates.
          </p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
