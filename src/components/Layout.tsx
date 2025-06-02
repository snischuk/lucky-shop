import { Header } from './Header';
import AnnouncementBar from './AnnouncementBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <>
      <div className="fixed z-10 flex w-full max-w-custom-1440 flex-col backdrop-blur">
        <AnnouncementBar />
        <Header />
      </div>

      <div className="mx-auto flex min-h-screen max-w-custom-1440 flex-col pt-[140px]">
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
