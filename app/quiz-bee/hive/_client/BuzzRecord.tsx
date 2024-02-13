'use client';
import { BoxShadow } from '@/common/CommonStyle';
import { COLOR } from '@/common/constant/color';
import styled from '@emotion/styled';
import React from 'react';

export default function BuzzRecord() {
  return (
    <InfoBoxStyle>
      {/* <h2>Buzz Records</h2> */}
      <div className="info__box">
        <div>
          <div className="name">
            <h4>QuizTally</h4>
            <h4>Buzz Rank</h4>
            <h4>Honey Comb</h4>
          </div>
          <div className="value">
            <span>25 / 121 ( 76% )</span>
            <span> 992</span>
            <span>112,353</span>
          </div>
        </div>
      </div>
    </InfoBoxStyle>
  );
}

const InfoBoxStyle = styled.div`
  padding: 12px;
  border-radius: 12px;
  /* margin-bottom: 24px; */
  width: 100%;
  height: 150px;
  ${BoxShadow}

  .info__box {
    margin: 0 auto;
    min-width: 250px;
    max-width: 450px;
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
        font-size: 20px;
      }
    }
  }
`;
