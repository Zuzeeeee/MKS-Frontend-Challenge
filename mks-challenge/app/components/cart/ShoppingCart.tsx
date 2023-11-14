import { List } from '@/app/components/List';
import { ProductPreview } from '@/app/components/product/ProductPreview';
import { Heading3 } from '@/app/components/typography/Heading';
import { Product } from '@/app/query/getProductData';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isVisible?: 'visible' | 'hidden' | 'collapse';
}

const ContainerWrapper: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return <div className={className}>{children}</div>;
};

const Container = styled(ContainerWrapper)`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px #00000021;
  display: flex;
  flex-direction: column;
  flex-flow: column;
  min-width: 22em;

  visibility: ${(props) => props.isVisible ?? 'hidden'};
  opacity: ${(props) => (props.isVisible === 'visible' ? 1 : 0)};
  transition: visibility 0.3s linear, opacity 0.3s linear;

  button {
    color: #ffffff;
    background-color: #000000;
    &:hover {
      background-color: #61677a;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: space-between;
  width: 100%;
  flex: 0 1 auto;
  margin-bottom: 1em;
`;

const CloseButton = styled.button`
  border-radius: 100px;

  outline: none;
  border: none;

  p {
    padding: 5px 7px 5px 7px;
  }
`;

const FinalizeButton = styled.button`
  width: 100%;
  padding: 1em 0px 1em 0px;
`;

const PreviewContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
  margin: 2em 2em 0px 2em;
`;

interface ShoppingCartProps {
  isVisible: boolean;
  selectedItems: { data: Product; count: number }[];
  onAdd: (id: number) => void;
  onWithdraw: (id: number) => void;
  onRemove: (id: number) => void;
  onClose: () => void;
}

export const ShoppingCart = ({
  isVisible,
  selectedItems,
  onAdd,
  onWithdraw,
  onRemove,
  onClose,
}: ShoppingCartProps) => {
  let totalValue = 0;

  if (selectedItems.length > 0) {
    selectedItems.forEach(
      (value) => (totalValue += value.count * parseFloat(value.data.price))
    );
  }

  return (
    <Container isVisible={isVisible ? 'visible' : 'hidden'}>
      <PreviewContainer>
        <Row>
          <div>
            <Heading3 fontWeight={700}>Carrinho </Heading3>
            <Heading3 fontWeight={700}>de compras</Heading3>
          </div>
          <CloseButton onClick={onClose}>
            <Heading3>X</Heading3>
          </CloseButton>
        </Row>
        <List>
          {selectedItems.map((value) => (
            <ProductPreview
              key={value.data.id}
              count={value.count}
              onAdd={() => onAdd(value.data.id)}
              onWithdraw={() => onWithdraw(value.data.id)}
              onRemove={() => onRemove(value.data.id)}
              {...value.data}
            />
          ))}
        </List>
        <Row>
          <Heading3 fontWeight={700}>Total:</Heading3>
          <Heading3 fontWeight={700}>R${totalValue.toFixed(2)}</Heading3>
        </Row>
      </PreviewContainer>
      <div>
        <FinalizeButton>
          <Heading3 fontWeight={700}>Finalizar Compra</Heading3>
        </FinalizeButton>
      </div>
    </Container>
  );
};
