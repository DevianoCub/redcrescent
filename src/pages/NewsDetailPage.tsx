import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalized } from '../hooks/useLocalized';
import { news, getNews } from '../lib/content';

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const loc = useLocalized();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  const item = id ? getNews(id) : undefined;

  if (!item) {
    return (
      <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {t('news.not_found')}
        </h1>
        <Link
          to="/news"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white
            bg-primary hover:bg-primary-light shadow-md shadow-primary/25 transition-all duration-300 active:scale-95"
        >
          {t('news.back')}
        </Link>
      </div>
    );
  }

  const body = item.body ? loc(item.body) : '';
  const paragraphs = body ? body.split(/\n{2,}/).filter((p) => p.trim()) : [];
  const related = news.filter((n) => n.id !== item.id).slice(0, 3);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Back */}
      <Link
        to="/news"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400
          hover:text-primary dark:hover:text-primary transition-colors"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        {t('news.back')}
      </Link>

      {/* Meta */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {item.category && (
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            {loc(item.category)}
          </span>
        )}
        <span className="text-sm text-gray-500 dark:text-gray-400">{loc(item.date)}</span>
      </div>

      <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
        {loc(item.title)}
      </h1>

      {/* Hero image */}
      {item.image && (
        <div className="relative mt-8 h-64 sm:h-96 rounded-3xl overflow-hidden">
          <img src={item.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      )}

      {/* Excerpt */}
      <p className="mt-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
        {loc(item.excerpt)}
      </p>

      {/* Body */}
      {paragraphs.length > 0 && (
        <div className="mt-6 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Gallery */}
      {item.gallery && item.gallery.length > 0 && (
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {item.gallery.map((src, i) => (
            <div key={i} className="relative h-36 sm:h-40 rounded-2xl overflow-hidden">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}

      {/* Share */}
      <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {t('news.share')}
        </span>
        <div className="mt-3 flex gap-3">
          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-primary/20 hover:text-primary
              flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-200"
            aria-label="Telegram"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-primary/20 hover:text-primary
              flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-200"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5">
            {t('news.more')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/news/${r.id}`}
                className="group glass rounded-2xl overflow-hidden border border-gray-200/60 dark:border-white/10
                  hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-28 overflow-hidden bg-gray-900">
                  {r.image && (
                    <img
                      src={r.image}
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs text-primary mb-1">{loc(r.date)}</div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                    {loc(r.title)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
