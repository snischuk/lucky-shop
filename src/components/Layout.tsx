import type { FC, ReactNode } from 'react';
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
        <div className="m-auto max-w-[1440px]">
          <Header />
        </div>
      </div>
      <div className="m-auto flex max-w-[1440px] flex-col justify-center">
        <main className="mt-[140px]">{children}</main>
      </div>
    </>
  );
};

export default Layout;
