import Link from 'next/link';
import { Linkedin, Instagram, Twitter, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>MarketLink Consulting</h3>
                        <p>
                            Your trusted gateway for automotive trade in Africa. Connecting traders with global suppliers through compliance, logistics, and finance.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
                            <a href="#" className={styles.socialIcon}><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <nav className={styles.links}>
                            <Link href="/services" className={styles.link}>Services</Link>
                            <Link href="/how-it-works" className={styles.link}>How It Works</Link>
                            <Link href="/about" className={styles.link}>About Us</Link>
                            <Link href="/insights" className={styles.link}>Market Insights</Link>
                            <Link href="/contact" className={styles.link}>Contact</Link>
                        </nav>
                    </div>

                    <div className={styles.column}>
                        <h3>Contact Us</h3>
                        <div className={styles.links}>
                            <p className={styles.link} style={{ display: 'flex', gap: '0.5rem' }}>
                                <MapPin size={18} />
                                Plot 90, Kanjokya House, 4th Floor,<br />Kanjokya Street, Kampala, Uganda
                            </p>
                            <p className={styles.link} style={{ display: 'flex', gap: '0.5rem' }}>
                                <Mail size={18} />
                                info@marketlinkconsulting.com
                            </p>
                            <p className={styles.link} style={{ display: 'flex', gap: '0.5rem' }}>
                                <Phone size={18} />
                                +256 709 938 589
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} MarketLink Consulting Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
