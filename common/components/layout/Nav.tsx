'use client';
import React from 'react';
import styled from '@emotion/styled';
import { ROUTE } from '@/app/common/link';
import { BoxShadow, MinMaxWidth } from '@/common/CommonStyle';
import { FaRankingStar } from 'react-icons/fa6';
import Link from 'next/link';
import { GiHoneycomb } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import { GoHomeFill } from 'react-icons/go';

/**
 * @height 60px
 */
export default function Nav() {
  return (
    <NavStyled>
      <div className="inner__container">
        {NavButtonList.map((item, index) => {
          return (
            <Link href={item.link} className="button__box" key={index}>
              {item.icon}
              <span></span>
            </Link>
          );
        })}
      </div>
    </NavStyled>
  );
}

const NavButtonList = [
  { icon: <GoHomeFill />, name: 'Bee Hive', link: ROUTE.beeHive },
  { icon: <GiHoneycomb />, name: 'Quiz Hub', link: ROUTE.quizHub },
  { icon: <FaRankingStar />, name: 'Honey Crown', link: ROUTE.honeyCrown },
  // { icon: '/assets/images/feature_miner.png', name: 'HC EX', link: ROUTE.exchange },
  { icon: <AiFillSetting />, name: 'Setting', link: ROUTE.setting },
];

export const NavStyled = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  margin: 0 auto;
  background: yellowgreen;
  ${MinMaxWidth}
  .inner__container {
    margin: auto;
    width: 100%;
    max-width: 400px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .button__box {
      padding: 8px 12px;
      border-radius: 8px;
      transition: 0.3s;

      svg {
        width: 30px;
        height: 30px;
        color: white;
      }
      :active {
        background-color: aliceblue;
        svg {
          transform: scale(1.05);
        }
      }
    }
  }
`;
