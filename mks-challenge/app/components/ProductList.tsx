'use client';
import ProductCard from '@/app/components/ProductCard';
import styles from './productlist.module.css';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { ProductData } from '@/app/query/getProductData';
import { Center } from '@/app/components/Center';

interface ProductListProps {
  handleBuy: (id: number) => void;
  data?: ProductData;
  isLoading: boolean;
  isError: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px 5% 0px 5%;
  justify-content: center;
  align-items: center;
`;

const ProductList = ({
  handleBuy,
  data,
  isLoading,
  isError,
}: ProductListProps) => {
  if (!data || isLoading) {
    return <Center>Is Loading...</Center>;
  }

  if (isError) {
    return <Center>Something went wrong</Center>;
  }

  return (
    <Center>
      <Container>
        {data?.products.map((res) => (
          <ProductCard
            key={res.id}
            onBuy={() => handleBuy(res.id)}
            {...res}
          ></ProductCard>
        ))}
      </Container>
    </Center>
  );
};

export default ProductList;
