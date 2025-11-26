import { Download, FileText, HelpCircle, ChevronDown } from 'lucide-react';

export default function Resources() {
    return (
        <div className="container section">
            <div className="text-center mb-8">
                <h1>Client Resources</h1>
                <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                    Essential tools, forms, and guides to help you succeed.
                </p>
            </div>

            <div className="grid grid-2 mb-8">
                <div>
                    <h2 className="mb-4">Downloads</h2>
                    <div className="grid" style={{ gap: '1rem' }}>
                        <DownloadCard title="Trader Onboarding Form" size="PDF, 1.2 MB" />
                        <DownloadCard title="Supplier Onboarding Form" size="PDF, 1.5 MB" />
                        <DownloadCard title="Compliance Checklist" size="PDF, 0.8 MB" />
                        <DownloadCard title="Getting Started Guide" size="PDF, 2.4 MB" />
                        <DownloadCard title="Credit Application Form" size="DOCX, 0.5 MB" />
                    </div>
                </div>

                <div>
                    <h2 className="mb-4">Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <FAQItem
                            question="How do I register as a trader?"
                            answer="You can register by filling out the online form on our Contact page or downloading the onboarding form here. Our team will verify your details within 48 hours."
                        />
                        <FAQItem
                            question="What are the requirements for credit?"
                            answer="We assess your business history, transaction volume, and inventory turnover. You'll need to provide basic business registration documents and bank statements."
                        />
                        <FAQItem
                            question="Do you handle shipping and customs?"
                            answer="Yes, MarketLink provides end-to-end logistics support, including shipping from the supplier and handling all customs clearance procedures."
                        />
                        <FAQItem
                            question="What is the minimum order quantity?"
                            answer="MOQs vary by supplier and product category. Our platform allows you to view specific requirements for each product."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function DownloadCard({ title, size }: { title: string, size: string }) {
    return (
        <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FileText color="var(--primary)" />
                <div>
                    <h4 style={{ fontSize: '1rem', margin: 0 }}>{title}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{size}</span>
                </div>
            </div>
            <button className="btn" style={{ padding: '0.5rem', background: 'var(--accent)', color: 'var(--primary)' }}>
                <Download size={18} />
            </button>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    return (
        <div className="card" style={{ padding: '1.5rem' }}>
            <h4 style={{ margin: '0 0 0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                {question}
                <ChevronDown size={18} color="var(--text-secondary)" />
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{answer}</p>
        </div>
    );
}
