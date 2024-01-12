import { colors } from '@/theme/colors';
import { FiUser } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import SpendMoneyImage from '../../../public/images/spend-money.png';
import GreenLight from '../../../public/images/green-light.png';
import Image from 'next/image';

export const SpendMoney = () => {
  return (
    <div className="w-full flex items-center justify-center gap-16 px-8">
      <div className="flex flex-col items-start gap-10 max-w-[540px] w-full">
        <div className="flex items-center gap-7">
          <div className="rounded-full bg-bg-secondary p-[10px]">
            <IoMdNotificationsOutline size={28} color={colors.brand.primary} />
          </div>
          <div className="rounded-full bg-bg-secondary p-[10px]">
            <FiUser size={28} color={colors.brand.primary} />
          </div>
        </div>
        <h2 className="font-rubik text-[40px] leading-[44px]">
          A dura verdade é que <b className="gradient-text font-bold">apostar sem estratégia</b> é
          jogar seu <b className="gradient-text font-bold">dinheiro fora.</b>
        </h2>
        <p className="text-[22px] leading-[27px]">
          Nós oferecemos análises aprofundadas e dados estatísticos que transformam suas apostas de
          meras tentativas no escuro em estratégias inteligentes e bem fundamentadas.
          <br />
          <br />
          Chega de confiar na sorte! É hora de agir com informações que realmente importam, elevando
          suas apostas a um patamar de sucesso comprovado.
          <br />
          <br />
          Com Betstats, você não apenas aposta, você investe de forma inteligente em cada jogo,
          transformando oportunidades em lucro real.
        </p>
      </div>
      <div className="relative">
        <Image src={SpendMoneyImage} alt="Imagem com um cesto de lixo cheio de dinheiro" />
        <div className="-z-10 absolute bg-brand-primary top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[500px] blur-[40rem]" />
      </div>
    </div>
  );
};
