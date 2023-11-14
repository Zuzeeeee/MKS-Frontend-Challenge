import ProductList from '@/app/components/product/ProductList';
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { Product, getProductData } from '@/app/query/getProductData';
import { ShoppingCart } from '@/app/components/cart/ShoppingCart';

const items: Record<string, { data: Product; count: number }> = {};

const Home = () => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [selectedItems, setSelectedItems] = React.useState<
    { data: Product; count: number }[]
  >([]);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProductData(),
  });

  const handleBuy = (id: number) => {
    if (items[id]) {
      items[id].count += 1;
      setSelectedItems(Object.values(items));
      return;
    }

    if (!data) {
      return;
    }
    let search = data.products.find((prod) => prod.id === id);
    if (!search) {
      return;
    }
    items[id] = { data: search, count: 1 };
    setSelectedItems(Object.values(items));
  };

  const handleAddItem = (id: number) => {
    items[id].count += 1;
    setSelectedItems(Object.values(items));
  };

  const handleWithdrawItem = (id: number) => {
    if (items[id].count <= 1) {
      return;
    }
    items[id].count -= 1;
    setSelectedItems(Object.values(items));
  };

  const handleRemoveItem = (id: number) => {
    delete items[id];
    setSelectedItems(Object.values(items));
  };

  const toggleVisibility = () => {
    setIsVisible((oldValue) => !oldValue);
  };

  let totalItems = 0;

  if (Object.keys(items).length > 0) {
    Object.keys(items).forEach((value) => (totalItems += items[value].count));
  } else {
    totalItems = 0;
  }

  return (
    <main style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
      <ShoppingCart
        isVisible={isVisible}
        onClose={toggleVisibility}
        selectedItems={selectedItems}
        onAdd={handleAddItem}
        onWithdraw={handleWithdrawItem}
        onRemove={handleRemoveItem}
      />
      <Header totalItems={totalItems} onOpen={toggleVisibility} />
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
