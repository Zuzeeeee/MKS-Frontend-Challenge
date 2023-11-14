import { Body } from '@/app/components/typography/Body';
import { Caption } from '@/app/components/typography/Caption';
import Image from 'next/image';
import styled from 'styled-components';

interface ProductPreviewProps {
  photo: string;
  name: string;
  count: number;
  price: string;
  onAdd: () => void;
  onWithdraw: () => void;
  onRemove: () => void;
}

const Card = styled.div`
  position: relative;

  display: flex;
  flex-flow: row;

  background-color: #ffffff;
  box-shadow: -2px 2px 10px #0000000d;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  width: 100%;

  p {
    text-align: left;
  }

  img {
    border-radius: 10px;
    margin-right: 10px;
  }
`;

const DeleteButton = styled.button`
  position: absolute;
  border-radius: 100px;
  height: 20px;
  width: 20px;
  top: -0.5em;
  right: -0.5em;
  background-color: #000000;
  color: #ffffff;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.3px solid #bfbfbf;
  border-radius: 10px;
  padding: 0.3em;
  margin: 0px 0.7em 0px 0.7em;

  p {
    text-align: center;
    margin: 0px 5px 0px 5px;
  }
`;

const LeftButton = styled.div`
  display: flex;
  background-color: #ffffff;
  border-right: 0.3px solid #bfbfbf;
  padding-right: 5px;
`;

const RightButton = styled.div`
  display: flex;
  background-color: #ffffff;
  border-left: 0.3px solid #bfbfbf;
  padding-left: 5px;
`;

const NameContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 auto;
`;

const PriceContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  justify-content: right;
  margin-right: 10px;
`;

export const ProductPreview = ({
  photo,
  name,
  count,
  price,
  onAdd,
  onWithdraw,
  onRemove,
}: ProductPreviewProps) => {
  return (
    <Card>
      <Image width={'48'} height={'48'} src={photo} alt='product image' />
      <NameContainer>
        <Body>{name}</Body>
      </NameContainer>
      <CountContainer>
        <LeftButton onClick={onWithdraw}>-</LeftButton>
        <Caption>{count}</Caption>
        <RightButton onClick={onAdd}>+</RightButton>
      </CountContainer>
      <PriceContainer>
        <Body fontWeight={700}>R${price}</Body>
      </PriceContainer>
      <DeleteButton onClick={onRemove}>
        <Body>X</Body>
      </DeleteButton>
    </Card>
  );
};
