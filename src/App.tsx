import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import About from './components/About';
import Process from './components/Process';

function getCurrentRoute() {
  const normalizedPath = window.location.pathname.replace(
    /\/+$/,
    '',
  ) || '/';

  if (normalizedPath === '/about' || normalizedPath === '/process') {
    return normalizedPath;
  }

  return '/';
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const isAboutPage = route === '/about';
  const isProcessPage = route === '/process';

  return (
    <div className="min-h-screen bg-white">
      {isAboutPage ? (
        <About />
      ) : isProcessPage ? (
        <Process />
      ) : (
        <>
          <Hero activePage="index" />
          <main className="px-1 [@media(min-width:960px)]:px-0 [@media(min-width:960px)]:ml-auto [@media(min-width:960px)]:mr-1 [@media(min-width:960px)]:mt-1 [@media(min-width:960px)]:w-[66vw]">
            <ImageGallery />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
