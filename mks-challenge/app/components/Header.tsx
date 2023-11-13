'use client';
import Image from 'next/image';
import { Heading } from '@/app/components/typography/Heading';
import { Subtitle } from '@/app/components/typography/Subtitle';
import styled from 'styled-components';
import { BoldBody } from '@/app/components/typography/Body';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: white;
  padding-left: 20px;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #0f52ba;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: flex;
  margin-right: 20px;
  justify-content: space-evenly;
  align-items: center;
  min-width: 80px;
  border-radius: 10px;
  background-color: #ffffff;
`;

interface HeaderProps {
  totalItems: number;
}

const Header = ({ totalItems }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Row>
        <Heading>mks</Heading>
        <Subtitle>sistemas</Subtitle>
      </Row>
      <Button>
        <Image
          width='18'
          height='18'
          src={'/shopping_cart.svg'}
          alt={'shopping_cart'}
        ></Image>
        <BoldBody>{totalItems}</BoldBody>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
