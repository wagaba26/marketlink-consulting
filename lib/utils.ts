import { type ClassValue, clsx } from 'clsx';

/**
 * Merges class names using clsx
 * Useful for combining conditional classes
 */
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

/**
 * Format date to readable string
 */
export function formatDate(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Create tel: link for phone numbers
 */
export function createTelLink(phone: string): string {
    return `tel:${phone.replace(/\s/g, '')}`;
}

/**
 * Create mailto: link for emails
 */
export function createMailtoLink(email: string): string {
    return `mailto:${email}`;
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
}
