import { Car, Settings, Disc, Wrench, Globe } from 'lucide-react';
import styles from './TradeGateway.module.css';

const services = [
    {
        title: 'Vehicles & Fleets',
        description: 'Sourcing reliable new and used vehicles for dealerships and corporate fleets.',
        icon: Car,
    },
    {
        title: 'New & Used Auto Parts',
        description: 'Access to high-quality engine, body, and electrical parts from trusted global suppliers.',
        icon: Settings,
    },
    {
        title: 'Tires, Batteries & Consumables',
        description: 'Bulk procurement of essential maintenance items to keep fleets running.',
        icon: Disc,
    },
    {
        title: 'Workshop & Garage Equipment',
        description: 'Tools and machinery to upgrade service centers and repair shops.',
        icon: Wrench,
    },
    {
        title: 'Custom Sourcing Requests',
        description: 'Tailored procurement solutions for hard-to-find items or specific business needs.',
        icon: Globe,
    },
];

export default function TradeGateway() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Your Automotive Trade Gateway</h2>
                    <p className={styles.description}>
                        We simplify the complexity of international trade, connecting you with verified suppliers and handling the logistics so you can focus on your business.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
