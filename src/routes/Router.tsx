import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import Product from '../pages/Product';
import Layout from '../Layout/Layout';

const Router: React.FC = () => {
  const config = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'product',
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={config} />;
};

export default Router;
