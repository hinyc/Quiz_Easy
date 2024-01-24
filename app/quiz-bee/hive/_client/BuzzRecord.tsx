'use client';
import { COLOR } from '@/constant/color';
import styled from '@emotion/styled';
import React from 'react';

export default function BuzzRecord() {
  return (
    <InfoBoxStyle>
      <div className="info__box">
        <h2>Buzz Records</h2>
        <div>
          <div className="name">
            <div>QuizTally</div>
            <div>Buzz Rank</div>
            <div>Honey Comb</div>
          </div>
          <div className="value">
            <div>25 / 121 ( 76% )</div>
            <div> 992</div>
            <div>112,353</div>
          </div>
        </div>
      </div>
      <div className="img__box">
        <img src="" alt="" />
      </div>
      {/* 화면 가로가 커지면 가려진 그림이 길어지도록 하자 */}
    </InfoBoxStyle>
  );
}

const InfoBoxStyle = styled.div`
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 12px;
  display: flex;

  .info__box {
    /* background-color: pink; */
    min-width: 250px;
    h2 {
      margin-bottom: 8px;
    }

    > div {
      display: flex;
      .name {
        color: ${COLOR.gold};
        margin: 0 12px;
        text-align: right;
      }
      .name,
      .value {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4px;
      }
    }
  }
  .img__box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      background-color: yellow;
      width: 100%;
      height: 100%;
    }
  }
`;
