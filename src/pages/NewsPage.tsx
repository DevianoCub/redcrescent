import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLocalized } from '../hooks/useLocalized';
import { news } from '../lib/content';

export default function NewsPage() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const ref = useScrollReveal();

  const fallbackGradients = [
    'bg-gradient-to-br from-red-500/10 to-orange-500/10 dark:from-red-500/20 dark:to-orange-500/20',
    'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20',
    'bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20',
  ];

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t('news.label')}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {t('news.title')}
        </h1>
      </div>

      <div ref={ref} className="section-reveal">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((item, i) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="group glass rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="relative h-40 overflow-hidden bg-gray-900">
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : null}
                <div className={`absolute inset-0 ${item.image ? 'bg-gradient-to-t from-black/55 via-black/10 to-black/20' : fallbackGradients[i % 3]}`}/>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-sm
                    flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-2">{loc(item.date)}</div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-snug
                  group-hover:text-primary transition-colors duration-200">
                  {loc(item.title)}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {loc(item.excerpt)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {t('news.read_more')}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
