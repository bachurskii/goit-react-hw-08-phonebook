import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/navigation';
import { WrapperHeader, WrapperMain } from './header.styled';
import { Loader } from 'components/loader/loader';

export const Layout = () => {
  return (
    <>
      <WrapperHeader>
        <Navigation />
      </WrapperHeader>

      <WrapperMain>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </WrapperMain>
    </>
  );
};
