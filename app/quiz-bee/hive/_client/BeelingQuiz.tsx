'use client';
import { BoxShadow } from '@/common/CommonStyle';
import { COLOR } from '@/common/constant/color';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import ClearModal from './ClearModal';

export default function BeelingQuiz() {
  const [round, setRound] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);
  const [showClear, setShowClear] = useState(false);

  const _onClickAnswer = (value: string) => {
    setSubmittedAnswer(null);
    if (quiz[round].Answer === value) {
      console.log('정답');
      if (round === quiz.length - 1) {
        alert('퀴즈 끝 더풀고싶으며 광고보세요 ^^');
        return;
      }

      setShowClear(true);
      setTimeout(() => {
        setShowClear(false);
        setRound(round + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setSubmittedAnswer(value);
      });
    }
  };

  return (
    <BeelingQuizStyle>
      <h2>BelingQuiz</h2>
      <div className="round">1/{quiz.length}</div>
      <div className="quiz__box">
        <p>
          <span>Q.</span> {quiz[round].Quiz}
        </p>
      </div>
      <div className="answer__box">
        {quiz[round].type === 'multiple' &&
          quiz[round].Options!.map((option, index) => (
            //button은 2줄까지 허용, 높이 고정
            <button key={index} className={`${option === submittedAnswer && option !== quiz[round].Answer ? 'error' : null}`} onClick={() => _onClickAnswer(option)}>
              {option}
            </button>
          ))}

        {quiz[round].type === 'objective' && <button onClick={() => _onClickAnswer(quiz[round].Answer)}>제출</button>}

        {quiz[round].type === 'ox' && (
          <>
            <button onClick={() => _onClickAnswer('O')}>O</button>
            <button onClick={() => _onClickAnswer('X')}>X</button>
          </>
        )}
      </div>
      {showClear && <ClearModal />}
    </BeelingQuizStyle>
  );
}

// shake
const shake = keyframes`
0% {
  transform: translateX(0);
}
12.5% {
  transform: translateX(2px);
}
25% {
  transform: translateX(-2px);
}
37.5% {
  transform: translateX(2px);
}
50% {
  transform: translateX(-2px);
}
62.5% {
  transform: translateX(2px);
}
75% {
  transform: translateX(-2px);
}
87.5% {
  transform: translateX(2px);
}
100% {
  transform: translateX(0px);
};
`;

const BeelingQuizStyle = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  width: 100%;
  border-radius: 12px;
  ${BoxShadow}
  .round {
    width: 100%;
    text-align: right;
  }
  .quiz__box {
    padding: 10px;
    width: 100%;
    p {
      font-size: 20px;
      text-align: left;
      line-height: 32px;
      span {
        display: inline-block;
        font-size: 24px;
        font-weight: 700;
        color: ${COLOR.green};
      }
    }
  }
  .answer__box {
    margin-top: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    button {
      width: 100%;
      height: 40px;
      padding: 10px;
      font-size: 16px;
      line-height: 20px;
      border: none;
      border-radius: 8px;
      color: ${COLOR.black};
      background-color: ${COLOR.green};
      transition: 0.2s;
      ${BoxShadow}
      :hover {
        cursor: pointer;
        background-color: ${COLOR.gold}aa;
      }
      :active {
        transform: scale(0.96);
      }
      :focus {
        outline: none;
      }
      &.error {
        background-color: ${COLOR.red};
        animation: ${shake} 0.4s;
      }
    }
  }
`;

type QuizType = {
  Quiz: string;
  type: 'multiple' | 'objective' | 'ox';
  Options?: string[];
  Answer: string;
};

const quiz: QuizType[] = [
  {
    Quiz: '2023년 FIFA 월드컵 개최국은 어디일까요?',
    type: 'multiple',
    Options: ['카타르', '미국', '멕시코', '캐나다'],
    Answer: '카타르',
  },
  {
    Quiz: '2024년 2월 4일 현재, 대한민국의 대통령은 누구일까요?',
    type: 'multiple', //'multiple' | 'objective' | 'ox'
    Options: ['윤석열', '이재명', '문재인', '박근혜'],
    Answer: '윤석열',
  },
  {
    Quiz: '2024년 2월 4일 현재, 국제연합 사무총장은 안토니우 구테흐스입니다.',
    type: 'ox',
    Answer: 'O',
  },
  {
    Quiz: '2024년 노벨상 시상식은 언제 개최될까요?',
    type: 'objective',
    Answer: '12월 10일',
  },
  {
    Quiz: '가장 높은 산은 무엇일까요?',
    type: 'multiple',
    Options: ['에베레스트산', 'K2', '칸첸중가', '마칼루'],
    Answer: '에베레스트산',
  },
  {
    Quiz: '지구에서 가장 큰 호수는 무엇일까요?',
    type: 'multiple',
    Options: ['카스피해', '수페리어호', '빅토리아호', '바이칼호'],
    Answer: '카스피해',
  },
  {
    Quiz: '대한민국의 국화는 무엇일까요?',
    type: 'multiple',
    Options: ['태극기', '무궁화', '장미', '국화'],
    Answer: '무궁화',
  },
  {
    Quiz: '인간의 심장은 몇 개의 심장 박동으로 구성되어 있을까요?',
    type: 'objective',
    Answer: '4개',
  },
  {
    Quiz: '태양계에서 가장 먼 행성은 무엇일까요?',
    type: 'multiple',
    Options: ['수성', '금성', '화성', '해왕성'],
    Answer: '해왕성',
  },
  {
    Quiz: '2024년 2월 4일 현재, 미국 대통령은 누구일까요?',
    type: 'multiple',
    Options: ['조 바이든', '도널드 트럼프', '버락 오바마', '조지 W. 부시'],
    Answer: '조 바이든',
  },
];
