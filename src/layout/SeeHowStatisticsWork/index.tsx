import Image from 'next/image';
import SeeHowStatisticsWorkImage from '../../../public/images/how-statistics-work.png';

export const SeeHowStatisticsWork = () => {
  return (
    <section className="mx-auto max-w-[1523px] w-full bg-green-gradient rounded-[30px] pt-6 pb-6 xl:pb-5 xl:pt-0 px-8 mt-[178px] flex items-center gap-10 lg:gap-28">
      <div className="mb-5">
        <Image
          src={SeeHowStatisticsWorkImage}
          alt="Imagem mostrando a tela inicial das estatisticas de um jogo"
        />
      </div>
      <div className="flex flex-col gap-12 max-w-[518px] w-full">
        <h2 className="font-rubik text-[40px] leading-[44px]">
          Tome <b className="font-extrabold">decisões de apostas</b> embasadas em{' '}
          <b className="font-extrabold">análise de classe mundial.</b>
        </h2>
        <p>
          Nosso sistema de análise processa uma{' '}
          <b className="font-bold">grande quantidade de dados</b>, incluindo histórico de jogos,
          performance de jogadores e tendências de mercado.
          <br />
          <br />
          Este método garante que cada recomendação seja baseada em análises técnicas e precisas,
          permitindo que você faça{' '}
          <b className="font-bold">
            apostas com confiança, guiadas por um conhecimento profundo e insights valiosos.
          </b>
        </p>
      </div>
    </section>
  );
};
