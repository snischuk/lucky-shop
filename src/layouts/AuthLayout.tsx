import type { FC } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AnnouncementBar } from '../components/AnnouncementBar';
import { Header } from '../components/Header';

const AuthLayout: FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <div className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col backdrop-blur">
        {showBanner && <AnnouncementBar onClose={() => setShowBanner(false)} />}
        <Header />
      </div>

      <main
        className={`mx-auto flex min-h-screen max-w-custom-1440 flex-col transition-[padding-top] duration-[1000ms] ease-in-out ${showBanner ? 'pt-[140px]' : 'pt-[100px]'}`}
      >
        <Outlet />
      </main>
    </>
  );
};

export { AuthLayout };
