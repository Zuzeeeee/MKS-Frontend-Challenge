import { Heading3 } from '@/app/components/typography/Heading';
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
  display-direction: column;
  max-width: 80%;
  visibility: ${(props) => props.isVisible ?? 'hidden'};
  opacity: ${(props) => (props.isVisible === 'visible' ? 1 : 0)};
  transition: visibility 0.3s linear, opacity 0.3s linear;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: space-evenly;
  margin: 10px 20px;
`;

const CloseButton = styled.button`
  border-radius: 100px;
  margin-left: 10px;
  color: #ffffff;
  background-color: #000000;
  outline: none;
  border: none;
`;

interface ShoppingCartProps {
  isVisible: boolean;
  onClose: () => void;
}

export const ShoppingCart = ({ isVisible, onClose }: ShoppingCartProps) => {
  return (
    <Container isVisible={isVisible ? 'visible' : 'hidden'}>
      <div>
        <Row>
          <div>
            <Heading3 fontWeight={700}>Carrinho </Heading3>
            <Heading3 fontWeight={700}>de compras</Heading3>
          </div>
          <CloseButton onClick={onClose}>X</CloseButton>
        </Row>
      </div>
    </Container>
  );
};
