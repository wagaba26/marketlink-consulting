import type { SectionProps } from '@/types';
import styles from './ui.module.css';

export default function Section({
    children,
    className = '',
    background = 'white',
    containerWidth = 'container',
}: SectionProps) {
    const backgroundClass = styles[`section-bg-${background}`] || '';
    const containerClass = containerWidth === 'container' ? 'container' : '';

    return (
        <section className={`${styles.section} ${backgroundClass} ${className}`}>
            <div className={containerClass}>
                {children}
            </div>
        </section>
    );
}
