import React, { useCallback } from 'react';
import { Layout as AntLayout, Card as AntCard, Button, Badge } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { ItemProvider, useItem } from '../context/Context';

const { Header, Content } = AntLayout;

const LayoutContent: React.FC = () => {
  const { selectedItem, cartItems } = useItem();
  const [isCardOpen, setIsCardOpen] = React.useState(false);

  const handleToggle = useCallback(() => {
    setIsCardOpen(prevState => !prevState);
  }, []);

  const handleClose = useCallback(() => {
    setIsCardOpen(false);
  }, []);

  return (
    <AntLayout className='min-h-screen'>
      <Header className='text-white flex justify-between items-center'>
        <h1 className='text-4xl sm:ml-[5rem] font-bold'>Bike</h1>
        <nav>
          <Link to="/" className="mx-5 text-white">Home</Link>
          <Link to="/product" className="mx-5 text-white">Products</Link>
        </nav>
        <span className='mx-5 text-2xl text-white' onClick={handleToggle}>
          <Badge count={cartItems.length} overflowCount={99}>
            <FaShoppingCart className='text-white w-12 h-5'/>
          </Badge>
        </span>
      </Header>
      <Content className='p-5'>
        <Outlet />
      </Content>
      {isCardOpen && selectedItem && (
        <div className='fixed right-0 top-14'>
          <AntCard
            className='bg-gray-100'
            title={selectedItem.name}
            bordered={false}
            extra={<Button type="link" onClick={handleClose}>Close</Button>}
            style={{ width: 300 }}
          >
            <p>{selectedItem.desc}</p>
            <p>{selectedItem.price}</p>
          </AntCard>
        </div>
      )}
    </AntLayout>
  );
};

const Layout: React.FC = () => (
  <ItemProvider>
    <LayoutContent />
  </ItemProvider>
);

export default Layout;
