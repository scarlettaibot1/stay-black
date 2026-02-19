import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getRelatedProducts } from '../../data/products';
import WaitlistForm from '../../components/WaitlistForm';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found — Stay Black' };
  return {
    title: `${product.name} — Stay Black`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="min-h-screen bg-black">
      {/* Breadcrumb */}
      <div className="pt-28 pb-0 px-6 lg:px-12 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs text-gray-500 tracking-wide">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Images */}
          <div className="space-y-4">
            {product.images.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] bg-[#0a0a0a] overflow-hidden">
                <Image
                  src={img}
                  alt={`${product.name} - view ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="lg:pt-4 lg:sticky lg:top-28">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">{product.categoryLabel}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{product.name}</h1>
            <p className="text-3xl font-light mb-2">${product.price}</p>
            <p className="text-xs text-gray-500 tracking-wide mb-8">{product.fabric}</p>

            <p className="text-gray-400 text-base leading-relaxed mb-10">{product.longDescription}</p>

            {/* Fabric & Weight */}
            <div className="border-t border-white/10 pt-8 mb-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Fabric & Composition</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{product.fabricComposition}</p>
              <p className="text-gray-500 text-sm">Weight: {product.weight}</p>
            </div>

            {/* Features */}
            <div className="border-t border-white/10 pt-8 mb-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-white/40 mt-0.5">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="border-t border-white/10 pt-8 mb-8">
              <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {product.certifications.map((cert) => (
                  <span key={cert} className="border border-white/10 px-4 py-2 text-xs tracking-wide text-gray-400">
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Size Guide — category-specific */}
            <div className="border-t border-white/10 pt-8 mb-10">
              <h3 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Sizing</h3>
              <p className="text-gray-500 text-sm mb-4">
                {product.category === 'shorts' && 'Runs true to size with a relaxed athletic fit. Outseam measured from waistband to hem.'}
                {product.category === 'tshirts' && 'Runs true to size with a relaxed fit. Length measured from highest point of shoulder to hem.'}
                {product.category === 'longsleeves' && 'Runs true to size with a fitted-but-not-tight cut. Length measured from highest point of shoulder to hem.'}
                {product.category === 'joggers' && 'Runs true to size with a tapered fit. Inseam measured from crotch to ankle cuff.'}
                {product.category === 'pants' && 'Runs true to size. Inseam measured from crotch to hem. Available in regular inseam; tall coming soon.'}
              </p>
              <div className="overflow-x-auto">
                {product.category === 'shorts' && (
                  <table className="text-xs text-gray-500 w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 pr-4 text-gray-400">Size</th>
                        <th className="text-left py-2 pr-4">Waist</th>
                        <th className="text-left py-2 pr-4">Hip</th>
                        <th className="text-left py-2">Outseam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['XS', '28–30"', '34–36"', product.slug.includes('5') ? '14"' : product.slug.includes('running') ? '13"' : '17"'],
                        ['S', '30–32"', '36–38"', product.slug.includes('5') ? '14.5"' : product.slug.includes('running') ? '13.5"' : '17.5"'],
                        ['M', '32–34"', '38–40"', product.slug.includes('5') ? '15"' : product.slug.includes('running') ? '14"' : '18"'],
                        ['L', '34–36"', '40–42"', product.slug.includes('5') ? '15.5"' : product.slug.includes('running') ? '14.5"' : '18.5"'],
                        ['XL', '36–38"', '42–44"', product.slug.includes('5') ? '16"' : product.slug.includes('running') ? '15"' : '19"'],
                        ['XXL', '38–40"', '44–46"', product.slug.includes('5') ? '16.5"' : product.slug.includes('running') ? '15.5"' : '19.5"'],
                      ].map(([size, waist, hip, outseam]) => (
                        <tr key={size} className="border-b border-white/5">
                          <td className="py-2 pr-4 text-gray-400">{size}</td>
                          <td className="py-2 pr-4">{waist}</td>
                          <td className="py-2 pr-4">{hip}</td>
                          <td className="py-2">{outseam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {(product.category === 'tshirts' || product.category === 'longsleeves') && (
                  <table className="text-xs text-gray-500 w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 pr-4 text-gray-400">Size</th>
                        <th className="text-left py-2 pr-4">Chest</th>
                        <th className="text-left py-2 pr-4">Body Length</th>
                        {product.category === 'longsleeves' && <th className="text-left py-2">Sleeve Length</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['XS', '36"', '27"', '32"'],
                        ['S', '38"', '28"', '33"'],
                        ['M', '40"', '29"', '34"'],
                        ['L', '42"', '30"', '35"'],
                        ['XL', '44"', '31"', '36"'],
                        ['XXL', '46"', '32"', '37"'],
                      ].map(([size, chest, length, sleeve]) => (
                        <tr key={size} className="border-b border-white/5">
                          <td className="py-2 pr-4 text-gray-400">{size}</td>
                          <td className="py-2 pr-4">{chest}</td>
                          <td className="py-2 pr-4">{length}</td>
                          {product.category === 'longsleeves' && <td className="py-2">{sleeve}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {(product.category === 'joggers' || product.category === 'pants') && (
                  <table className="text-xs text-gray-500 w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-2 pr-4 text-gray-400">Size</th>
                        <th className="text-left py-2 pr-4">Waist</th>
                        <th className="text-left py-2 pr-4">Hip</th>
                        <th className="text-left py-2">Inseam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['XS', '28–30"', '34–36"', product.category === 'joggers' ? '28"' : '30"'],
                        ['S', '30–32"', '36–38"', product.category === 'joggers' ? '29"' : '31"'],
                        ['M', '32–34"', '38–40"', product.category === 'joggers' ? '30"' : '32"'],
                        ['L', '34–36"', '40–42"', product.category === 'joggers' ? '31"' : '33"'],
                        ['XL', '36–38"', '42–44"', product.category === 'joggers' ? '31"' : '33"'],
                        ['XXL', '38–40"', '44–46"', product.category === 'joggers' ? '32"' : '34"'],
                      ].map(([size, waist, hip, inseam]) => (
                        <tr key={size} className="border-b border-white/5">
                          <td className="py-2 pr-4 text-gray-400">{size}</td>
                          <td className="py-2 pr-4">{waist}</td>
                          <td className="py-2 pr-4">{hip}</td>
                          <td className="py-2">{inseam}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a href="/#waitlist" className="block w-full bg-white text-black text-center text-xs tracking-widest uppercase py-4 hover:bg-gray-200 transition-all duration-300 font-semibold">
                Join Waitlist — ${product.price}
              </a>
            </div>

            {/* Guarantee */}
            <div className="mt-8 border border-white/10 p-4 flex items-center gap-3">
              <span className="text-white text-lg">✦</span>
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="font-semibold text-white">Natural Fabric Guarantee</span>
                <span className="block">Zero polyester. Zero synthetic blends. Always.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-white/5 py-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] bg-[#0a0a0a] overflow-hidden mb-4">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-base font-semibold group-hover:text-gray-300 transition-colors">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Waitlist CTA */}
      <section className="border-t border-white/5 py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Be first to know.</h2>
          <p className="text-gray-400 text-sm mb-8">Join the waitlist for early access and exclusive pricing.</p>
          <WaitlistForm />
        </div>
      </section>

      {/* Back */}
      <div className="text-center py-8">
        <Link href="/products" className="text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors">
          ← Back to All Products
        </Link>
      </div>
    </div>
  );
}
