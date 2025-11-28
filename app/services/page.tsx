import ServiceSection from '@/components/services/ServiceSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Our Services",
    description: "Comprehensive automotive trade consulting services in Uganda and East Africa. Market entry strategy, compliance support, trade finance, and business formalization for suppliers and traders.",
};


export default function Services() {
    const supplierServices = [
        "Market entry consulting & strategy",
        "Regulatory & compliance support",
        "Account management & financial administration",
        "Due diligence & KYC/AML checks",
        "Identification of verified local distributors"
    ];

    const traderServices = [
        "Trader onboarding & business formalisation",
        "Credit assessment & trade finance",
        "Capacity building (bookkeeping, digital payments)",
        "Access to quality automotive products",
        "Inventory management support"
    ];

    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Our Services</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Tailored solutions for every stage of the automotive supply chain.
                </p>
            </div>

            {/* Supplier Services */}
            <ServiceSection
                type="supplier"
                title="For International Suppliers"
                description="Expand your reach into the African market with confidence. We handle the complexities of market entry so you can focus on production."
                buttonText="Schedule Supplier Consultation"
                buttonLink="/contact?type=supplier"
                imageSrc="/images/supplier-meeting.jpg"
                imageAlt="International Supplier Meeting"
                services={supplierServices}
            />

            <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '4rem 0' }} />

            {/* Trader Services */}
            <ServiceSection
                type="trader"
                title="For Automotive Traders"
                description="Grow your business with access to genuine parts, credit, and professional support. We help you formalize and scale."
                buttonText="Register as Trader"
                buttonLink="/contact?type=trader"
                imageSrc="/images/trader-shop-v2.jpg"
                imageAlt="Automotive Trader Shop"
                services={traderServices}
                reverse
            />
        </div>
    );
}
