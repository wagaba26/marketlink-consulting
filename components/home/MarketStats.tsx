import Link from 'next/link';
import { Grid } from '@/components/ui';
import styles from './MarketStats.module.css';

export default function MarketStats() {
    const stats = [
        { value: '5%+', label: 'Annual Growth' },
        { value: '$30B', label: 'Market Value' },
        { value: '50+', label: 'Traders Network' },
        { value: '10+', label: 'Global Partners' },
    ];

    return (
        <Grid columns={2} style={{ alignItems: 'center' }}>
            <div>
                <h2 className="mb-4">Africa's Growing Automotive Market</h2>
                <p className="mb-4">
                    The African automotive aftermarket is projected to grow significantly, driven by a rising middle class and increased vehicle ownership. MarketLink positions you to capitalize on this opportunity.
                </p>
                <Link href="/insights" className="btn btn-secondary">Read Market Report</Link>
            </div>

            <Grid columns={2}>
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <div className={styles.statNumber}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </Grid>
        </Grid>
    );
}
