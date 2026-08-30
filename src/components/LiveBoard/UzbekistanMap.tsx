import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import type { Office } from '../../data/offices';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

const createIcon = (isActive: boolean) =>
  L.divIcon({
    className: '',
    iconSize: [isActive ? 30 : 22, isActive ? 30 : 22],
    iconAnchor: [isActive ? 15 : 11, isActive ? 15 : 11],
    html: `
      <div style="
        width: ${isActive ? 30 : 22}px;
        height: ${isActive ? 30 : 22}px;
        background: ${isActive ? '#ab1509' : '#ab150999'};
        border: 3px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ${isActive ? 'animation: pulse 2s infinite;' : ''}
      ">
        <svg viewBox="0 0 24 24" fill="white" style="width: ${isActive ? 15 : 11}px; height: ${isActive ? 15 : 11}px; margin: ${isActive ? 7 : 5}px;">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="white" stroke-width="2"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
    `,
  });

interface FlyToProps {
  lat: number;
  lng: number;
}

function FlyTo({ lat, lng }: FlyToProps) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 7, { duration: 1.5 });
  }, [lat, lng, map]);
  return null;
}

interface Props {
  offices: Office[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export default function UzbekistanMap({ offices, selectedId, onSelect }: Props) {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const selected = offices.find(o => o.id === selectedId);

  const tileUrl =
    theme === 'dark'
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

  return (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/60 dark:border-white/10 h-[400px] sm:h-[500px] lg:h-full">
      <MapContainer
        center={[41.2, 66.0]}
        zoom={6}
        scrollWheelZoom={true}
        zoomControl={false}
        className="w-full h-full"
        style={{ background: theme === 'dark' ? '#1c1c1c' : '#f5f5f5' }}
      >
        <TileLayer attribution='&copy; CARTO' url={tileUrl} />
        {selected && <FlyTo lat={selected.lat} lng={selected.lng} />}
        {offices.map(office => (
          <Marker
            key={office.id}
            position={[office.lat, office.lng]}
            icon={createIcon(office.id === selectedId)}
            eventHandlers={{ click: () => onSelect(office.id) }}
          >
            <Popup className="custom-popup">
              <div className="p-3 w-52">
                <button
                  onClick={() => onSelect(office.id)}
                  className="text-left font-semibold text-sm text-primary dark:text-white leading-snug hover:underline cursor-pointer"
                >
                  {office.name}
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {office.city} — {office.address}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {office.phone}
                </p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-accent-gold/10 text-accent-gold">
                  {t('live.details')} →
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
