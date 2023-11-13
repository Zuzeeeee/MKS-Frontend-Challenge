import ProductList from '@/app/components/ProductList';
import React from 'react';
import styles from './home.module.css';
import styled from 'styled-components';
import Header from '@/app/components/Header';
import { ShoppingCart } from '@/app/components/ShoppingCart';
import Footer from '@/app/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { getProductData } from '@/app/query/getProductData';

const Home = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProductData(),
  });

  const handleBuy = (id: number) => {
    setSelectedItems((oldValue) => [...oldValue, id]);
  };

  const toggleVisibility = () => {
    setIsVisible((oldValue) => !oldValue);
  };

  return (
    <main style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
      <ShoppingCart isVisible={isVisible} onClose={toggleVisibility} />
      <Header totalItems={selectedItems.length} onOpen={toggleVisibility} />
      <ProductList
        handleBuy={handleBuy}
        data={data}
        isError={isError}
        isLoading={isLoading}
      />
      <Footer />
    </main>
  );
};

export default Home;
