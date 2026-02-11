'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products, categories, filterColors } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isSaleOnly, setIsSaleOnly] = useState(false);
  const [isUpTo50Off, setIsUpTo50Off] = useState(false);
  const [showColorFilter, setShowColorFilter] = useState(true);
  const [showSaleFilter, setShowSaleFilter] = useState(true);

  // Фильтрация продуктов
  const filteredProducts = products.filter((product) => {
    // Фильтр по категории
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }

    // Фильтр по скидке
    if (isSaleOnly && !product.discount) {
      return false;
    }

    if (isUpTo50Off && (!product.discount || product.discount < 50)) {
      return false;
    }

    // Фильтр по цвету
    if (selectedColors.length > 0) {
      const productColorNames = product.colors.map(c => c.name.toLowerCase());
      const hasMatchingColor = selectedColors.some(selectedColor =>
        productColorNames.some(colorName => colorName.includes(selectedColor.toLowerCase()))
      );
      if (!hasMatchingColor) {
        return false;
      }
    }

    return true;
  });

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((c) => c !== colorId)
        : [...prev, colorId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Сайдбар с фильтрами */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="space-y-6">
            {/* Заголовок */}
            <div>
              <h1 className="text-2xl font-bold mb-2">New Releases ({filteredProducts.length})</h1>
            </div>

            {/* Категории */}
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === category.name ? null : category.name
                    )
                  }
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sale & Offers */}
            <div className="border-t pt-6">
              <button
                onClick={() => setShowSaleFilter(!showSaleFilter)}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold">Sale & Offers</h3>
                {showSaleFilter ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {showSaleFilter && (
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isUpTo50Off}
                      onChange={(e) => setIsUpTo50Off(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <span className="text-sm">Up to 50% Off</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSaleOnly}
                      onChange={(e) => setIsSaleOnly(e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300"
                    />
                    <span className="text-sm">Sale</span>
                  </label>
                </div>
              )}
            </div>

            {/* Color Filter */}
            <div className="border-t pt-6">
              <button
                onClick={() => setShowColorFilter(!showColorFilter)}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="font-semibold">Color</h3>
                {showColorFilter ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {showColorFilter && (
                <div className="grid grid-cols-3 gap-3">
                  {filterColors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => toggleColor(color.id)}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColors.includes(color.id)
                            ? 'border-black scale-110'
                            : 'border-gray-300 group-hover:border-gray-400'
                        }`}
                        style={{
                          background: color.code.includes('gradient')
                            ? color.code
                            : color.code,
                        }}
                      />
                      <span className="text-xs text-center">{color.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* Список продуктов */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedColors([]);
                  setIsSaleOnly(false);
                  setIsUpTo50Off(false);
                }}
                className="mt-4 text-black underline hover:text-gray-600"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
