"use client";

import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "Phantom Shorts",
    tagline: "HIDDEN ZIPPER POCKETS",
    description:
      "Gym shorts with our signature Phantom Pocket™ system. YKK concealed zippers fit iPhone Pro Max. Invisible from outside.",
    price: "$128",
    fabric: "70% Bamboo Rayon / 30% Organic Cotton",
    image: "/phantom-shorts-flatlay.jpg",
    hero: true,
  },
  {
    name: "Core Jogger",
    tagline: "GYM TO STREET",
    description:
      "Tapered bamboo-cotton jogger with hidden zippered pockets throughout. Works everywhere.",
    price: "$148",
    fabric: "60% Bamboo Rayon / 40% Organic Cotton",
    image: "/core-joggers-flatlay.jpg",
  },
  {
    name: "Essential Tee",
    tagline: "200+ WASH GUARANTEE",
    description:
      "The perfect black t-shirt. Dark-dye mordant treatment keeps black true for 200+ washes.",
    price: "$68",
    fabric: "55% Organic Cotton / 45% Bamboo Rayon",
    image: "/essential-tee.jpg",
  },
  {
    name: "Meridian Long Sleeve",
    tagline: "ZERO ITCH MERINO",
    description:
      "17.5μ superfine merino wool. Temperature regulating, odor resistant, travels for days without washing.",
    price: "$148",
    fabric: "100% GOTS Merino Wool",
    image: "/meridian-longsleeve.jpg",
  },
];

const materials = [
  {
    name: "Bamboo Rayon",
    benefits: [
      "Naturally antibacterial",
      "Softer than cotton",
      "Moisture-wicking without synthetics",
      "Biodegradable",
    ],
  },
  {
    name: "Organic Cotton",
    benefits: [
      "GOTS certified organic",
      "No pesticides or GMOs",
      "Breathable and durable",
      "Hypoallergenic",
    ],
  },
  {
    name: "Merino Wool",
    benefits: [
      "Natural temperature regulation",
      "Odor resistant — wear for days",
      "17.5μ superfine — zero itch",
      "Superior black color retention",
    ],
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold tracking-[0.3em]">STAY BLACK</span>
          <a
            href="#waitlist"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-[0.2em] mb-6">
          STAY BLACK
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-4">
          Healthy fabrics that never fade.
        </p>
        <p className="text-sm text-gray-600 max-w-md mb-12">
          Premium men&apos;s basics made from bamboo, organic cotton, and merino wool.
          No polyester. No microplastics. Ever.
        </p>
        <a
          href="#waitlist"
          className="border border-white/20 px-8 py-3 text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300"
        >
          JOIN THE WAITLIST
        </a>
      </section>

      {/* The Problem */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-8">THE PROBLEM</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight">
            Your gym clothes are slowly poisoning you.
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Microplastics</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every polyester garment sheds thousands of microplastic fibers per
                wash. They enter waterways, the food chain, and your bloodstream.
                Studies have found microplastics in human blood, lungs, and placenta.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Endocrine Disruptors</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Synthetic dyes and petrochemical fibers contain BPA-adjacent chemicals
                that disrupt hormone function. You wear these against your skin 16
                hours a day, absorbing them through sweat.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Black That Fades</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cheap reactive dyes wash out within months, turning your black clothes
                gray. Every brand uses the same shortcuts. We use fiber-reactive dyes
                with mordant overdyeing — bonded at the molecular level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-white/5" />

      {/* Our Materials */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-8">OUR MATERIALS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Zero synthetics. Ever.
          </h2>
          <p className="text-gray-400 mb-16 max-w-xl">
            Every Stay Black product is made from natural fibers — bamboo rayon,
            organic cotton, or merino wool. Certified safe by OEKO-TEX and GOTS.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {materials.map((mat) => (
              <div key={mat.name}>
                <h3 className="text-xl font-semibold mb-4">{mat.name}</h3>
                <ul className="space-y-2">
                  {mat.benefits.map((b) => (
                    <li key={b} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-white/40 mt-0.5">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certification Badges */}
          <div className="flex gap-8 items-center">
            <div className="border border-white/10 px-6 py-3 text-xs tracking-[0.15em] text-gray-400">
              OEKO-TEX® STANDARD 100
            </div>
            <div className="border border-white/10 px-6 py-3 text-xs tracking-[0.15em] text-gray-400">
              GOTS CERTIFIED ORGANIC
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-white/5" />

      {/* Products */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-[0.2em] text-gray-500 mb-8">PRODUCTS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Coming Soon
          </h2>
          <p className="text-gray-400 mb-16">
            Five products. All black. All healthy. All built to last.
          </p>

          {/* Hero product - full width */}
          <div className="mb-16">
            <div className="relative aspect-video overflow-hidden mb-6 bg-[#0a0a0a]">
              <Image
                src="/phantom-shorts-model.jpg"
                alt="Phantom Shorts with hidden zipper pockets"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 bg-white text-black px-4 py-1.5 text-xs font-bold tracking-[0.15em]">
                HIDDEN ZIPPER POCKETS
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Phantom Shorts</h3>
                <p className="text-gray-400 text-sm mt-2 max-w-lg">
                  Our hero product. Gym shorts with the Phantom Pocket™ system — YKK
                  concealed zippers completely hidden in the seam. Fits iPhone Pro Max.
                  Zero visible hardware.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  70% Bamboo Rayon / 30% Organic Cotton · OEKO-TEX Certified
                </p>
              </div>
              <p className="text-2xl font-light">$128</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {products.slice(1).map((product) => (
              <div key={product.name}>
                <div className="relative aspect-video overflow-hidden mb-4 bg-[#0a0a0a]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-white px-3 py-1 text-[10px] tracking-[0.15em]">
                    {product.tagline}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{product.description}</p>
                <p className="text-gray-500 text-xs mt-2">{product.fabric}</p>
                <p className="text-lg font-light mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-white/5" />

      {/* Waitlist */}
      <section id="waitlist" className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be first to know.
          </h2>
          <p className="text-gray-400 mb-10">
            Join the waitlist for early access, exclusive pricing, and updates on our
            launch.
          </p>

          {submitted ? (
            <div className="border border-white/10 p-8">
              <p className="text-lg font-semibold mb-2">You&apos;re in.</p>
              <p className="text-gray-400 text-sm">
                We&apos;ll email you when we launch. Stay black.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 text-sm font-semibold tracking-[0.1em] hover:bg-gray-200 transition-colors"
              >
                JOIN
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-sm font-bold tracking-[0.3em]">STAY BLACK</span>
            <p className="text-gray-600 text-xs mt-1">
              Stay Black. Stay Healthy.
            </p>
          </div>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter/X
            </a>
            <a href="mailto:hello@stayblack.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-600 text-xs">
            © 2026 Stay Black. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
