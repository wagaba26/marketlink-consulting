import { Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react';
import type { NavLink, ContactInfo, SocialLink } from '@/types';

// Navigation Links
export const NAV_LINKS: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/about', label: 'About Us' },
    { href: '/resources', label: 'Resources' },
];

// Contact Information
export const CONTACT_INFO: ContactInfo = {
    address: 'Plot 90, Kanjokya House, 4th Floor, Kanjokya Street, Kamwokya, Kampala, Uganda',
    email: 'info@marketlinkconsulting.com',
    phone: '+256 709 938 589',
    workingHours: 'Mon - Fri: 8:00 AM - 5:00 PM',
};

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Instagram', url: '#', icon: Instagram },
    { name: 'Twitter', url: '#', icon: Twitter },
    { name: 'WhatsApp', url: '#', icon: MessageCircle },
];

// Site Metadata
export const SITE_NAME = 'MarketLink Consulting';
export const SITE_TAGLINE = 'Your Trade Gateway';
export const SITE_DESCRIPTION = "Empowering Africa's automotive sector with structured trade facilitation, international sourcing, compliance support, and market entry consulting.";

// Footer Description
export const FOOTER_DESCRIPTION = 'Your trusted gateway for automotive trade in Africa. Connecting traders with global suppliers through compliance, logistics, and finance.';
