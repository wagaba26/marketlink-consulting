import { Grid } from '@/components/ui';

export default function MissionVision() {
    return (
        <Grid columns={2} style={{ gap: '3rem', alignItems: 'center' }}>
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
        </Grid>
    );
}
