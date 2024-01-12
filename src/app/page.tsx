import { Footer } from '@/components/Footer';
import { AccessAnalysis } from '@/layout/AccessAnalysis';
import { BetstatsIsForYou } from '@/layout/BetstatsIfForYour';
import { EvolveHasTipster } from '@/layout/EvolveHasTipster';
import { FAQ } from '@/layout/FAQ';
import { GreenRange } from '@/layout/GreenRange';
import Hero from '@/layout/Hero';
import { SeeHowStatisticsWork } from '@/layout/SeeHowStatisticsWork';
import { SpendMoney } from '@/layout/SpendMoney';
import { TakeDecisions } from '@/layout/TakeDecisions';
import { TiredOfAnalysis } from '@/layout/TiredOfAnalysis';

export default function Home() {
  return (
    <main className="flex flex-col text-text-primary">
      <Hero.Desktop />
      <GreenRange />
      <TiredOfAnalysis />
      <TakeDecisions />
      <BetstatsIsForYou />
      <SpendMoney />
      <SeeHowStatisticsWork />
      <AccessAnalysis />
      <FAQ />
      <EvolveHasTipster />
      <Footer />
    </main>
  );
}
