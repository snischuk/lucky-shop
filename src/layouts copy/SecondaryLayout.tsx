import type { FC } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AnnouncementBar } from '../components/AnnouncementBar';
import { Header } from '../components/Header';

const SecondaryLayout: FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <div className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col bg-[rgba(240,240,240,0.6)] backdrop-blur-[5px]">
        {showBanner && <AnnouncementBar onClose={() => setShowBanner(false)} />}
        <Header />
      </div>

      <main
        className={`flex min-h-screen flex-col bg-main transition-[padding-top] duration-default ease-in-out ${showBanner ? 'pt-[140px]' : 'pt-[100px]'}`}
      >
        <div className="mx-auto w-full max-w-custom-1440">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export { SecondaryLayout };
