import type { FC } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AnnouncementBar } from '../components/AnnouncementBar';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SubscribeSection } from '../components/SubscribeSection';
import { NAVIGATION_LINKS } from '../constants/navigationLinks';

const MainLayout: FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <div className="fixed left-1/2 z-[1] w-full -translate-x-1/2 flex-col backdrop-blur">
        {showBanner && <AnnouncementBar onClose={() => setShowBanner(false)} />}
        <Header />
      </div>

      <div
        className={`mx-auto flex min-h-screen flex-col duration-300 ease-in-out ${showBanner ? 'pt-[140px]' : 'pt-[100px]'}`}
      >
        <main className="flex grow flex-col">
          <Outlet />
        </main>
        <SubscribeSection />
        <Footer navigationLinks={NAVIGATION_LINKS} />
      </div>
    </>
  );
};

export { MainLayout };
