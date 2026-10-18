import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLocalized } from '../hooks/useLocalized';
import { history } from '../data/history';
import { laws, officeStats } from '../lib/content';

export default function AboutPage() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const ref = useScrollReveal();

  const stats = [
    { number: t('about.stat_1_number'), label: t('about.stat_1_label') },
    { number: String(officeStats.offices), label: t('about.stat_2_label') },
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
              {t('about.intro_society')}
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

            {/* Visual */}
            <div className="relative mt-10">
              <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden">
                <img
                  src="/photos/real/team-office-front-01.jpg"
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"/>
              </div>
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-full
              bg-primary/5 dark:bg-primary/10 blur-2xl"/>
          </div>
        </div>
      </div>

      {/* History */}
      <div className="mt-24">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t('about.history_label')}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t('about.history_title')}
          </h2>
        </div>

        {/* Archival photo */}
        <div className="relative max-w-3xl mx-auto mb-12 rounded-3xl overflow-hidden h-56 sm:h-64">
          <img
            src="/photos/real/volon-stretcher-drill-03.jpg"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
          <div className="absolute inset-0 bg-primary/15 mix-blend-multiply"/>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-1/2
            bg-gradient-to-b from-primary/60 via-accent-gold/40 to-primary/60"/>
          <div className="space-y-10 border-l-2 sm:border-l-0 sm:relative sm:after:absolute sm:after:left-1/2 sm:after:top-0 sm:after:-translate-x-1/2 sm:after:w-px sm:after:h-full sm:after:bg-gradient-to-b sm:after:from-primary/60 sm:after:via-accent-gold/40 sm:after:to-primary/60 border-primary/20">
            {history.map((item, i) => (
              <div key={item.id} className={`relative sm:w-1/2 ${
                i % 2 === 0
                  ? 'sm:pr-12'
                  : 'sm:pl-12 sm:self-end sm:ml-auto'
              }`}>
                <div className={`absolute top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 ${
                  i % 2 === 0
                    ? 'left-[-7px] sm:left-auto sm:right-[-6px]'
                    : 'left-[-7px] sm:left-[-6px]'
                }`}/>
                <div className="ml-3 sm:ml-0 glass rounded-2xl p-5 border border-gray-200/60 dark:border-white/10
                  hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    {item.year}
                  </span>
                  <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {loc(item.text)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Framework */}
      <div className="mt-24">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t('about.laws_label')}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t('about.laws_title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laws.map((law) => (
            <div
              key={law.id}
              className="glass rounded-3xl p-6 border border-gray-200/60 dark:border-white/10
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                {loc(law.title)}
              </h3>
              <p className="mt-auto pt-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                {loc(law.meta)}
              </p>
              <a
                href={law.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('about.download_pdf')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
