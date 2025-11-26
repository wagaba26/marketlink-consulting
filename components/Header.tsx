import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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

                <nav className={styles.links}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/how-it-works" className={styles.link}>How It Works</Link>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/insights" className={styles.link}>Insights</Link>
                    <Link href="/resources" className={styles.link}>Resources</Link>
                    <Link href="/contact" className="btn btn-primary">Get Started</Link>
                </nav>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Open menu">
                    ☰
                </button>
            </div>
            {isMenuOpen && (
                <>
                    <div className={styles.overlay} onClick={toggleMenu} />
                    <nav className={`${styles.mobileMenu} ${styles.open}`}>
                        <button className={styles.closeBtn} onClick={toggleMenu} aria-label="Close menu">✕</button>
                        <Link href="/" className={styles.link} onClick={toggleMenu}>Home</Link>
                        <Link href="/services" className={styles.link} onClick={toggleMenu}>Services</Link>
                        <Link href="/how-it-works" className={styles.link} onClick={toggleMenu}>How It Works</Link>
                        <Link href="/about" className={styles.link} onClick={toggleMenu}>About Us</Link>
                        <Link href="/insights" className={styles.link} onClick={toggleMenu}>Insights</Link>
                        <Link href="/resources" className={styles.link} onClick={toggleMenu}>Resources</Link>
                        <Link href="/contact" className={"btn btn-primary"} onClick={toggleMenu}>Get Started</Link>
                    </nav>
                </>
            )}
        </header>
    );
}
