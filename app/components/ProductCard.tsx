import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a] mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm text-white px-3 py-1 text-[10px] tracking-[0.15em] uppercase">
          {product.tagline}
        </div>
      </div>
      <h3 className="text-base font-semibold group-hover:text-gray-300 transition-colors">{product.name}</h3>
      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{product.description}</p>
      <p className="text-lg font-light mt-2">${product.price}</p>
    </Link>
  );
}
