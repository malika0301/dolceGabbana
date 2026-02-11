'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Heart, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { motion } from 'framer-motion';

export default function ProductDetailPage({ params }: { params:{ id: string } }) {
 
  const product = products.find((p) => p.id === parseInt(params.id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(0);
  const [showReviews, setShowReviews] = useState(true);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Основной контент */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Галерея изображений */}
          <div className="space-y-4">
            {/* Главное изображение */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden"
            >
              <Image
                src={product.colors[selectedColor].image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Миниатюры */}
            <div className="grid grid-cols-6 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Информация о продукте */}
          <div className="space-y-6">
            {/* Статус */}
            {product.status && (
              <p className="text-orange-600 font-medium">{product.status}</p>
            )}

            {/* Название */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600">{product.category}</p>
            </div>

            {/* Цена */}
            <div className="text-2xl font-bold">${product.price}</div>

            {/* Выбор цвета */}
            <div>
              <h3 className="font-semibold mb-3">Select Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`relative w-16 h-16 rounded-lg border-2 overflow-hidden ${
                      selectedColor === index ? 'border-black' : 'border-gray-300'
                    }`}
                  >
                    <Image src={color.image} alt={color.name} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Выбор размера */}
            {product.sizes && (
              <div>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">Select Size</h3>
                  <button className="text-sm text-gray-600 hover:text-black underline">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Кнопки действий */}
            <div className="space-y-3 pt-4">
              <button className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Add to Bag
              </button>
              <button className="w-full border-2 border-black py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Favorite
              </button>
            </div>

            {/* Доставка */}
            <div className="border-t pt-6 space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Shipping</h4>
                <p className="text-sm text-gray-600">You'll see our shipping options at checkout</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Free Pickup</h4>
                <button className="text-sm underline hover:text-gray-600">Find a Store</button>
              </div>
            </div>

            {/* Описание */}
            <div className="border-t pt-6">
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Отзывы */}
        {product.reviews.length > 0 && (
          <div className="border-t pt-12 mb-16">
            <button
              onClick={() => setShowReviews(!showReviews)}
              className="flex items-center justify-between w-full mb-6"
            >
              <h2 className="text-2xl font-bold">Reviews ({product.reviews.length})</h2>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${
                  showReviews ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showReviews && (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex text-yellow-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i}>
                            {i < review.rating ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{review.author}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                    {review.date && (
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Похожие товары */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
