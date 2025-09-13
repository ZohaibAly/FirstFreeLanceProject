import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';                  // keep eager (avoid double loaders)
import Loader from '../Load/Loader';           // your spinner (overlay=true centers it)

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<Loader overlay />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
