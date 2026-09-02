import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  const stats = [
    { number: t('about.stat_1_number'), label: t('about.stat_1_label') },
    { number: t('about.stat_2_number'), label: t('about.stat_2_label') },
    { number: t('about.stat_3_number'), label: t('about.stat_3_label') },
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {t('about.label')}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {t('about.title')}
        </h1>
      </div>

      <div ref={ref} className="section-reveal">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t('about.label')}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('academy.intro_society')}
            </p>
            <Link
              to="/live"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white
                bg-primary hover:bg-primary-light shadow-md shadow-primary/25 transition-all duration-300 active:scale-95"
            >
              {t('nav.live')}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-3xl p-5 sm:p-6 text-center border border-gray-200/60 dark:border-white/10
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-accent-gold">{stat.number}</div>
                  <div className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full
              bg-primary/5 dark:bg-primary/10 blur-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
}
