'use client';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  fontWeight?: 400 | 600 | 700;
}

const HeadingWrapper: React.FC<PProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export const Heading1 = styled(HeadingWrapper)`
  font-weight: ${(props) => props.fontWeight ?? 400};
  font-size: 40px;
  line-height: 19px;
  text-transform: uppercase;
`;

export const Heading3 = styled(HeadingWrapper)`
  font-weight: ${(props) => props.fontWeight ?? 400};
  font-size: 27px;
  line-height: 32px;
`;

export const Heading4 = styled(HeadingWrapper)`
  font-weight: ${(props) => props.fontWeight ?? 400};
  font-size: 16px;
  line-height: 19px;
`;
