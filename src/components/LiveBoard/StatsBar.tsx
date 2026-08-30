import { useTranslation } from 'react-i18next';
import { offices } from '../../data/offices';

export default function StatsBar() {
  const { t } = useTranslation();

  const regions = offices.length;
  const viloyats = new Set(offices.map(o => o.city)).size;
  const cities = new Set(offices.map(o => o.city)).size;

  const stats = [
    { value: regions, label: t('live.regions') },
    { value: viloyats, label: t('live.viloyats') },
    { value: cities, label: t('live.cities') },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-center border border-gray-200/60 dark:border-white/10"
        >
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-accent-gold">{stat.value}</div>
          <div className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
