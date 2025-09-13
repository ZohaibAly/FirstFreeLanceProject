import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          const { default: HomePage } = await import('../pages/Home/Home');
          return { Component: HomePage };    
        },
      },
    ],
  },
]);
