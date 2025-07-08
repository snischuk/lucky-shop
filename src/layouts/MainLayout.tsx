import type { FC } from 'react';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AnnouncementBar } from '../components/AnnouncementBar';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SubscribeSection } from '../components/SubscribeSection';
import { UiLoader } from '../components/ui/UiLoader';
import { FOOTER_NAVIGATION_LINKS } from '../constants/footerNavigationLinks';

const MainLayout: FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <div className="fixed left-1/2 z-[1] w-full -translate-x-1/2 flex-col bg-[rgba(240,240,240,0.6)] backdrop-blur-[5px]">
        {showBanner && <AnnouncementBar onClose={() => setShowBanner(false)} />}
        <Header />
      </div>

      <div
        className={`mx-auto flex min-h-screen flex-col transition-[padding-top] duration-default ease-in-out ${showBanner ? 'pt-[140px]' : 'pt-[100px]'}`}
      >
        <main className="flex grow flex-col bg-main">
          <Suspense
            fallback={<UiLoader size={80} mode="centered" className="m-40" />}
          >
            <Outlet />
          </Suspense>
        </main>
        <SubscribeSection />
        <Footer navigationLinks={FOOTER_NAVIGATION_LINKS} />
      </div>
    </>
  );
};

export { MainLayout };
