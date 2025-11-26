import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Grid } from '@/components/ui';
import styles from './ServiceSection.module.css';

interface ServiceSectionProps {
    type: 'supplier' | 'trader';
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
    imageAlt: string;
    services: string[];
    reverse?: boolean;
}

export default function ServiceSection({
    type,
    title,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    services,
    reverse = false,
}: ServiceSectionProps) {
    return (
        <div className={styles.serviceSection}>
            <div className={`${styles.sectionHeader} ${reverse ? styles.reverse : ''}`}>
                <div className={styles.serviceContent}>
                    <h2 className="mb-2">{title}</h2>
                    <p className="mb-4">{description}</p>
                    <Link href={buttonLink} className="btn btn-primary">
                        {buttonText} <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
                <div className={styles.serviceImageWrapper}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className={styles.serviceImage}
                    />
                </div>
            </div>

            <Grid columns={2} className={styles.serviceGrid}>
                {services.map((item, i) => (
                    <div key={i} className={styles.serviceCard}>
                        <div className={styles.cardHeader}>
                            <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0 }} />
                            <span>{item}</span>
                        </div>
                    </div>
                ))}
            </Grid>
        </div>
    );
}
