interface Props {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export default function ThemeToggle({ theme, toggle }: Props) {
  return (
    <button
      onClick={toggle}
      className="relative w-14 h-8 rounded-full bg-gray-200/60 dark:bg-white/15
        transition-colors duration-300 flex items-center p-1
        hover:bg-gray-300/60 dark:hover:bg-white/20 active:scale-95"
      aria-label="Toggle theme"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white dark:bg-surface-dark shadow-md
          flex items-center justify-center transition-all duration-300
          ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}
      >
        {theme === 'light' ? (
          <svg className="w-3.5 h-3.5 text-accent-gold" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5"/>
            {[0,45,90,135,180,225,270,315].map(deg => (
              <line key={deg} x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                transform={`rotate(${deg} 12 12)`}/>
            ))}
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-accent-teal" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </div>
    </button>
  );
}
