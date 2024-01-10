import { GreenRange } from '@/layout/GreenRange';
import Hero from '@/layout/Hero';

export default function Home() {
  return (
    <main className="flex flex-col text-text-primary">
      <Hero.Desktop />
      <GreenRange />
    </main>
  );
}
