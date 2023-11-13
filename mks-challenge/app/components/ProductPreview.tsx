import { Body } from '@/app/components/typography/Body';
import Image from 'next/image';
import styled from 'styled-components';

interface ProductPreviewProps {
  photo: string;
  name: string;
  count: number;
  price: string;
  onAdd: () => void;
  onRemove: () => void;
  onDelete: () => void;
}

const Card = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
  shadow: -2px 2px 10px #0000000d;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #000000;
  color: #ffffff;
`;

export const ProductPreview = ({
  photo,
  name,
  count,
  price,
  onAdd,
  onRemove,
  onDelete,
}: ProductPreviewProps) => {
  return (
    <Card>
      <Image width={'48'} height={'48'} src={photo} alt='product image' />
      <Body>{name}</Body>
      <div>
        <button onClick={onRemove}>-</button>
        <input type='number' value={count}></input>
        <button onClick={onAdd}>+</button>
      </div>
      <Body fontWeight={700}>{price}</Body>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </Card>
  );
};
