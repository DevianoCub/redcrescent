import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const ref = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-white/[0.02]">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t('contact.label')}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <div className="glass rounded-3xl p-8 border border-gray-200/60 dark:border-white/10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-gray-200/60 dark:bg-white/5
                    border border-transparent focus:border-primary focus:bg-white dark:focus:bg-white/10
                    text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                    outline-none transition-all duration-200 text-sm"
                  placeholder={t('contact.name')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-gray-200/60 dark:bg-white/5
                    border border-transparent focus:border-primary focus:bg-white dark:focus:bg-white/10
                    text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                    outline-none transition-all duration-200 text-sm"
                  placeholder={t('contact.email')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-2xl bg-gray-200/60 dark:bg-white/5
                    border border-transparent focus:border-primary focus:bg-white dark:focus:bg-white/10
                    text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                    outline-none transition-all duration-200 text-sm resize-none"
                  placeholder={t('contact.message')}
                />
              </div>
              <button
                type="submit"
                className="w-full btn-ios bg-primary text-white shadow-lg shadow-primary/25
                  hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30"
              >
                {submitted ? '✓ ' + t('contact.success') : t('contact.send')}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div className="glass rounded-3xl p-7 border border-gray-200/60 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20
                  flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{t('contact.address')}</h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('contact.address_text')}</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-7 border border-gray-200/60 dark:border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20
                  flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{t('contact.phone')}</h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('contact.phone_text')}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 h-48">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=69.25%2C41.29%2C69.35%2C41.35&layer=mapnik"
                className="w-full h-full border-0 opacity-80 dark:opacity-60 dark:invert dark:hue-rotate-180"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
