import Link from 'next/link';
import { ShieldCheck, Truck, CreditCard } from 'lucide-react';
import { Card, Grid } from '@/components/ui';

export default function ServicesPreview() {
    const services = [
        {
            icon: ShieldCheck,
            title: 'Compliance & Consulting',
            description: 'Regulatory support, KYC/AML checks, and market entry strategies for suppliers.',
        },
        {
            icon: Truck,
            title: 'Logistics & Sourcing',
            description: 'End-to-end supply chain management, warehousing, and customs clearance.',
        },
        {
            icon: CreditCard,
            title: 'Financial Services',
            description: 'Credit assessment, trade finance facilitation, and secure payment processing.',
        },
    ];

    return (
        <>
            <Grid columns={3}>
                {services.map((service, index) => (
                    <Card key={index}>
                        <service.icon size={40} className="mb-2" color="var(--primary)" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Card>
                ))}
            </Grid>

            <div className="text-center" style={{ marginTop: '3rem' }}>
                <Link href="/services" className="btn btn-primary">View All Services</Link>
            </div>
        </>
    );
}
