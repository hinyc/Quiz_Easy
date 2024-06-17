'use client';
import React from 'react';
import Block from './_component/Block';
import { css } from '@emotion/css';
import CustomStyledComponent from '@/app/common/components/style';

export default function HivePage() {
  console.log(`This is line one. This is line two.`);
  return (
    <CustomStyledComponent.PageStyle>
      <h1>
        <span>퀴즈비</span> 허브
      </h1>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          height: 100%;
          padding: 16px;
          overflow: auto;
        `}
      >
        {categories.map((category) => (
          <Block key={category.id} {...category} />
        ))}
      </div>
    </CustomStyledComponent.PageStyle>
  );
}

const categories = [
  { id: 1, category: '일반 지식' },
  { id: 2, category: '과학' },
  { id: 3, category: '역사' },
  { id: 4, category: '문학' },
  { id: 5, category: '예술' },
  { id: 6, category: '지리' },
  { id: 7, category: '스포츠' },
  { id: 8, category: '엔터테인먼트' },
  { id: 9, category: '만화 /애니메이션' },
  { id: 10, category: '게임' },
  { id: 11, category: '컴퓨터/IT' },
  { id: 12, category: '언어' },
  { id: 13, category: '수학' },
  { id: 14, category: '논리' },
  { id: 15, category: '상식' },
  { id: 16, category: '한국어' },
  { id: 17, category: '영어' },
  { id: 18, category: '일본어' },
  { id: 19, category: '중국어' },
  { id: 20, category: '나라' },
  { id: 21, category: '기타' },
];
