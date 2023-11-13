'use client';
import Product from '@/app/components/Product';
import styles from './productlist.module.css';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getProductData } from '@/app/query/getProductData';

interface ProductListProps {
  handleBuy: (id: number) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 900px;
  justify-content: center;
`;

const ProductList = ({ handleBuy }: ProductListProps) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProductData(),
  });

  if (isLoading) {
    return <span>Is Loading...</span>;
  }

  if (isError) {
    return <span>Something went wrong</span>;
  }

  return (
    <Container>
      {data?.products.map((res) => (
        <Product
          key={res.id}
          onBuy={() => handleBuy(res.id)}
          {...res}
        ></Product>
      ))}
    </Container>
  );
};

export default ProductList;
