import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { Button } from '@/components/Button';
import HeroMainImage from '@/../public/images/hero-main-image.png';
import Image from 'next/image';

export const DesktopHero = () => {
  return (
    <section className="w-full py-[144px] bg-hero-background px-8">
      <div className="flex flex-col items-center max-w-[1280px] mx-auto">
        <div className="flex items-center">
          <div className="flex flex-col items-start gap-[18px]">
            <Button scheme="outlined" className="px-4 py-2">
              BETSTATS
            </Button>
            <div className="flex flex-col items-start gap-6">
              <h2 className="max-w-[590px] font-rubik font-bold text-5xl text-text-primary">
                Saiba como os grandes tipsters{' '}
                <b className="font-bold bg-gradient-to-r from-green-gradient-start to-green-gradient-end text-transparent bg-clip-text">
                  conquistam bons resultados
                </b>{' '}
                usando os números a seu favor.
              </h2>
              <p className="text-start max-w-[518px] text-common-white-800 font-light">
                Deixe os palpites de lado e comece a apostar com análises precisas. A Betstats traz
                a ciência para suas apostas, combinando análise detalhada e dados precisos para uma
                experiência de apostas mais inteligente e lucrativa.
              </p>
            </div>
            <div className="flex flex-col mt-8 gap-[10px] items-center">
              <Button className="py-[22px] px-9">ACESSE ANÁLISES EXCLUSIVAS AGORA!</Button>
              <PagarmeLogo />
            </div>
          </div>
          <div className="ml-[-32px]">
            <Image
              priority
              src={HeroMainImage}
              alt="Imagem mostrando o dashboard inicial da plataforma"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
