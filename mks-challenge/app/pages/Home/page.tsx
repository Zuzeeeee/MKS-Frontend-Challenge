import ProductList from '@/app/components/ProductList';
import React from 'react';
import styles from './home.module.css';
import styled from 'styled-components';
import Header from '@/app/components/Header';

const Home = () => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const handleBuy = (id: number) => {
    setSelectedItems((oldValue) => [...oldValue, id]);
  };

  return (
    <main>
      <Header totalItems={selectedItems.length} />
      <center>
        <ProductList handleBuy={handleBuy} />
      </center>
    </main>
  );
};

export default Home;
