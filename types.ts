import React from 'react';

// Define las estructuras de datos para mantener la consistencia en toda la aplicación.

export interface CarModelData {
  [brand: string]: string[];
}

export interface CaseStudy {
  image: string;
  brand: string;
  model: string;
  testimonial: string;
  savings: number;
  city: string;
  personName: string;
}

export interface PricingPlan {
  title: string;
  price: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TransparencyItem {
  title: string;
  content: string | React.ReactNode;
}
