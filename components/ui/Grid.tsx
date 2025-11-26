import type { GridProps } from '@/types';
import styles from './ui.module.css';

export default function Grid({
    children,
    columns = 2,
    gap = 'medium',
    className = '',
    ...props
}: GridProps & React.HTMLAttributes<HTMLDivElement>) {
    const columnClass = styles[`grid-${columns}`] || styles.grid2;
    const gapClass = styles[`grid-gap-${gap}`] || styles.gridGapMedium;

    return (
        <div className={`${styles.grid} ${columnClass} ${gapClass} ${className}`} {...props}>
            {children}
        </div>
    );
}
