'use client';
import { MinMaxWidth } from '@/common/CommonStyle';
import styled from '@emotion/styled';

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  ${MinMaxWidth}
`;
