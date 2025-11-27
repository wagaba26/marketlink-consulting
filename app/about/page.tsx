import DirectorWelcome from '@/components/DirectorWelcome';
import ValueCard from '@/components/about/ValueCard';
import MissionVision from '@/components/about/MissionVision';
import { Section, Grid } from '@/components/ui';
import { Shield, Eye, Handshake, FileText } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about MarketLink Consulting, Uganda's leading automotive trade consulting firm. Our mission is to enable frictionless trade between international suppliers and local automotive traders in East Africa.",
};


export default function About() {
    const values = [
        {
            icon: <Eye />,
            title: "Transparency",
            description: "We operate with openness in all our dealings."
        },
        {
            icon: <Shield />,
            title: "Reliability",
            description: "We deliver on our promises, every time."
        },
        {
            icon: <FileText />,
            title: "Compliance",
            description: "We adhere to all regulatory standards."
        },
        {
            icon: <Handshake />,
            title: "Partnership",
            description: "We build long-term, mutually beneficial relationships."
        }
    ];

    return (
        <>
            <DirectorWelcome />

            {/* Core Values */}
            <Section>
                <h2 className="text-center mb-4" style={{ color: 'var(--primary)' }}>
                    Our Core Values
                </h2>
                <Grid columns={4}>
                    {values.map((value, index) => (
                        <ValueCard
                            key={index}
                            icon={value.icon}
                            title={value.title}
                            description={value.description}
                        />
                    ))}
                </Grid>
            </Section>

            {/* Mission & Vision */}
            <Section background="accent">
                <MissionVision />
            </Section>
        </>
    );
}
