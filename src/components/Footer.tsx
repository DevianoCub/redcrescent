import { useTranslation } from 'react-i18next';
import { socials } from '../data/site';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/favicon.png"
                alt="Red Crescent"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-lg font-bold">REDCRESCENT<span className="text-primary">.uz</span></span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              {t('footer.about_text')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{t('nav.about')}</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.about')}</a></li>
              <li><a href="#activities" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.activities')}</a></li>
              <li><a href="#news" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.news')}</a></li>
              <li><a href="#contact" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Social — URLs editable via /admin (public/content/site.json) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Social</h4>
            <div className="flex gap-3">
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-white/5 hover:bg-primary/20 hover:text-primary
                  flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href={socials.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram"
                className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-white/5 hover:bg-primary/20 hover:text-primary
                  flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-white/5 hover:bg-primary/20 hover:text-primary
                  flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed max-w-3xl mx-auto">
              {t('footer.photos_note')}
            </p>
          </div>
        </div>

        <div className="pt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
