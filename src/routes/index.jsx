import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import LazyWrapper from '../components/LazyWrapper/LazyWrapper';
const HomePage = React.lazy(() => import('../pages/Home/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <LazyWrapper>
            <HomePage />
          </LazyWrapper>
        ),
      },
    ],
  },
]);
