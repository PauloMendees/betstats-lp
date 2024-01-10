import { DesktopLogo } from '@/assets/brand/Logo.desktop';
import { Button } from '../Button';

export const DesktopHeader = () => {
  return (
    <header className="px-8 w-full py-7 border-b border-common-white-250 backdrop-blur-xl fixed top-0">
      <nav className="mx-auto max-w-[1280px] flex items-center justify-between gap-4">
        <h1>
          <DesktopLogo />
        </h1>
        <h2 className="font-montserrat font-medium text-common-white-800 text-center">
          Conquiste bons resultados com a betstats
        </h2>
        <Button>
          <span className="text-xs text-center">ANÁLISES EXCLUSIVAS AGORA!</span>
        </Button>
      </nav>
    </header>
  );
};
