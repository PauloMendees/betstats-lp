import { FootballBall } from '@/assets/brand/FootballBall';

const RepeatContent = () => {
  return (
    <div className="flex items-center gap-3 min-w-fit">
      <span className="text-bg-main">
        CONQUISTE BONS <b>RESULTADOS</b> COM A <b>BETSTATS</b>
      </span>
      <FootballBall />
    </div>
  );
};

export const GreenRange = () => {
  return (
    <div className="bg-green-gradient w-full h-[90px] flex items-center gap-3 overflow-hidden">
      <div className="ml-[-120px] min-w-fit">
        <RepeatContent />
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <RepeatContent key={index} />
      ))}
    </div>
  );
};
