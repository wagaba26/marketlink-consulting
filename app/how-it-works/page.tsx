import Link from 'next/link';
import { UserPlus, CreditCard, ShoppingCart, Truck, TrendingUp, FileText, Shield, Users, BarChart } from 'lucide-react';

export default function HowItWorks() {
    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>How It Works</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Simple, transparent processes designed to accelerate your business.
                </p>
            </div>

            <div className="grid grid-2" style={{ gap: '4rem' }}>
                {/* Traders Flow */}
                <div>
                    <h2 className="text-center mb-4">For Traders</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Step
                            icon={<UserPlus />}
                            title="1. Register & KYC"
                            desc="Sign up on our platform and complete the Know Your Customer (KYC) verification."
                        />
                        <Step
                            icon={<CreditCard />}
                            title="2. Credit Growth Support"
                            desc="We help traders grow their credit as they continue trading with us or any of our partners."
                        />

                        <Step
                            icon={<Truck />}
                            title="3. Logistics & Delivery"
                            desc="MarketLink handles sourcing, shipping, and customs clearance to your door."
                        />
                        <Step
                            icon={<TrendingUp />}
                            title="4. Repay & Grow"
                            desc="Repay your credit on time to increase your limits and grow your business."
                        />
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link href="/contact?type=trader" className="btn btn-primary">Start as Trader</Link>
                    </div>
                </div>

                {/* Suppliers Flow */}
                <div>
                    <h2 className="text-center mb-4">For Suppliers</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Step
                            icon={<FileText />}
                            title="1. Consultation"
                            desc="Meet with our experts to discuss your market entry goals and requirements."
                        />
                        <Step
                            icon={<Shield />}
                            title="2. Compliance & Licensing"
                            desc="We handle all regulatory approvals and licensing for the local market."
                        />
                        <Step
                            icon={<Users />}
                            title="3. Trader Onboarding"
                            desc="We connect you with verified local distributors and retailers."
                        />
                        <Step
                            icon={<BarChart />}
                            title="4. Account Management"
                            desc="Receive regular reports on sales, market trends, and financial performance."
                        />
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link href="/contact?type=supplier" className="btn btn-primary">Start as Supplier</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Step({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{
                background: 'var(--accent)',
                padding: '10px',
                borderRadius: '50%',
                color: 'var(--primary)',
                flexShrink: 0
            }}>
                {icon}
            </div>
            <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{desc}</p>
            </div>
        </div>
    );
}
