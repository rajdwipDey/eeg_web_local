import { Product } from "../types/product";

export const products: Product[] = [
    {
      id: 1,
      name: 'PD240CH-Z4 Handheld Detector',
      category: 'detectors',
      categoryLabel: 'Metal Detectors',
      description: 'Advanced handheld metal detector with enhanced sensitivity and ergonomic design for professional security applications.',
      price: 2499,
      originalPrice: 2899,
      image: '/img/ab1.jpg',
      rating: 4,
      reviewCount: 24,
      inStock: true,
      stockLevel: 'in-stock',
      badge: {
        text: 'Best Seller',
        color: 'from-[#6fb43f] to-[#5a9935]'
      }
    },
    {
      id: 2,
      name: 'MetalMag Portal System',
      category: 'portals',
      categoryLabel: 'Security Portals',
      description: 'Comprehensive portal metal detection system with advanced screening capabilities for high-security environments.',
      price: 15999,
      image: '/img/ab2.jpg',
      rating: 5,
      reviewCount: 18,
      inStock: true,
      stockLevel: 'in-stock',
      badge: {
        text: 'New Arrival',
        color: 'from-[#f59e0b] to-[#d97706]'
      }
    },
    {
      id: 3,
      name: 'TechGate Auto System',
      category: 'gates',
      categoryLabel: 'MRI Safety',
      description: 'Automated MRI safety gate system ensuring complete protection and compliance in medical imaging environments.',
      price: 8999,
      image: '/img/ab3.jpg',
      rating: 4,
      reviewCount: 31,
      inStock: true,
      stockLevel: 'low',
      badge: {
        text: 'Limited Stock',
        color: 'from-[#ef4444] to-[#dc2626]'
      }
    },
    {
      id: 4,
      name: 'PD240CH Handheld Detector',
      category: 'detectors',
      categoryLabel: 'Metal Detectors',
      description: 'Professional-grade handheld metal detector with superior detection capabilities and user-friendly operation.',
      price: 1899,
      image: '/img/ab4.jpg',
      rating: 5,
      reviewCount: 42,
      inStock: true,
      stockLevel: 'in-stock'
    },
    {
      id: 5,
      name: 'MSDW - FMD Software',
      category: 'software',
      categoryLabel: 'Software Solutions',
      description: 'Advanced ferromagnetic detection software with comprehensive reporting and analysis capabilities for MRI safety.',
      price: 3299,
      image: '/img/ab1.jpg',
      rating: 5,
      reviewCount: 15,
      inStock: true,
      stockLevel: 'in-stock',
      badge: {
        text: 'Software',
        color: 'from-[#8b5cf6] to-[#7c3aed]'
      }
    },
    {
      id: 6,
      name: 'MRI Safety Kit Bundle',
      category: 'accessories',
      categoryLabel: 'Safety Accessories',
      description: 'Complete safety accessory bundle including warning signs, screening forms, and safety protocols for MRI facilities.',
      price: 599,
      originalPrice: 799,
      image: '/img/ab2.jpg',
      rating: 4,
      reviewCount: 28,
      inStock: true,
      stockLevel: 'in-stock'
    },
    {
      id: 7,
      name: 'Advanced Security Portal Pro',
      category: 'portals',
      categoryLabel: 'Security Portals',
      description: 'State-of-the-art security portal with AI-powered detection algorithms and real-time threat assessment capabilities.',
      price: 24999,
      image: '/img/ab3.jpg',
      rating: 5,
      reviewCount: 12,
      inStock: true,
      stockLevel: 'limited',
      badge: {
        text: 'Premium',
        color: 'from-[#10b981] to-[#059669]'
      }
    },
    {
      id: 8,
      name: 'Compact Security Detector',
      category: 'detectors',
      categoryLabel: 'Metal Detectors',
      description: 'Lightweight and portable metal detector perfect for small venues and personal security applications with reliable performance.',
      price: 899,
      image: '/img/ab4.jpg',
      rating: 3,
      reviewCount: 8,
      inStock: true,
      stockLevel: 'in-stock'
    }
  ];