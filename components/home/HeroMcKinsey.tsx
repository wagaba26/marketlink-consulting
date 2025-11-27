import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HeroMcKinsey.module.css';

export default function HeroMcKinsey() {
    return (
        <section className={styles.hero}>
            <div className={styles.visual} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        What’s your next trade move?
                    </h1>
                    <p className={styles.subtitle}>
                        We help Africa’s automotive traders and international suppliers turn complex sourcing, logistics, and finance into simple, structured trade.
                    </p>

                    <Link href="/contact" className={styles.ctaButton}>
                        Talk to Us
                        <ArrowRight className={styles.arrowIcon} size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
