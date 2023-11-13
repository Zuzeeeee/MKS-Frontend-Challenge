import ProductList from '@/app/components/ProductList';
import React from 'react';
import styles from './home.module.css';

const Home = () => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>();

  return (
    <main>
      <header>
        <div className={styles.row}>
          <p className={styles.title}>mks</p>
          <p className={styles.subtitle}>sistemas</p>
        </div>
        <button>carrinho</button>
      </header>
      <center>
        <ProductList />
      </center>
      <footer>
        <p>MKS sistemas © Todos os direitos reservados</p>
      </footer>
    </main>
  );
};

export default Home;
