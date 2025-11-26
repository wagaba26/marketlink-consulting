import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Services() {
    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Our Services</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Tailored solutions for every stage of the automotive supply chain.
                </p>
            </div>

            {/* Supplier Services */}
            <div className="grid grid-2 mb-8" style={{ alignItems: 'center' }}>
                <div>
                    <h2 className="mb-2">For International Suppliers</h2>
                    <p className="mb-4">
                        Expand your reach into the African market with confidence. We handle the complexities of market entry so you can focus on production.
                    </p>
                    <ul className="mb-4" style={{ listStyle: 'none' }}>
                        {[
                            "Market entry consulting & strategy",
                            "Regulatory & compliance support",
                            "Account management & financial administration",
                            "Due diligence & KYC/AML checks",
                            "Identification of verified local distributors"
                        ].map((item, i) => (
                            <li key={i} className="mb-1" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <CheckCircle size={18} color="var(--success)" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact?type=supplier" className="btn btn-primary">
                        Schedule Supplier Consultation <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
                <div style={{ background: 'var(--accent)', height: '300px', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Image Placeholder: Supplier Meeting</span>
                </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4rem 0' }} />

            {/* Trader Services */}
            <div className="grid grid-2 mb-8" style={{ alignItems: 'center' }}>
                <div style={{ order: 1 }}>
                    <div style={{ background: 'var(--accent)', height: '300px', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Image Placeholder: Auto Workshop</span>
                    </div>
                </div>
                <div style={{ order: 2 }}>
                    <h2 className="mb-2">For Automotive Traders</h2>
                    <p className="mb-4">
                        Grow your business with access to genuine parts, credit, and professional support. We help you formalize and scale.
                    </p>
                    <ul className="mb-4" style={{ listStyle: 'none' }}>
                        {[
                            "Trader onboarding & business formalisation",
                            "Credit assessment & trade finance",
                            "Capacity building (bookkeeping, digital payments)",
                            "Access to quality automotive products",
                            "Inventory management support"
                        ].map((item, i) => (
                            <li key={i} className="mb-1" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <CheckCircle size={18} color="var(--success)" /> {item}
                            </li>
                        ))}
                    </ul>
                    <Link href="/contact?type=trader" className="btn btn-primary">
                        Register as Trader <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
