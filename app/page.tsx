import HeroMcKinsey from '@/components/home/HeroMcKinsey';
import TradeGateway from '@/components/home/TradeGateway';
import PartnerMarkets from '@/components/home/PartnerMarkets';
import TradeFinance from '@/components/home/TradeFinance';
import Newsletter from '@/components/home/Newsletter';
import { Section } from '@/components/ui';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automotive Trade Gateway in Uganda & East Africa",
  description: "MarketLink Consulting connects international automotive suppliers with local traders in Uganda and East Africa. Expert market entry, compliance, and trade finance solutions for the automotive industry.",
};


export default function Home() {
  return (
    <>
      <HeroMcKinsey />
      <TradeGateway />
      <PartnerMarkets />
      <TradeFinance />

      {/* Newsletter */}
      <Section>
        <Newsletter />
      </Section>
    </>
  );
}
