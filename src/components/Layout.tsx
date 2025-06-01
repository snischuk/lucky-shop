import { Header } from './Header';
import AnnouncementBar from './AnnouncementBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

const Layout = () => {
  return (
    <>
      <div className="fixed w-full backdrop-blur">
        <AnnouncementBar />
        <Header />
      </div>
      <div className="m-auto flex max-w-[1440px] flex-col justify-center">
        <main className="mt-[140px] flex-1">
          <Outlet />
        </main>
        {/* <SubscribeSection /> */}
        <Footer />
      </div>
    </>
  );
};

export { Layout };
