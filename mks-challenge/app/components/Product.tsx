import Image from 'next/image';
import styles from './product.module.css';

interface ProductData {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: string;
  onBuy: () => void;
}

const Product = ({
  id,
  photo,
  name,
  description,
  price,
  onBuy,
}: ProductData) => {
  return (
    <div className={styles.container}>
      <Image width={'120'} height={'120'} src={photo} alt={name} />
      <div className={styles.row}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>R${price}</p>
      </div>
      <p className={styles.description}>{description}</p>
      <button
        onClick={() => {
          onBuy?.();
        }}
      >
        <Image
          width={'18'}
          height={'18'}
          src={'/shopping-bag.svg'}
          alt={'Icon'}
        />
        comprar
      </button>
    </div>
  );
};

export default Product;
