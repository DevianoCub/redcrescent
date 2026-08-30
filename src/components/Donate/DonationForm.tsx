import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  value: number;
  onChange: (v: number) => void;
}

const presets = [10000, 50000, 100000, 500000, 1000000];

const CURRENCY = 'so\'m';

export default function DonationForm({ value, onChange }: Props) {
  const { t } = useTranslation();
  const [customInput, setCustomInput] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePreset = (amount: number) => {
    onChange(amount);
    setCustomInput('');
  };

  const handleCustom = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setCustomInput(raw);
    const num = parseInt(raw);
    if (!isNaN(num) && num > 0) onChange(Math.min(num, 1000000));
  };

  const percentage = useMemo(() => Math.min((value / 1000000) * 100, 100), [value]);

  return (
    <div className="glass rounded-3xl p-6 sm:p-8 border border-gray-200/60 dark:border-white/10">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        {t('donate.choose_amount')}
      </h3>

      {/* Amount display */}
      <div className="text-center mb-8">
        <div className="inline-flex items-baseline gap-1">
          <span className="text-5xl sm:text-6xl font-bold text-primary tabular-nums">
            {value.toLocaleString()}
          </span>
          <span className="text-lg text-gray-400 dark:text-gray-500">{CURRENCY}</span>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-8 px-2">
        <div className="relative">
          <input
            type="range"
            min={10000}
            max={1000000}
            step={10000}
            value={value}
            onChange={e => { onChange(Number(e.target.value)); setCustomInput(''); }}
            className="donation-slider w-full"
          />
          <div
            className="absolute top-0 left-0 h-2 rounded-full bg-accent-gold pointer-events-none transition-all duration-150"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400 dark:text-gray-500">
          <span>10 000</span>
          <span>1,000,000 {CURRENCY}</span>
        </div>
      </div>

      {/* Presets */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {presets.map(amount => (
          <button
            key={amount}
            onClick={() => handlePreset(amount)}
            className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 active:scale-95
              ${value === amount && !customInput
                ? 'bg-primary text-white shadow-md shadow-primary/25'
                : 'bg-gray-200/60 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-300/60 dark:hover:bg-white/15'}`}
          >
            {amount.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Custom input */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 text-center">
          {t('donate.custom_amount')}
        </label>
        <div className="relative max-w-xs mx-auto">
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 font-semibold">{CURRENCY}</span>
          <input
            type="text"
            value={customInput}
            onChange={handleCustom}
            placeholder="0"
            className="w-full pr-14 pl-4 py-3 rounded-2xl bg-gray-200/60 dark:bg-white/5
              border border-transparent focus:border-primary focus:bg-white dark:focus:bg-white/10
              text-gray-900 dark:text-white text-center text-lg font-semibold
              outline-none transition-all duration-200 placeholder-gray-300 dark:placeholder-gray-600"
          />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => setShowConfirm(true)}
        className="w-full py-4 rounded-2xl bg-primary text-white font-semibold text-lg
          shadow-lg shadow-primary/25 hover:bg-primary-light hover:shadow-xl
          transition-all duration-300 active:scale-[0.98]"
      >
        {t('donate.donate_now')} — {value.toLocaleString()} {CURRENCY}
      </button>

      {/* Confirmation modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowConfirm(false)} />
          <div className="relative glass rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-gray-200/60 dark:border-white/10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-accent-teal/10 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-accent-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {t('donate.thank_you')}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {t('donate.confirm_message', { amount: `${value.toLocaleString()} ${CURRENCY}` })}
            </p>
            <button
              onClick={() => setShowConfirm(false)}
              className="w-full py-3 rounded-2xl bg-primary text-white font-semibold
                shadow-md shadow-primary/25 transition-all duration-200 active:scale-95"
            >
              {t('donate.close')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
