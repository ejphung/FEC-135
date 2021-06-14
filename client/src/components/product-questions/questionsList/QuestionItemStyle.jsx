import styled from 'styled-components';

const ShowAnswerBtn = styled.div`
  background: transparent;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const Container = styled.div`
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1PX dashed #ddd;
`

const Wrapper = styled.div`
  display: flex;
  flex-direciton: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

`
const Question = styled.div`
  order: 1;
  flex-basis: 5%;

`
const QuestionBody = styled.div`
  order: 2;
  flex-basis: 55%;


`

const QuestionHelpful = styled.div`
  order: 3;
  flex-basis: 18%;
  border-right: solid;
  border-width: 1px;
  font-weight: 300;
  font-size: 12px;
  padding-left: 1px;
`

const QuestionAddAnswer = styled.div`
  order: 4;
  font-weight: 300;
  font-size: 10px;
  padding-left: 1px;
`

const List = styled.ul`
  list-style-type: none;
  padding: none;
`

const MoreWrapper = styled.div`
  display: flex;
`

const MoreAnswer = styled.div`
  order: 1;
  flex-basis: 5%;

`

const MoreTxt = styled.div`
  order: 2;
  font-size: 12px;
  font-weight: 200;

`

export default {
  ShowAnswerBtn,
  Container,
  Wrapper,
  Question,
  QuestionBody,
  QuestionHelpful,
  QuestionAddAnswer,
  List,
  MoreWrapper,
  MoreAnswer,
  MoreTxt,
};
