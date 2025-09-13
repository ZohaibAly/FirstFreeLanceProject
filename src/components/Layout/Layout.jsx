// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import LazyWrapper from '../LazyWrapper/LazyWrapper';

// Lazy-load your chrome components (Navbar/Footer)
const Navbar = React.lazy(() => import('../Navbar/Navbar'));
// const Footer = React.lazy(() => import('../Footer'));

const Layout = () => {
  return (
    <>
 
      <LazyWrapper>
        <Navbar />
      </LazyWrapper>

      <main>
        <LazyWrapper>
          <Outlet />
        </LazyWrapper>
      </main>

      {/* <LazyWrapper>
        <Footer />
      </LazyWrapper> */}
    </>
  );
};

export default Layout;
