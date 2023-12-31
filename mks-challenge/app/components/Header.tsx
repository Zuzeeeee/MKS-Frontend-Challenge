'use client';
import Image from 'next/image';
import { Heading1 } from '@/app/components/typography/Heading';
import { Subtitle } from '@/app/components/typography/Subtitle';
import styled from 'styled-components';
import { Body } from '@/app/components/typography/Body';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: white;
  padding-left: 2em;
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #0f52ba;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0px 2em 0px;
  margin-bottom: 10px;
  flex: 0 1 auto;
`;

const Button = styled.button`
  display: flex;
  margin-right: 2em;
  justify-content: space-evenly;
  align-items: center;
  min-width: 80px;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 1em 0px 1em 0px;
`;

interface HeaderProps {
  totalItems: number;
  onOpen: () => void;
}

const Header = ({ totalItems, onOpen }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Row>
        <Heading1 fontWeight={600}>mks</Heading1>
        <Subtitle>sistemas</Subtitle>
      </Row>
      <Button onClick={() => onOpen()}>
        <Image
          width='18'
          height='18'
          src={'/shopping_cart.svg'}
          alt={'shopping_cart'}
        ></Image>
        <Body fontWeight={700}>{totalItems}</Body>
      </Button>
    </HeaderContainer>
  );
};

export default Header;
