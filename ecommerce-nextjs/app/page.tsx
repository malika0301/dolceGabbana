'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const trendingProducts = products.slice(0, 3);
  const popularProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero секция - Denim Collection */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Изображение */}
          <div className="relative h-full">
            <Image
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&h=800&fit=crop"
              alt="Denim Collection"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Текст */}
          <div className="flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-gray-50">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Denim Collection
              </h1>
              <p className="text-gray-600 mb-8 text-base sm:text-lg">
                An enigmatic and contemporary collection that exalts nautical style through meticulous fabrics, prints, and precise lines.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
                >
                  View Collection
                </Link>
                <Link
                  href="/products"
                  className="bg-white text-black border-2 border-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium"
                >
                  Buy Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trending секция */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Trending</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Карточки трендов */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-64 sm:h-80 rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop"
              alt="New from Jordan"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <div className="w-12 h-12 mb-3">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-lg">New from Jordan</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-64 sm:h-80 rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop"
              alt="Trail Running Essentials"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg">Trail Running Essentials</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-64 sm:h-80 rounded-lg overflow-hidden group cursor-pointer"
          >
            <Image
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=600&fit=crop"
              alt="Tourism Ready Gear"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white font-semibold text-lg">Tourism Ready Gear</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Промо карточки */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 sm:h-96 rounded-lg overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop"
              alt="Reversible Denim Jacket"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Reversible Denim Jacket
                </h3>
                <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium">
                  Shop
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 sm:h-96 rounded-lg overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&h=600&fit=crop"
              alt="Cotton Jacquard Jacket"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Cotton Jacquard Jacket
                </h3>
                <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium">
                  Shop
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Right Now */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Popular Right Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {popularProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* Dresses секция */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Dresses you'll turn to again and again.
              </h2>
              <p className="text-gray-600 mb-8 text-base sm:text-lg">
                Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                  View Collection
                </button>
                <button className="bg-white text-black border-2 border-black px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium">
                  Add to Bag
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
                alt="Dresses Collection"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Featured</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">Sneakers Model 1</Link></li>
              <li><Link href="#" className="hover:text-black">Cotton Knit Coat</Link></li>
              <li><Link href="#" className="hover:text-black">Black Cape Master</Link></li>
              <li><Link href="#" className="hover:text-black">Reversible Jacket</Link></li>
              <li><Link href="#" className="hover:text-black">Peplum</Link></li>
              <li><Link href="#" className="hover:text-black">Blazer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Shoes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">All Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Brand Mini</Link></li>
              <li><Link href="#" className="hover:text-black">Running Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Basketball Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Custom Shoes</Link></li>
              <li><Link href="#" className="hover:text-black">Sale Shoes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Clothing</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-black">All Clothing</Link></li>
              <li><Link href="#" className="hover:text-black">Tops & T-Shirts</Link></li>
              <li><Link href="#" className="hover:text-black">Shorts</Link></li>
              <li><Link href="#" className="hover:text-black">Hoodies & Pullovers</Link></li>
              <li><Link href="#" className="hover:text-black">Joggers & Sweatpants</Link></li>
              <li><Link href="#" className="hover:text-black">Tracksuits</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
