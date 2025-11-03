import { Product } from "../types/product";

export const PRODUCTS: Record<number, Product> = {
  1: {
    id: 1,
    name: 'PD240CH-Z4 Handheld Detector',
    category: 'detectors',
    categoryLabel: 'Metal Detectors',
    description: 'Advanced handheld metal detector with enhanced sensitivity and ergonomic design for professional security applications.',
    shortDescription: 'Advanced handheld metal detector with enhanced sensitivity and ergonomic design.',
    fullDescription: 'Advanced ferromagnetic detection portal designed for MRI safety environments. Features state-of-the-art detection technology with comprehensive monitoring and alert systems for maximum patient and staff protection.',
    price: 2499,
    originalPrice: 2899,
    images: ['/img/ab1.jpg','/img/ab2.jpg','/img/ab3.jpg','/img/ab4.jpg'],
    badge: { text: 'Best Seller', color: 'from-[#6fb43f] to-[#5a9935]' },
    rating: 4.9,
    reviews: 127,
    inStock: true,
    stockLevel: 'high',
    stockCount: 5,
    specifications: [
      { label: 'Detection Technology', value: 'Ferromagnetic Detection' },
      { label: 'Detection Range', value: '0.1 - 100 mg Fe' }
    ],
    keyFeatures: [
      'Advanced ferromagnetic detection technology',
      'Real-time monitoring and alert system',
      'FDA compliant and CE marked'
    ],
    relatedProducts: [2,3,5]
  },
  2: {
    id: 2,
    name: 'MetalMag Portal System',
    category: 'portals',
    categoryLabel: 'Security Portals',
    shortDescription: 'Comprehensive portal metal detection system with advanced screening capabilities.',
    fullDescription: 'State-of-the-art portal metal detection system designed for high-traffic security checkpoints. Features multi-zone detection and advanced threat recognition algorithms.',
    price: 15999,
    images: ['/img/ab2.jpg', '/img/ab1.jpg', '/img/ab3.jpg'],
    badge: { text: 'New Arrival', color: 'from-[#f59e0b] to-[#d97706]' },
    rating: 5,
    reviews: 18,
    inStock: true,
    stockLevel: 'high',
    relatedProducts: [1,3,7]
  },
  3: {
    id: 3,
    name: 'TechGate Auto System',
    category: 'gates',
    categoryLabel: 'MRI Safety',
    description: 'Automated MRI safety gate system ensuring complete protection and compliance.',
    price: 8999,
    image: '/img/ab3.jpg',
    rating: 4,
    reviewCount: 31,
    inStock: true,
    stockLevel: 'low'
  },
};
