import Link from 'next/link';
import { Users, Globe } from 'lucide-react';
import { Card, Grid } from '@/components/ui';

export default function WhoWeServe() {
    return (
        <Grid columns={2}>
            <Card>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                    <Users size={32} />
                </div>
                <h3>Automotive Traders</h3>
                <p className="mb-4">
                    Garages, workshops, retailers, and distributors looking for genuine parts, credit facilities, and streamlined logistics.
                </p>
                <ul className="mb-4" style={{ listStyle: 'none' }}>
                    <li className="mb-1">✓ Access to global suppliers</li>
                    <li className="mb-1">✓ Credit assessment & funding</li>
                    <li className="mb-1">✓ Business formalization support</li>
                </ul>
                <Link href="/services" className="btn btn-secondary">Learn More</Link>
            </Card>

            <Card>
                <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
                    <Globe size={32} />
                </div>
                <h3>International Suppliers</h3>
                <p className="mb-4">
                    Manufacturers and distributors seeking reliable market entry, compliance management, and verified local partners.
                </p>
                <ul className="mb-4" style={{ listStyle: 'none' }}>
                    <li className="mb-1">✓ Market entry consulting</li>
                    <li className="mb-1">✓ Regulatory compliance</li>
                    <li className="mb-1">✓ Verified distributor network</li>
                </ul>
                <Link href="/services" className="btn btn-secondary">Learn More</Link>
            </Card>
        </Grid>
    );
}
