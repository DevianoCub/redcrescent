import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { photos } from '../data/site';

const icons = [
  // Medical
  <svg key="medical" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>,
  // Emergency
  <svg key="emergency" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>,
  // First aid
  <svg key="firstaid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 6v6m-3-3h6"/>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
  </svg>,
  // Blood donation
  <svg key="blood" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>,
  // Volunteer
  <svg key="volunteer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>,
  // Law
  <svg key="law" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
];

export default function Activities() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  const items = [
    { key: 'medical', icon: icons[0], photo: photos.activities.medical },
    { key: 'emergency', icon: icons[1], photo: photos.activities.emergency },
    { key: 'first_aid', icon: icons[2], photo: photos.activities.first_aid },
    { key: 'donation', icon: icons[3], photo: photos.activities.donation },
    { key: 'volunteer', icon: icons[4], photo: photos.activities.volunteer },
    { key: 'law', icon: icons[5], photo: photos.activities.law },
  ];

  return (
    <section id="activities" className="py-24 sm:py-32 bg-gray-50/50 dark:bg-white/[0.02]">
      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t('activities.label')}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            {t('activities.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.key}
              className="group glass rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="relative h-36 overflow-hidden bg-gray-900">
                <img
                  src={item.photo}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"/>
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"/>
              </div>
              <div className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20
                  flex items-center justify-center text-primary mb-5 -mt-0
                  group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`activities.${item.key}.title`)}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {t(`activities.${item.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
