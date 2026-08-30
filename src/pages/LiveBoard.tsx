import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { offices } from '../data/offices';
import StatsBar from '../components/LiveBoard/StatsBar';
import UzbekistanMap from '../components/LiveBoard/UzbekistanMap';
import OfficeCard from '../components/LiveBoard/OfficeCard';

export default function LiveBoard() {
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    setSelectedId(id);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
          {t('live.status')}
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          {t('live.title')}
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          {t('live.subtitle')}
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6">
        <StatsBar />
      </div>

      {/* Map + Cards */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Map */}
        <div className="lg:col-span-3">
          <UzbekistanMap offices={offices} selectedId={selectedId} onSelect={handleSelect} />
        </div>

        {/* Card list */}
        <div className="lg:col-span-2 flex flex-col gap-3 max-h-[500px] lg:max-h-[560px] overflow-y-auto pr-1 custom-scrollbar">
          {offices.map(office => (
            <OfficeCard
              key={office.id}
              office={office}
              isActive={selectedId === office.id}
              expanded={expandedId === office.id}
              onClick={() => handleExpand(office.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
