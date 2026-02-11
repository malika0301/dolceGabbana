'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Верхняя полоса */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="/stores" className="text-black hover:text-gray-600">
                Find a store
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/help" className="text-black hover:text-gray-600">
                Help
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/join" className="text-black hover:text-gray-600">
                Join Us
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/signin" className="text-black hover:text-gray-600">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Основной хедер */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Логотип */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                DOLCE<span className="mx-1">+</span>GABBANA
              </h1>
            </Link>

            {/* Навигация Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/new" className="text-black hover:text-gray-600 font-medium">
                New & Featured
              </Link>
              <Link href="/men" className="text-black hover:text-gray-600 font-medium">
                Men
              </Link>
              <Link href="/women" className="text-black hover:text-gray-600 font-medium">
                Women
              </Link>
              <Link href="/sale" className="text-black hover:text-gray-600 font-medium">
                Sale
              </Link>
            </nav>

            {/* Поиск и иконки */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Поиск */}
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none ml-2 w-32 lg:w-48 text-sm"
                />
              </div>

              {/* Мобильный поиск */}
              <button className="sm:hidden p-2">
                <Search className="w-5 h-5" />
              </button>

              {/* Избранное */}
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Корзина */}
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Мобильное меню */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильная навигация */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-4">
              <Link
                href="/new"
                className="block text-black hover:text-gray-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                New & Featured
              </Link>
              <Link
                href="/men"
                className="block text-black hover:text-gray-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/women"
                className="block text-black hover:text-gray-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="/sale"
                className="block text-black hover:text-gray-600 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sale
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Промо баннер */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <p className="text-sm text-center flex-1">
              Early Access to Spring Sale: Use code <span className="font-semibold underline">SPRING</span>.
            </p>
            <button className="text-gray-600 hover:text-black">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
