import Link from 'next/link';
import styles from './TradeFinance.module.css';

const features = [
    {
        title: 'Flexible Payment',
        text: 'Tailored payment structures that align with your cash flow cycles.',
    },
    {
        title: 'Soft Loan Facilitation',
        text: 'Access to partner financial institutions for trade capital.',
    },
    {
        title: 'Risk & Trust Management',
        text: 'Secure transactions and verified supplier guarantees.',
    },
    {
        title: 'Wholesale Support',
        text: 'Specialized credit terms for high-volume dealers and fleets.',
    },
];

export default function TradeFinance() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <h2 className={styles.title}>Trade Finance & Credit Support</h2>
                        <p className={styles.description}>
                            We understand that capital is the fuel of trade. MarketLink helps bridge the gap with soft loans, installment plans, and trust-based financial instruments to keep your supply chain moving.
                        </p>

                        <div className={styles.featuresGrid}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.featureCard}>
                                    <span className={styles.featureTitle}>{feature.title}</span>
                                    <p className={styles.featureText}>{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className={styles.ctaButton}>
                            Talk to us about financing your next deal
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
