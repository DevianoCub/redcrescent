import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { totalDonations } from '../data/donors';
import DonationForm from '../components/Donate/DonationForm';
import Leaderboard from '../components/Donate/Leaderboard';
import Sponsors from '../components/Donate/Sponsors';

export default function DonatePage() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState(10000);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {t('donate.label')}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {t('donate.title')}
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          {t('donate.subtitle')}
        </p>
        <div className="mt-5 inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl bg-green-500/10">
          <span className="text-sm text-green-600 dark:text-green-400 font-medium">{t('donate.total_raised')}:</span>
          <span className="text-2xl font-bold text-green-600 dark:text-green-400 tabular-nums">
            {totalDonations.toLocaleString()} so'm
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <DonationForm value={amount} onChange={setAmount} />
        <Leaderboard />
      </div>

      {/* Sponsors */}
      <Sponsors />
    </div>
  );
}
