import type { CardProps } from '@/types';
import styles from './ui.module.css';

export default function Card({
    children,
    className = '',
    hover = true,
    padding = 'medium',
}: CardProps) {
    const paddingClass = styles[`card-padding-${padding}`] || styles.cardPaddingMedium;
    const hoverClass = hover ? styles.cardHover : '';

    return (
        <div className={`${styles.card} ${paddingClass} ${hoverClass} ${className}`}>
            {children}
        </div>
    );
}
