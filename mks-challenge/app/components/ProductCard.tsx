import { Caption } from '@/app/components/typography/Caption';
import { Heading4 } from '@/app/components/typography/Heading';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 200px;
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 8px #00000042;
  border-radius: 10px;
  padding-top: 5px;
  margin: 0px 2vw 10px 0px;
  min-height: 270px;

  button {
    display: flex;
    color: #ffffff;
    background-color: #0f52ba;
    width: 100%;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px 0px 5px 0px;
    text-transform: uppercase;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    flex: 0 1 auto;
    &:hover {
      background-color: #0f52baab;
    }
  }

  button img {
    margin-right: 5px;
  }

  p {
    text-align: left;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
  flex: 1 1 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px 0px 5px;
  margin-bottom: 5px;
`;

const Price = styled.p`
  background-color: #373737;
  color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  margin-left: 5px;
`;

interface ProductData {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: string;
  onBuy: () => void;
}

const ProductCard = ({
  id,
  photo,
  name,
  description,
  price,
  onBuy,
}: ProductData) => {
  return (
    <Container>
      <Image width={'120'} height={'120'} src={photo} alt={name} />
      <Column>
        <Row>
          <Heading4 color='#2C2C2C'>{name}</Heading4>
          <Price>R${price}</Price>
        </Row>
        <Caption>{description}</Caption>
      </Column>
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
    </Container>
  );
};

export default ProductCard;
