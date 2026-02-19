import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="text-lg font-bold tracking-[0.3em]">VERO</span>
            <p className="text-gray-500 text-sm mt-3 max-w-sm leading-relaxed">
              Premium men&apos;s basics made from bamboo, organic cotton, and merino wool.
              No polyester. No microplastics. True materials for your body.
            </p>
            <p className="text-gray-600 text-xs mt-4 italic">True to Your Body.</p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-gray-500 text-sm hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/products/phantom-shorts-7" className="text-gray-500 text-sm hover:text-white transition-colors">Phantom Shorts</Link></li>
              <li><Link href="/products/essential-tee-crew" className="text-gray-500 text-sm hover:text-white transition-colors">Essential Tee</Link></li>
              <li><Link href="/products/core-jogger" className="text-gray-500 text-sm hover:text-white transition-colors">Core Jogger</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Brand</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-500 text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/materials" className="text-gray-500 text-sm hover:text-white transition-colors">Materials</Link></li>
              <li><a href="mailto:hello@wearvero.com" className="text-gray-500 text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2026 VERO. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter/X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
