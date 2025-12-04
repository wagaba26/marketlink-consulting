// Common Types
export type UserType = 'trader' | 'supplier';

// Component Props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    isLoading?: boolean;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'small' | 'medium' | 'large';
}

export interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'accent' | 'primary';
    containerWidth?: 'full' | 'container';
}

export interface GridProps {
    children: React.ReactNode;
    columns?: 2 | 3 | 4;
    gap?: 'small' | 'medium' | 'large';
    className?: string;
}

export interface IconWrapperProps {
    icon: React.ComponentType<{ size?: number; color?: string }>;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    background?: boolean;
}

// Data Types
export interface Article {
    title: string;
    excerpt: string;
    date: string;
    category: string;
}


export interface FAQItemData {
    question: string;
    answer: string;
}

export interface ProcessStepData {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface ValueData {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface ServiceData {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface StatData {
    value: string;
    label: string;
}

// Navigation
export interface NavLink {
    href: string;
    label: string;
}

// Contact Information
export interface ContactInfo {
    address: string;
    email: string;
    phone: string;
    workingHours: string;
}

// Social Media
export interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType<{ size?: number }>;
}
