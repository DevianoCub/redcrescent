import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  const stats = [
    { number: t('about.stat_1_number'), label: t('about.stat_1_label') },
    { number: t('about.stat_2_number'), label: t('about.stat_2_label') },
    { number: t('about.stat_3_number'), label: t('about.stat_3_label') },
  ];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t('about.label')}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('about.title')}
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Stats + Visual */}
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

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full
              bg-primary/5 dark:bg-primary/10 blur-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}
