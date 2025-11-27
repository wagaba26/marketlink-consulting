import Link from 'next/link';
import ProcessStep from '@/components/how-it-works/ProcessStep';
import { Grid } from '@/components/ui';
import { UserPlus, CreditCard, Truck, TrendingUp, FileText, Shield, Users, BarChart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "How It Works",
    description: "Learn how MarketLink Consulting simplifies automotive trade in Uganda and East Africa. Step-by-step processes for traders and international suppliers.",
};

export default function HowItWorks() {
    const traderSteps = [
        {
            icon: <UserPlus />,
            title: "1. Register & KYC",
            description: "Sign up on our platform and complete the Know Your Customer (KYC) verification."
        },
        {
            icon: <CreditCard />,
            title: "2. Credit Growth Support",
            description: "We help traders grow their credit as they continue trading with us or any of our partners."
        },
        {
            icon: <Truck />,
            title: "3. Logistics & Delivery",
            description: "MarketLink handles sourcing, shipping, and customs clearance to your door."
        },
        {
            icon: <TrendingUp />,
            title: "4. Repay & Grow",
            description: "Repay your credit on time to increase your limits and grow your business."
        }
    ];

    const supplierSteps = [
        {
            icon: <FileText />,
            title: "1. Consultation",
            description: "Meet with our experts to discuss your market entry goals and requirements."
        },
        {
            icon: <Shield />,
            title: "2. Compliance & Licensing",
            description: "We handle all regulatory approvals and licensing for the local market."
        },
        {
            icon: <Users />,
            title: "3. Trader Onboarding",
            description: "We connect you with verified local distributors and retailers."
        },
        {
            icon: <BarChart />,
            title: "4. Account Management",
            description: "Receive regular reports on sales, market trends, and financial performance."
        }
    ];

    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>How It Works</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Simple, transparent processes designed to accelerate your business.
                </p>
            </div>

            <Grid columns={2} style={{ gap: '4rem' }}>
                {/* Traders Flow */}
                <div>
                    <h2 className="text-center mb-4">For Traders</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {traderSteps.map((step, index) => (
                            <ProcessStep
                                key={index}
                                icon={step.icon}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link href="/contact?type=trader" className="btn btn-primary">Start as Trader</Link>
                    </div>
                </div>

                {/* Suppliers Flow */}
                <div>
                    <h2 className="text-center mb-4">For Suppliers</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {supplierSteps.map((step, index) => (
                            <ProcessStep
                                key={index}
                                icon={step.icon}
                                title={step.title}
                                description={step.description}
                            />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link href="/contact?type=supplier" className="btn btn-primary">Start as Supplier</Link>
                    </div>
                </div>
            </Grid>
        </div>
    );
}
