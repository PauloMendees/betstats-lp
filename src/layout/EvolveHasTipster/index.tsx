import { FootballBall } from '@/assets/brand/FootballBall';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';
import { Button } from '@/components/Button';

export const EvolveHasTipster = () => {
  return (
    <section className="w-full flex flex-col items-center mt-[213px] gap-12 mb-[110px]">
      <div className="flex flex-col gap-4 items-center max-w-[839px] w-full">
        <Button className="w-fit px-4 py-2" scheme="outlined" withoutAction>
          <span className="font-rubik text-lg font-light">ESTRATEGISTA COM BETSTATS!</span>
        </Button>
        <h2 className="font-semibold text-[32px] leading-9 font-rubik text-center">
          Evolua de apostador para{' '}
          <b className="gradient-text font-semibold">estrategista com Betstats!</b>
        </h2>
        <p className="text-[22px] leading-7 text-center font-extralight">
          Esse é o momento para abandonar os métodos tradicionais e adotar uma abordagem de apostas
          mais sofisticada. A Betstats oferece as ferramentas e informações que você precisa para se
          tornar um verdadeiro estrategista no jogo.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <Button className="py-[22px] px-9">
          <span className="font-semibold text-base">TOME UMA ATITUDE E COMECE AGORA!</span>
          <FootballBall />
        </Button>
        <PagarmeLogo />
      </div>
    </section>
  );
};
