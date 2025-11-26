import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>MarketLink: Your Trade Gateway</h1>
                    <p className={styles.subtitle}>
                        Enabling frictionless automotive trade between local auto traders and international suppliers through research, logistics, and compliance.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary" style={{ backgroundColor: '#10B981', border: 'none' }}>
                            Book Consultation
                        </Link>
                        <Link href="/contact?type=trader" className="btn btn-secondary">
                            Register as Trader
                        </Link>
                        <Link href="/contact?type=supplier" className="btn btn-secondary">
                            Register as Supplier
                        </Link>
                    </div>

                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Search for parts, suppliers, or services..."
                            className={styles.searchInput}
                        />
                        <button className={styles.searchBtn}>Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
