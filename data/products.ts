import { Product, Category } from '@/types';

// Категории
export const categories: Category[] = [
  { id: '1', name: 'Tops & T-Shirts', slug: 'tops-tshirts' },
  { id: '2', name: 'Shorts', slug: 'shorts' },
  { id: '3', name: 'Hoodies & Pullovers', slug: 'hoodies-pullovers' },
  { id: '4', name: 'Jackets & Vests', slug: 'jackets-vests' },
  { id: '5', name: 'Pants & Tights', slug: 'pants-tights' },
  { id: '6', name: 'Fleece', slug: 'fleece' },
  { id: '7', name: 'Compression & Baselayer', slug: 'compression-baselayer' },
  { id: '8', name: 'Tracksuits', slug: 'tracksuits' },
  { id: '9', name: 'Socks', slug: 'socks' },
];

// Продукты
export const products: Product[] = [
  {
    id: 1,
    name: 'Nike Tech Fleece Windrunner',
    category: 'Hoodies & Pullovers',
    price: 145,
    status: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'Grey', code: '#A8A8A8', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop' },
      { name: 'Black', code: '#000000', image: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&h=800&fit=crop' },
      { name: 'Blue', code: '#4A90E2', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Stay warm and comfortable with the Nike Tech Fleece Windrunner.',
    reviews: [
      { id: 1, author: 'Nathan Dever', rating: 4, comment: 'So cute and comfortable on my feet.', date: '2024-01-15' },
      { id: 2, author: 'Nathan Dever', rating: 5, comment: 'So cute & comfortable. I love the low air 1\'s. Get them.', date: '2024-01-10' },
      { id: 3, author: 'Nathan Dever', rating: 3, comment: 'Lorem ipsum dolor sit amet consectetur.', date: '2024-01-05' },
    ],
    discount: 20,
  },
  {
    id: 2,
    name: 'Air Jordan 1 Low',
    category: 'Shoes',
    price: 145,
    status: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'White/Black', code: '#FFFFFF', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop' },
      { name: 'Black', code: '#000000', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop' },
    ],
    sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5'],
    description: 'Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history.',
    reviews: [
      { id: 1, author: 'Nathan Dever', rating: 5, comment: 'So cute and comfortable on my feet.', date: '2024-01-20' },
      { id: 2, author: 'Nathan Dever', rating: 4, comment: 'Great quality and style!', date: '2024-01-18' },
    ],
  },
  {
    id: 3,
    name: 'Classic Cotton T-Shirt',
    category: 'Tops & T-Shirts',
    price: 45,
    status: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'White', code: '#FFFFFF', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop' },
      { name: 'Mint', code: '#98D8C8', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Essential cotton t-shirt for everyday comfort.',
    reviews: [
      { id: 1, author: 'John Smith', rating: 5, comment: 'Perfect fit and great quality!', date: '2024-01-12' },
    ],
    discount: 20,
  },
  {
    id: 4,
    name: 'Performance Running Shorts',
    category: 'Shorts',
    price: 55,
    status: 'Sale',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'Black', code: '#000000', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&h=800&fit=crop' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Lightweight shorts designed for optimal performance.',
    reviews: [],
    discount: 30,
  },
  {
    id: 5,
    name: 'Dri-FIT Polo Shirt',
    category: 'Tops & T-Shirts',
    price: 65,
    status: 'Just In',
    images: [
      'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'Olive', code: '#556B2F', image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=800&fit=crop' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Stay cool and dry with moisture-wicking technology.',
    reviews: [],
  },
  {
    id: 6,
    name: 'Reversible Denim Jacket',
    category: 'Jackets & Vests',
    price: 125,
    status: 'New',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop',
    ],
    colors: [
      { name: 'Beige', code: '#D4C5B0', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Versatile reversible jacket for any occasion.',
    reviews: [],
  },
];

// Цвета для фильтров
export const filterColors = [
  { id: 'black', name: 'Black', code: '#000000' },
  { id: 'blue', name: 'Blue', code: '#4A90E2' },
  { id: 'brown', name: 'Brown', code: '#8B4513' },
  { id: 'green', name: 'Green', code: '#32CD32' },
  { id: 'grey', name: 'Grey', code: '#808080' },
  { id: 'multi', name: 'Multi Color', code: 'linear-gradient(45deg, red, blue, green)' },
  { id: 'orange', name: 'Orange', code: '#FF8C00' },
  { id: 'pink', name: 'Pink', code: '#FF69B4' },
  { id: 'purple', name: 'Purple', code: '#800080' },
];
