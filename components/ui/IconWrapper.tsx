import type { IconWrapperProps } from '@/types';
import styles from './ui.module.css';

export default function IconWrapper({
    icon: Icon,
    size = 'medium',
    color = 'var(--primary)',
    background = false,
}: IconWrapperProps) {
    const sizeMap = {
        small: 20,
        medium: 24,
        large: 32,
    };

    const iconSize = sizeMap[size];
    const sizeClass = styles[`icon-${size}`] || styles.iconMedium;
    const backgroundClass = background ? styles.iconBackground : '';

    return (
        <div className={`${styles.iconWrapper} ${sizeClass} ${backgroundClass}`}>
            <Icon size={iconSize} color={color} />
        </div>
    );
}
