import React from 'react';
import { Layout as AntLayout } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Content } = AntLayout;

const Layout: React.FC = () => {
  return (
    <AntLayout className='min-h-screen'>
      <Header className='text-white flex justify-between items-center'>
        <h1 className='text-4xl sm:ml-[5rem] font-bold '>Bike</h1>
        <nav>
          <Link to="/" className="mx-5 text-white">Home</Link>
          <Link to="/product" className="mx-5 text-white">Products</Link>
        </nav>
      </Header>
      <Content className='p-5'>
        <Outlet />
      </Content>
     
    </AntLayout>
  );
};

export default Layout;
