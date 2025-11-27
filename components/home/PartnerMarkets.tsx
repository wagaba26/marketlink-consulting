import styles from './PartnerMarkets.module.css';

const markets = [
    {
        country: 'Japan',
        description: 'High-quality used vehicles and precision machinery.',
    },
    {
        country: 'China',
        description: 'Cost-effective parts, tires, and heavy equipment.',
    },
    {
        country: 'South Korea',
        description: 'Modern fleet vehicles and specialized automotive tech.',
    },
    {
        country: 'Dubai (UAE)',
        description: 'Central hub for rapid logistics and diverse inventory.',
    },
    {
        country: 'United Kingdom',
        description: 'Premium luxury vehicles and commercial trucks.',
    },
    {
        country: 'Local & Regional Africa',
        description: 'Cross-border trade and regional distribution networks.',
    },
];

export default function PartnerMarkets() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Partner Markets We Source From</h2>
                    <p className={styles.description}>
                        Our global network ensures you get the best value and quality from the world's leading automotive hubs.
                    </p>
                </div>

                <div className={styles.scrollContainer}>
                    {markets.map((market, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.countryName}>{market.country}</h3>
                            <p className={styles.countryDesc}>{market.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
