
export interface Badge {
  text: string;
  color: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Configuration {
  id: number;
  name: string;
  description: string;
}

export interface InstallationStep {
  number: number;
  title: string;
  description: string;
}

export interface Installation {
  steps: InstallationStep[];
  requirements: string[];
  timeline: string;
}

export interface Warranty {
  years: number;
  features: string[];
}

export interface Review {
  id: number;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ReviewsSummary {
  average: number;
  total: number;
  breakdown: Record<number, number>;
}

export interface Product {
  id: number;
  name: string;

  category: string;
  categoryLabel?: string;
  description?: string;
  shortDescription?: string;
  fullDescription?: string;
  image?: string;
  images?: string[];

  price: number;
  originalPrice?: number;
  badge?: Badge;
  rating: number;
  reviews?: number;
  reviewCount?: number;
  inStock: boolean;
  stockLevel: 'high' | 'low' | 'limited' | 'in-stock';
  stockCount?: number;

  specifications?: Specification[];
  features?: Feature[];
  keyFeatures?: string[];
  configurations?: Configuration[];
  installation?: Installation;
  warranty?: Warranty;
  reviewsSummary?: ReviewsSummary;
  reviewsList?: Review[];
  relatedProducts?: number[];
}


export interface RelatedProduct {
  id: number;
  name: string;
  category: string;
  categoryLabel?: string;
  shortDescription?: string;
  price: number;
  image?: string;
  inStock: boolean;
  stockLevel: 'high' | 'low' | 'limited' | 'in-stock';
}

