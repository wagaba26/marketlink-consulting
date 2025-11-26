import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS, FOOTER_DESCRIPTION, SITE_NAME } from '@/lib/constants';
import { createTelLink, createMailtoLink } from '@/lib/utils';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Company Info */}
                    <div className={styles.column}>
                        <h3>{SITE_NAME}</h3>
                        <p>{FOOTER_DESCRIPTION}</p>
                        <div className={styles.socials}>
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    className={styles.socialIcon}
                                    aria-label={social.name}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <nav className={styles.links}>
                            {NAV_LINKS.slice(1).map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={styles.link}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" className={styles.link}>Contact</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.column}>
                        <h3>Contact Us</h3>
                        <div className={styles.links}>
                            <p className={styles.link} style={{ display: 'flex', gap: '0.5rem' }}>
                                <MapPin size={18} />
                                {CONTACT_INFO.address}
                            </p>
                            <a
                                href={createMailtoLink(CONTACT_INFO.email)}
                                className={styles.link}
                                style={{ display: 'flex', gap: '0.5rem' }}
                            >
                                <Mail size={18} />
                                {CONTACT_INFO.email}
                            </a>
                            <a
                                href={createTelLink(CONTACT_INFO.phone)}
                                className={styles.link}
                                style={{ display: 'flex', gap: '0.5rem' }}
                            >
                                <Phone size={18} />
                                {CONTACT_INFO.phone}
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} {SITE_NAME} Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
