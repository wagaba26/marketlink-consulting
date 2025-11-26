import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import styles from './services.module.css';

export default function Services() {
    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Our Services</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Tailored solutions for every stage of the automotive supply chain.
                </p>
            </div>

            {/* Supplier Services */}
            <div className={styles.serviceSection}>
                <div className={styles.sectionHeader}>
                    <div className={styles.serviceContent}>
                        <h2 className="mb-2">For International Suppliers</h2>
                        <p className="mb-4">
                            Expand your reach into the African market with confidence. We handle the complexities of market entry so you can focus on production.
                        </p>
                        <Link href="/contact?type=supplier" className="btn btn-primary">
                            Schedule Supplier Consultation <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                    <div className={styles.serviceImageWrapper}>
                        <Image
                            src="/images/supplier-meeting.jpg"
                            alt="International Supplier Meeting"
                            fill
                            className={styles.serviceImage}
                        />
                    </div>
                </div>

                <div className={styles.serviceGrid}>
                    {[
                        "Market entry consulting & strategy",
                        "Regulatory & compliance support",
                        "Account management & financial administration",
                        "Due diligence & KYC/AML checks",
                        "Identification of verified local distributors"
                    ].map((item, i) => (
                        <div key={i} className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4rem 0' }} />

            {/* Trader Services */}
            <div className={styles.serviceSection}>
                <div className={`${styles.sectionHeader} ${styles.reverse}`}>
                    <div className={styles.serviceContent}>
                        <h2 className="mb-2">For Automotive Traders</h2>
                        <p className="mb-4">
                            Grow your business with access to genuine parts, credit, and professional support. We help you formalize and scale.
                        </p>
                        <Link href="/contact?type=trader" className="btn btn-primary">
                            Register as Trader <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                    <div className={styles.serviceImageWrapper}>
                        <Image
                            src="/images/trader-shop.jpg"
                            alt="Automotive Trader Shop"
                            fill
                            className={styles.serviceImage}
                        />
                    </div>
                </div>

                <div className={styles.serviceGrid}>
                    {[
                        "Trader onboarding & business formalisation",
                        "Credit assessment & trade finance",
                        "Capacity building (bookkeeping, digital payments)",
                        "Access to quality automotive products",
                        "Inventory management support"
                    ].map((item, i) => (
                        <div key={i} className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0 }} />
                                <span>{item}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
