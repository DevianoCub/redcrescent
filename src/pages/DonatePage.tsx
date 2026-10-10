import { useTranslation } from 'react-i18next';
import { donateLinks, photos } from '../data/site';

const brandStyles: Record<string, string> = {
  click: 'bg-[#0a2540] text-white hover:bg-[#14335c]',
  payme: 'bg-[#00c07f] text-white hover:bg-[#00a76f]',
  uzum: 'bg-[#7000ff] text-white hover:bg-[#5d00d6]',
};

export default function DonatePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {t('donate.label')}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {t('donate.title')}
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          {t('donate.subtitle')}
        </p>

        {/* Banner — real photo */}
        <div className="relative h-48 sm:h-56 max-w-3xl mx-auto mt-8 rounded-3xl overflow-hidden">
          <img
            src={photos.donateBanner}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
      </div>

      {/* Payment links — content editable via /admin (public/content/site.json) */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-center text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {t('donate.choose_method')}
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {donateLinks.map((link) => {
            const disabled = link.url === '#';
            const cls = brandStyles[link.id] ?? 'bg-primary text-white hover:bg-primary-light';
            return (
              <a
                key={link.id}
                href={link.url}
                target={link.url === '#' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-disabled={disabled}
                onClick={disabled ? (e) => e.preventDefault() : undefined}
                className={`rounded-3xl p-6 text-center font-semibold text-lg shadow-lg transition-all duration-200 active:scale-[0.98] ${cls} ${
                  disabled ? 'opacity-60 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-xl'
                }`}
                title={disabled ? t('donate.link_soon') : link.name}
              >
                {link.name}
                {disabled && (
                  <span className="block mt-1 text-xs font-normal opacity-80">
                    {t('donate.link_soon')}
                  </span>
                )}
              </a>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          {t('donate.transparency')}
        </p>
      </div>
    </div>
  );
}
