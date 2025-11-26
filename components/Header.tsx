'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <Link href="/" className={styles.link} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/services" className={styles.link} onClick={() => setIsMenuOpen(false)}>Services</Link>
                    <Link href="/how-it-works" className={styles.link} onClick={() => setIsMenuOpen(false)}>How It Works</Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link href="/insights" className={styles.link} onClick={() => setIsMenuOpen(false)}>Insights</Link>
                    <Link href="/resources" className={styles.link} onClick={() => setIsMenuOpen(false)}>Resources</Link>
                    <Link href="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </nav>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    );
}
