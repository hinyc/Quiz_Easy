import { categoryType } from '@/type';
import { css } from '@emotion/css';
import React from 'react';

export default function Block({ id, category }: categoryType) {
  const _onClick = () => {
    console.log(id, category);
  };
  return (
    <div
      className={css`
        background-color: pink;
        width: 60px;
        height: 60px;
        border-radius: 10px;
      `}
    >
      <span>{category}</span>
    </div>
  );
}
