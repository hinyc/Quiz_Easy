import Page from '@/app/quiz-bee/page';
import styled from '@emotion/styled';

const PageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  overflow: auto;
  h1 {
    padding: 16px;
  }
`;

const CustomStyledComponent = {
  PageStyle,
};

export default CustomStyledComponent;
