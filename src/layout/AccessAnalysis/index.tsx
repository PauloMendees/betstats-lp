import Image from 'next/image';
import AccessAnalysisImage from '../../../public/images/access-analysis-image.png';
import { Button } from '@/components/Button';
import { FootballBall } from '@/assets/brand/FootballBall';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';

export const AccessAnalysis = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-10 mb-20 lg:mb-0">
      <div className="md:mr-[-80px] lg:mr-[-120px] ml-[-200px]">
        <Image
          src={AccessAnalysisImage}
          alt="Imagem de uma bola e um pano verde com o dashboard de fundo com opcaidade baixa"
        />
      </div>
      <div className="flex flex-col items-start gap-10 max-w-[558px] w-full">
        <h2 className="font-rubik text-[40px] leading-[44px]">
          <b className="text-brand-primary font-extrabold">Chega de adivinhação!</b> Acesse análises
          que transformam cada aposta em uma jogada de mestre.
        </h2>
        <p className="text-[22px leading-7] text-text-secondary">
          Nossas ferramentas e insights são desenhados para dar a você uma vantagem incontestável,
          transformando suas apostas de meros palpites em estratégias bem planejadas e vitoriosas. 
        </p>
        <div className="flex flex-col items-center gap-[10px]">
          <Button className="px-9 py-[22px]">
            <span className="font-semibold">ACESSE ANÁLISES EXCLUSIVAS AGORA!</span>
            <FootballBall />
          </Button>
          <PagarmeLogo />
        </div>
      </div>
    </section>
  );
};
