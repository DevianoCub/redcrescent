import { useTranslation } from 'react-i18next';
import { donors } from '../../data/donors';
import { useMemo } from 'react';

const CURRENCY = 'so\'m';

export default function Leaderboard() {
  const { t } = useTranslation();

  const sorted = useMemo(
    () => [...donors].sort((a, b) => b.amount - a.amount).slice(0, 10),
    []
  );

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-gray-200/60 dark:border-white/10">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
        {t('donate.leaderboard')}
      </h3>

      <div className="space-y-3">
        {sorted.map((donor, i) => {
          const maxAmount = sorted[0].amount;
          const barWidth = (donor.amount / maxAmount) * 100;
          const isTop3 = i < 3;

          return (
            <div
              key={donor.id}
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-300
                ${isTop3
                  ? 'bg-accent-gold/5 dark:bg-accent-gold/10 border border-accent-gold/20 dark:border-accent-gold/30'
                  : 'bg-gray-100/50 dark:bg-white/[0.03]'}`}
            >
              {/* Rank */}
              <div className="w-8 sm:w-10 text-center shrink-0">
                {isTop3 ? (
                  <span className="text-xl sm:text-2xl">{medals[i]}</span>
                ) : (
                  <span className="text-sm font-bold text-gray-400 dark:text-gray-500">#{i + 1}</span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {donor.name}
                  </span>
                  <span className="text-sm font-bold text-accent-gold ml-2 tabular-nums">
                    {donor.amount.toLocaleString()} {CURRENCY}
                  </span>
                </div>
                {/* Progress bar */}
                <div className="h-1.5 rounded-full bg-gray-200 dark:bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent-gold/60 transition-all duration-700 ease-out"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
