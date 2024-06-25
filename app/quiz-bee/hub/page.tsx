"use client";
import React from "react";
import { css } from "@emotion/css";
import CustomStyledComponent from "@/app/common/components/style";
import CategoryBlock from "./_component/CategoryBlock";
import { useRouter } from "next/navigation";

export default function HivePage() {
  return (
    <CustomStyledComponent.PageStyle>
      <h1>
        <span>퀴즈비</span> 허브
      </h1>
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          height: 100%;
          padding: 16px;
          overflow: auto;
        `}
      >
        {categories.map((category) => (
          <CategoryBlock key={category.id} {...category} />
        ))}
      </div>
    </CustomStyledComponent.PageStyle>
  );
}

const categories = [
  { id: 1, category: "일반 지식", path: "general-knowledge" },
  { id: 2, category: "과학", path: "science" },
  { id: 3, category: "역사", path: "history" },
  { id: 4, category: "문학", path: "literature" },
  { id: 5, category: "예술", path: "art" },
  { id: 6, category: "지리", path: "geography" },
  { id: 7, category: "스포츠", path: "sports" },
  { id: 8, category: "엔터테인먼트", path: "entertainment" },
  { id: 9, category: "만화/애니메이션", path: "comics-animation" },
  { id: 10, category: "게임", path: "games" },
  { id: 11, category: "컴퓨터/IT", path: "computer-it" },
  { id: 12, category: "언어", path: "languages" },
  { id: 13, category: "수학", path: "math" },
  { id: 14, category: "논리", path: "logic" },
  { id: 15, category: "상식", path: "common-sense" },
  { id: 16, category: "한국어", path: "korean" },
  { id: 17, category: "영어", path: "english" },
  { id: 18, category: "일본어", path: "japanese" },
  { id: 19, category: "중국어", path: "chinese" },
  { id: 20, category: "나라", path: "countries" },
  { id: 21, category: "기타", path: "others" },
];
