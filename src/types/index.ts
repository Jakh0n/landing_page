export interface NavLink {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  duration: string;
  lessons: number;
}

export interface Teacher {
  id: string;
  name: string;
  subject: string;
  bio: string;
  rating: number;
  students: number;
  avatar: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  rating: number;
  name: string;
  role: string;
  course: string;
  avatar: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
