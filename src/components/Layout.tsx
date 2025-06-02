import { Header } from './Header';
import AnnouncementBar from './AnnouncementBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { useState } from 'react';

const Layout = () => {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <div className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col backdrop-blur">
        {showBanner && <AnnouncementBar onClose={() => setShowBanner(false)} />}
        <Header />
      </div>

      <div
        className={`mx-auto flex min-h-screen max-w-custom-1440 flex-col ${showBanner ? 'pt-[140px]' : 'pt-[100px]'}`}
      >
        <main className="grow">
          <Outlet />
        </main>
        {/* <SubscribeSection /> */}
        <Footer />
      </div>
    </>
  );
};

export { Layout };
