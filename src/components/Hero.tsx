import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-gray-950">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/photos/volunteers-hero.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/75 dark:from-black/85 dark:via-black/65 dark:to-black/85"/>
        <div className="absolute inset-0 bg-primary/25 dark:bg-primary/15 mix-blend-multiply"/>
      </div>

      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-[14vw] sm:text-[12vw] font-black tracking-tighter
            text-white/[0.14] dark:text-white/[0.12] animate-pulse-glow
            whitespace-nowrap leading-none"
          style={{ transform: 'rotate(-3deg)' }}
        >
          REDCRESCENT
        </motion.span>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"/>
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent-teal/5 dark:bg-accent-teal/10 blur-3xl"/>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/20 dark:bg-accent-teal/20 text-white dark:text-accent-teal text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-white dark:bg-accent-teal animate-pulse"/>
            since 1925
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
            text-white dark:text-white leading-[1.1] mb-6"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/80 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/donate"
            className="btn-ios bg-white text-primary shadow-lg shadow-black/20
              hover:bg-gray-100 hover:shadow-xl
              hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            {t('hero.cta_donate')}
          </Link>
          <Link
            to="/live"
            className="btn-ios bg-white/10 dark:bg-white/10 text-white dark:text-white border border-white/30 dark:border-white/10
              hover:bg-white/20 dark:hover:bg-white/15 backdrop-blur-sm
              hover:-translate-y-0.5 w-full sm:w-auto text-center"
          >
            {t('hero.cta_volunteer')}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 dark:border-white/20
          flex items-start justify-center pt-2">
      {/* Hands background */}
      <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/60 dark:bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
