import { FootballBall } from '@/assets/brand/FootballBall';
import { Button } from '@/components/Button';
import { colors } from '@/theme/colors';
import { Card } from './components/Card';
import { DataIcon } from '@/assets/icons/Data';
import { useGridContent } from './hooks/useGridContent';
import { PagarmeLogo } from '@/assets/partners/PagarmeLogo';

export const BetstatsIsForYou = () => {
  const { articles } = useGridContent();
  return (
    <section className="w-full flex flex-col items-center gap-6 pb-[215px] pt-[180px] px-8">
      <Button scheme="outlined" className="py-2 px-6 border-common-grey-800">
        <FootballBall color={colors.brand.primary} />
        <span className="text-sm font-medium text-common-grey-800">A BETSTATS É PRA VOCÊ</span>
      </Button>
      <h2 className="text-5xl font-rubik font-bold">
        A <b className="gradient-text font-bold">BETSTATS</b> É PRA VOCÊ QUE...
      </h2>
      <div className="w-full max-w-[1378px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-5">
        {articles.map((article) => (
          <Card key={article.title} title={article.title} body={article.body} icon={article.icon} />
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-3">
        <Button className="py-5 px-9">
          <span className="font-semibold">JUNTE-SE A COMUNIDADE BETSTATS AGORA!</span>
          <FootballBall />
        </Button>
        <PagarmeLogo />
      </div>
    </section>
  );
};
