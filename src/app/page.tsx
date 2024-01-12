import { BetstatsIsForYou } from '@/layout/BetstatsIfForYour';
import { GreenRange } from '@/layout/GreenRange';
import Hero from '@/layout/Hero';
import { SpendMoney } from '@/layout/SpendMoney';
import { TakeDecisions } from '@/layout/TakeDecisions';
import { TiredOfAnalysis } from '@/layout/TiredOfAnalysis';

export default function Home() {
  return (
    <main className="flex flex-col text-text-primary pb-40">
      <Hero.Desktop />
      <GreenRange />
      <TiredOfAnalysis />
      <TakeDecisions />
      <BetstatsIsForYou />
      <SpendMoney />
    </main>
  );
}
