'use client';
import { Body } from '@/app/components/typography/Body';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
  width: 100%;
  justify-content: center;
  padding: 10px 0px 10px 0px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Body>MKS sistemas © Todos os direitos reservados</Body>
    </FooterContainer>
  );
};

export default Footer;
