import { useTranslation } from 'react-i18next';
import type { Office } from '../../data/offices';

interface Props {
  office: Office;
  isActive: boolean;
  expanded: boolean;
  onClick: () => void;
}

export default function OfficeCard({ office, isActive, expanded, onClick }: Props) {
  const { t } = useTranslation();

  return (
    <div
      className={`w-full text-left rounded-2xl sm:rounded-3xl border transition-all duration-300
        ${expanded
          ? 'glass border-accent-gold/40 dark:border-accent-gold/50 shadow-lg shadow-accent-gold/10'
          : isActive
            ? 'glass border-accent-teal/40 dark:border-accent-teal/50 shadow-md shadow-accent-teal/10'
            : 'glass border-gray-200/60 dark:border-white/10 hover:shadow-md hover:-translate-y-0.5'}`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-start gap-3 p-4 sm:p-5 cursor-pointer"
      >
        <div className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0
          ${expanded ? 'bg-accent-gold' : 'bg-accent-teal'}`}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-snug">
            {office.name}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{office.city}</span>
          </div>
        </div>
        <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 shrink-0 mt-1 ${expanded ? 'rotate-180' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {expanded && (
        <div className="px-4 sm:px-5 pb-5 -mt-1 space-y-3">
          <div className="h-px bg-gray-200/70 dark:bg-white/10"/>

          {/* Address */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t('live.address')}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{office.address}</div>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t('live.phone')}</div>
              <a href={`tel:${office.phone.replace(/[^+\d]/g, '')}`}
                className="text-xs text-accent-teal hover:underline mt-0.5">
                {office.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          {office.email && (
            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              <div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t('live.email')}</div>
                <a href={`mailto:${office.email}`}
                  className="text-xs text-accent-teal hover:underline mt-0.5 break-all">
                  {office.email}
                </a>
              </div>
            </div>
          )}

          {/* Rais */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <path d="M20 8v6M23 11h-6"/>
            </svg>
            <div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t('live.rais')}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{office.rais}</div>
            </div>
          </div>

          {/* Director */}
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">{t('live.director')}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{office.director}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
