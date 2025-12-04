import Link from 'next/link';
import { Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers",
    description: "Join the MarketLink Consulting network. We are always looking for experienced automotive trade consultants and industry experts.",
};

export default function Careers() {
    return (
        <div className="container section">
            <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="mb-6">Careers at MarketLink</h1>

                <div className="card mb-8" style={{ padding: '3rem 2rem' }}>
                    <h3 className="mb-4">Join Our Network</h3>
                    <p className="mb-6" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        We currently have no open full-time positions.
                    </p>
                    <p className="mb-8" style={{ lineHeight: '1.8' }}>
                        However, we are always looking for experienced automotive trade consultants and industry experts to join our network.
                        If you are a professional with expertise in international trade, logistics, or automotive supply chains, we would love to hear from you.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Mail size={20} color="var(--primary)" />
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                style={{ color: 'var(--primary)', fontWeight: 500, fontSize: '1.1rem' }}
                            >
                                {CONTACT_INFO.email}
                            </a>
                        </div>

                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
