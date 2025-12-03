import Image from 'next/image';
import { Car, Settings, Disc, Wrench, Globe } from 'lucide-react';
import styles from './TradeGateway.module.css';

const services = [
    {
        title: 'Vehicles & Fleets',
        description: 'Sourcing reliable new and used vehicles for dealerships and corporate fleets.',
        image: '/images/trader-garage.jpg',
        icon: Car,
    },
    {
        title: 'New & Used Auto Parts',
        description: 'Access to high-quality engine, body, and electrical parts from trusted global suppliers.',
        image: '/images/category-parts.jpg',
        icon: Settings,
    },
    {
        title: 'Tires, Batteries & Consumables',
        description: 'Bulk procurement of essential maintenance items to keep fleets running.',
        image: '/images/category-tires.jpg',
        icon: Disc,
    },
    {
        title: 'Workshop & Garage Equipment',
        description: 'Tools and machinery to upgrade service centers and repair shops.',
        image: '/images/category-workshop.jpg',
        icon: Wrench,
    },
    {
        title: 'Custom Sourcing Requests',
        description: 'Tailored procurement solutions for hard-to-find items or specific business needs.',
        image: '/images/category-vehicles.jpg',
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
                            <div className={styles.imageWrapper}>
                                {service.image ? (
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={250}
                                        className={styles.cardImage}
                                        style={{ objectFit: 'cover', width: '100%', height: '200px', borderRadius: '8px 8px 0 0' }}
                                    />
                                ) : (
                                    <div className={styles.iconWrapper} style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f3f4f6', borderRadius: '8px 8px 0 0' }}>
                                        <service.icon size={48} strokeWidth={1.5} color="var(--primary)" />
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
