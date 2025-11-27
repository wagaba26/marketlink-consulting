import DownloadCard from '@/components/resources/DownloadCard';
import FAQItem from '@/components/resources/FAQItem';
import { Grid } from '@/components/ui';
import type { DownloadResource, FAQItemData } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Resources",
    description: "Download forms, guides, and FAQs for automotive trade in Uganda. Essential resources for traders and suppliers working with MarketLink Consulting.",
};

export default function Resources() {
    const downloads: DownloadResource[] = [
        { title: "Trader Onboarding Form", size: "PDF, 1.2 MB" },
        { title: "Supplier Onboarding Form", size: "PDF, 1.5 MB" },
        { title: "Compliance Checklist", size: "PDF, 0.8 MB" },
        { title: "Getting Started Guide", size: "PDF, 2.4 MB" },
        { title: "Credit Application Form", size: "DOCX, 0.5 MB" }
    ];

    const faqs: FAQItemData[] = [
        {
            question: "How do I register as a trader?",
            answer: "You can register by filling out the online form on our Contact page or downloading the onboarding form here. Our team will verify your details within 48 hours."
        },
        {
            question: "What are the requirements for credit?",
            answer: "We assess your business history, transaction volume, and inventory turnover. You'll need to provide basic business registration documents and bank statements."
        },
        {
            question: "Do you handle shipping and customs?",
            answer: "Yes, MarketLink provides end-to-end logistics support, including shipping from the supplier and handling all customs clearance procedures."
        },
        {
            question: "What is the minimum order quantity?",
            answer: "MOQs vary by supplier and product category. Our platform allows you to view specific requirements for each product."
        }
    ];

    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Client Resources</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Essential tools, forms, and guides to help you succeed.
                </p>
            </div>

            <Grid columns={2} className="mb-8">
                <div>
                    <h2 className="mb-4">Downloads</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {downloads.map((download, index) => (
                            <DownloadCard key={index} {...download} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="mb-4">Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} {...faq} />
                        ))}
                    </div>
                </div>
            </Grid>
        </div>
    );
}
