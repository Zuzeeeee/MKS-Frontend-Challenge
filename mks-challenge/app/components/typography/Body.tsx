'use client';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  fontWeight?: 400 | 600 | 700;
}

const BodyWrapper: React.FC<PProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const Body = styled(BodyWrapper)`
  font-weight: ${(props) => props.fontWeight ?? 400};
  font-size: 12px;
  line-height: 15px;
`;
