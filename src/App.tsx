import './i18n';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveBoard from './pages/LiveBoard';
import DonatePage from './pages/DonatePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import AcademyPage from './pages/AcademyPage';

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <Activities />
      <News />
      <Contact />
    </main>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-500">
        <Header theme={theme} toggleTheme={toggle} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/live" element={<LiveBoard />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/academy" element={<AcademyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
