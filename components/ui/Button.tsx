import type { ButtonProps } from '@/types';
import styles from './ui.module.css';

export default function Button({
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    icon,
    children,
    className = '',
    disabled,
    ...props
}: ButtonProps) {
    const variantClass = styles[`btn-${variant}`] || styles.btnPrimary;
    const sizeClass = styles[`btn-${size}`] || styles.btnMedium;

    return (
        <button
            className={`${styles.btn} ${variantClass} ${sizeClass} ${className}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <span className={styles.spinner}>Loading...</span>
            ) : (
                <>
                    {children}
                    {icon && <span className={styles.btnIcon}>{icon}</span>}
                </>
            )}
        </button>
    );
}
