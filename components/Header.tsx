'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useToggle } from '@/hooks/useToggle';
import { NAV_LINKS } from '@/lib/constants';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, toggleMenu, , closeMenu] = useToggle(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.nav}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.jpg"
                        alt="MarketLink Logo"
                        width={40}
                        height={40}
                        style={{ borderRadius: '4px' }}
                    />
                    <span>MarketLink</span>
                </Link>

                <nav className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${isActive(link.href) ? styles.active : ''}`}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="btn btn-primary"
                        onClick={closeMenu}
                    >
                        Get Started
                    </Link>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    );
}
