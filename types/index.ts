// Типы для продуктов
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  status: 'Just In' | 'Sale' | 'New';
  images: string[];
  colors: ProductColor[];
  sizes?: string[];
  description: string;
  reviews: Review[];
  discount?: number;
}

export interface ProductColor {
  name: string;
  code: string;
  image: string;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

// Категории
export interface Category {
  id: string;
  name: string;
  slug: string;
}

// Фильтры
export interface FilterOption {
  id: string;
  label: string;
  value: string;
}
