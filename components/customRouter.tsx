'use client';
import { useRouter } from 'next/navigation';
import styled from '@emotion/styled';

import React from 'react';
import { RouterType } from '../type';

interface RouterProps {
  children: React.ReactNode;
  className?: string;
  href: RouterType;
}
export default function CustomRouter(props: RouterProps) {
  const { children, className, href } = props;
  const router = useRouter();

  return (
    <CustomRouterStyle
      className={className}
      onClick={() => {
        router.push(href);
      }}
    >
      {children}
    </CustomRouterStyle>
  );
}

const CustomRouterStyle = styled.div`
  width: fit-content;
  background-color: lightgray;
  :hover {
    cursor: pointer;
  }
`;
