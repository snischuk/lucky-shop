import { FC, ReactNode } from 'react';
import { Header } from './Header';
import AnnouncementBar from './AnnouncementBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="fixed w-full backdrop-blur">
        <AnnouncementBar />
        <div className="max-w-[1440px] m-auto">
          <Header />
        </div>
      </div>
      <div className="max-w-[1440px] flex flex-col justify-center m-auto">
        <main className='mt-[140px]'>{children}</main>
      </div>
    </>
  );
};

export default Layout;
