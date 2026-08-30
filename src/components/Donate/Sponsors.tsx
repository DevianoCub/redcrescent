import { useTranslation } from 'react-i18next';
import { sponsors } from '../../data/donors';

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-gray-200/60 dark:border-white/10">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
        {t('donate.sponsors')}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {sponsors.map(sponsor => (
          <a
            key={sponsor.id}
            href={sponsor.website}
            className="group flex flex-col items-center gap-3 p-5 rounded-2xl
              bg-gray-100/50 dark:bg-white/[0.03] hover:bg-accent-gold/5 dark:hover:bg-accent-gold/10
              border border-gray-200/40 dark:border-white/5 hover:border-accent-gold/30 dark:hover:border-accent-gold/30
              transition-all duration-300 cursor-pointer"
          >
            {/* Logo placeholder */}
            <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 dark:bg-accent-gold/20
              flex items-center justify-center text-accent-gold font-bold text-xl
              group-hover:scale-110 transition-transform duration-300">
              {sponsor.name.slice(-1)}
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {sponsor.name}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                {sponsor.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
