'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import Block from './_component/Block';
import { css } from '@emotion/css';

const test = {
  x: 42,
  getX: function () {
    if (!this?.x) return;
    console.log('!!!!!', this);
    return this.x;
  },
};

type test1 = {
  x: number;
  y?: number;
  getX: () => number;
};
type test2 = {
  x: string | number;
  y: number;
  getX: () => number;
};

type test3 = test1 & test2;

const a: test3 = {
  x: 42,
  y: 42,
  getX: () => 42,
};

export default function HivePage() {
  console.log(`This is line one. This is line two.`);
  return (
    <div>
      블럭모양 ? 일자로 나열 ? 문제수만큼 크기를 다르게 ? 랜덤그리드 ?<div id="test-1">카테고리1</div>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        `}
      >
        {categories.map((category) => (
          <Block key={category.id} {...category} />
        ))}
      </div>
    </div>
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
  { id: 9, category: '만화/애니메이션' },
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
  { id: 20, category: '기타' },
];
