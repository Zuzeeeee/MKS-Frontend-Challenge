import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: white;
  padding-left: 20px;
`;

export const ShoppingCart = () => {
  return (
    <div>
      <Row>
        <p>Carrinho de compras</p>
        <button>X</button>
      </Row>
    </div>
  );
};
