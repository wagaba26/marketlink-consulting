import HeroEnhanced from '@/components/HeroEnhanced';
import WhoWeServe from '@/components/home/WhoWeServe';
import ServicesPreview from '@/components/home/ServicesPreview';
import MarketStats from '@/components/home/MarketStats';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import Newsletter from '@/components/home/Newsletter';
import { Section } from '@/components/ui';

export default function Home() {
  return (
    <>
      <HeroEnhanced />

      {/* Who We Serve */}
      <Section>
        <h2 className="text-center mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--primary)' }}>
          Who We Serve
        </h2>
        <p className="text-center mb-8" style={{ maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--text-secondary)' }}>
          We bridge the gap between local automotive traders in Africa and global manufacturers.
        </p>
        <WhoWeServe />
      </Section>

      {/* Services Preview */}
      <Section background="accent">
        <h2 className="text-center mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--primary)' }}>
          Our Core Services
        </h2>
        <p className="text-center mb-8" style={{ maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--text-secondary)' }}>
          Comprehensive solutions to facilitate seamless automotive trade.
        </p>
        <ServicesPreview />
      </Section>

      {/* Market Stats */}
      <Section>
        <MarketStats />
      </Section>

      {/* How It Works */}
      <Section background="primary">
        <h2 className="text-center mb-2" style={{ fontSize: '2.25rem', fontWeight: 700, color: 'white' }}>
          How MarketLink Works
        </h2>
        <HowItWorksSection />
      </Section>

      {/* Newsletter */}
      <Section>
        <Newsletter />
      </Section>
    </>
  );
}
