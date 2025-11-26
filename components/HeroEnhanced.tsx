import Link from 'next/link';
import { Button } from '@/components/ui';
import styles from './HeroEnhanced.module.css';

interface HeroEnhancedProps {
    title?: string;
    description?: string;
}

export default function HeroEnhanced({
    title = 'MarketLink: Your Trade Gateway',
    description = "Empowering Africa's automotive sector with structured trade facilitation, international sourcing, compliance support, and market entry consulting."
}: HeroEnhancedProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.glow}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{description}</p>

                    <div className={styles.actions}>
                        <Link href="/contact">
                            <Button variant="primary" size="large">
                                Book Consultation
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="secondary" size="large">
                                Explore Services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
