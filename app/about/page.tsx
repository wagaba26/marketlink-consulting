import DirectorWelcome from '@/components/DirectorWelcome';
import { Shield, Eye, Handshake } from 'lucide-react';

export default function About() {
    return (
        <>
            <DirectorWelcome />

            {/* Core Values */}
            <section className="section container">
                <h2 className="text-center mb-4" style={{ color: 'var(--primary)' }}>Our Core Values</h2>
                <div className="grid grid-4">
                    <ValueCard icon={<Eye />} title="Transparency" desc="We operate with openness in all our dealings." />
                    <ValueCard icon={<Shield />} title="Reliability" desc="We deliver on our promises, every time." />
                    <ValueCard icon={<FileTextIcon />} title="Compliance" desc="We adhere to all regulatory standards." />
                    <ValueCard icon={<Handshake />} title="Partnership" desc="We build long-term, mutually beneficial relationships." />
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section" style={{ background: 'var(--accent)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                To enable frictionless automotive trade between local auto traders and international suppliers through research, account management, credit assessment, logistics, compliance, and digital tools.
                            </p>
                        </div>
                        <div>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Vision</h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                                To be Africa's leading gateway for automotive trade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="card text-center">
            <div style={{ color: 'var(--primary)', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{desc}</p>
        </div>
    );
}

function FileTextIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" /></svg>
    );
}
