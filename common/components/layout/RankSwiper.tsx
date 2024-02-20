import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

export default function RankSwiper() {
  const [showRankerIndex, setShowRankerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Shuffle the rankers array

      setShowRankerIndex((prevIndex) => (prevIndex + 1) % rankers.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <RankSwiperStyle rank={showRankerIndex + 1}>
      <div className="block">
        {showRankerIndex === 0 && <span>👑 </span>}
        {showRankerIndex === 1 && <span>🥈 </span>}
        {showRankerIndex === 2 && <span>🥉 </span>}
        {showRankerIndex > 2 && <span>{showRankerIndex + 1}. </span>}
        <span>{rankers[showRankerIndex]?.name} </span>
        <span>[ {rankers[showRankerIndex]?.score} ]</span>
      </div>
    </RankSwiperStyle>
  );
}

const upSlide = keyframes`
  0% {
    transform: translateY(50px);
  }
  5% {
    transform: translateY(50px);
  }
  25% {
    transform: translateY(0);
    }
  75% {
    transform: translateY(0);
    }
  95% {
    transform: translateY(-50px);
    }
  100% {
    transform: translateY(-50px);
  }
`;

const RankSwiperStyle = styled.div<{ rank: number }>`
  width: 100%;
  margin-left: 12px;
  padding-right: 12px;
  min-height: 45px;
  max-height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  .block {
    animation: ${upSlide} 2s ease-in-out infinite;
    span {
      font-size: 20px;
      :first-of-type {
        font-weight: 700;
      }

      ${(props) => {
        switch (props.rank) {
          case 1:
            return `
          color: #FFD700;
        `;
          case 2:
            return `
          color: #C0C0C0;
        `;
          case 3:
            return `
          color: #CD7F32;
        `;
        }
      }}
    }
  }
`;

type RankerList = {
  id: string;
  name: string;
  score: number;
}[];

//todo lv 필요 ?
const rankers: RankerList = [
  { id: '1', name: 'John', score: 100 },
  { id: '2', name: 'Jane', score: 90 },
  { id: '3', name: 'Mike', score: 80 },
  { id: '4', name: 'Sarah', score: 70 },
  { id: '5', name: 'David', score: 60 },
  { id: '6', name: 'Emily', score: 50 },
  { id: '7', name: 'Alex', score: 40 },
  { id: '8', name: 'Olivia', score: 30 },
  { id: '9', name: 'Daniel', score: 20 },
  { id: '10', name: 'Sophia', score: 10 },
];
