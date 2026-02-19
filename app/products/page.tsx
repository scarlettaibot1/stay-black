'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black pt-28 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">The Collection</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">All Products</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Nine products. All black. All healthy. All built to last.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-white text-black border-white'
                  : 'border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
