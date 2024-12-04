import React, { Suspense } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import './styles/loading.css';

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<LoadingScreen />}>
        <LoadingScreen />
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Hero />
          <About />
          <Services />
          <Products />
          <Contact />
        </div>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
