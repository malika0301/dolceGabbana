'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Статус */}
          {product.status && (
            <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium">
              {product.status}
            </div>
          )}
        </div>

        <div className="space-y-1">
          {/* Название */}
          <h3 className="font-medium text-sm sm:text-base line-clamp-2 group-hover:text-gray-600">
            {product.name}
          </h3>

          {/* Категория */}
          <p className="text-gray-500 text-xs sm:text-sm">{product.category}</p>

          {/* Цвета */}
          <div className="flex items-center gap-2 py-1">
            {product.colors.slice(0, 3).map((color, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color.code }}
                title={color.name}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colors.length - 3}</span>
            )}
          </div>

          {/* Цена */}
          <div className="flex items-center gap-2">
            <span className="font-semibold">${product.price}</span>
            {product.discount && (
              <span className="text-green-600 text-sm font-medium">
                Extra {product.discount}% Off SPRING
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
