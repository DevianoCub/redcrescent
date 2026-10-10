import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLocalized } from '../hooks/useLocalized';
import { academy } from '../data/academy';
import { photos, volonLeaderCaption } from '../data/site';

const directionIcons = [
  <svg key="training" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>,
  <svg key="firstaid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 6v6m-3-3h6"/>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
  </svg>,
  <svg key="emergency" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>,
  <svg key="law" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
  <svg key="events" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>,
  <svg key="support" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
  </svg>,
];

export default function AcademyPage() {
  const { t } = useTranslation();
  const loc = useLocalized();
  const ref = useScrollReveal();

  const directions = academy.directions;
  const contacts = academy.contacts;

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          {t('academy.badge')}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {t('academy.title')}
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {loc(academy.intro)}
        </p>
      </div>

      {/* Banner */}
      <div className="relative h-52 sm:h-64 rounded-3xl overflow-hidden mb-12 max-w-4xl mx-auto">
        <img
          src={photos.academyBanner}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"/>
      </div>

      {/* Stats */}
      <div ref={ref} className="section-reveal mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { value: '+4000', label: t('academy.stat_area') },
            { value: '8', label: t('academy.stat_floors') },
            { value: '500–1500', label: t('academy.stat_students') },
            { value: '2', label: t('academy.stat_halls') },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-center border border-gray-200/60 dark:border-white/10">
              <div className="text-2xl sm:text-3xl font-bold text-accent-gold tabular-nums">{s.value}</div>
              <div className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main directions */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">{t('academy.directions_label')}</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{t('academy.directions_title')}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {directions.map((d, i) => (
            <div key={d.id} className="group glass rounded-3xl p-5 sm:p-6 border border-gray-200/60 dark:border-white/10
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4
                group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {directionIcons[i % directionIcons.length]}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{loc(d.text)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure */}
      <div className="mb-12">
        <div ref={ref} className="section-reveal">
          <div className="text-center mb-8">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">{t('academy.infra_label')}</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{t('academy.infra_title')}</h2>
          </div>
          <div className="glass rounded-3xl p-6 sm:p-8 border border-gray-200/60 dark:border-white/10 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {loc(academy.infra.desc_1)}
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {loc(academy.infra.desc_2)}
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {loc(academy.infra.desc_3)}
            </p>
          </div>
        </div>
      </div>

      {/* Volunteers leader */}
      <div className="mb-12">
        <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <img
            src={photos.volonLeader}
            alt=""
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8">
            <div className="text-lg sm:text-xl font-semibold text-white">
              {t('academy.leader_title')}
            </div>
            <div className="mt-1 text-sm text-white/80">
              {loc(volonLeaderCaption)}
            </div>
          </div>
        </div>
      </div>

      {/* Contacts */}
      <div>
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">{t('academy.contacts_label')}</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{t('academy.contacts_title')}</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((c, i) => (
            <div key={c.id} className="glass rounded-3xl p-6 border border-gray-200/60 dark:border-white/10 text-center">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-4">
                {i === 2 ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                )}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{loc(c.label)}</div>
              <div className="text-sm text-accent-teal font-medium">{c.phone}</div>
              {c.email && (
                <a href={`mailto:${c.email}`} className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary mt-1 block">
                  {c.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
