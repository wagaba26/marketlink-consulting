import HeroMcKinsey from '@/components/home/HeroMcKinsey';
import TradeGateway from '@/components/home/TradeGateway';
import PartnerMarkets from '@/components/home/PartnerMarkets';
import TradeFinance from '@/components/home/TradeFinance';
import Newsletter from '@/components/home/Newsletter';
import { Section } from '@/components/ui';

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
