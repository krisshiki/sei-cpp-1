import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  text-align: center;
`;

export const Title = styled.div`
  text-align: center;
  padding-bottom: 1.4rem;
  h2 {
    font-size: 22pt,
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: repeat(1h 1fr);
  grid-template-rows: 8fr;
  gap: 4rem 1.2rem;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 680px) {
  }

  h4 {
    color: #212121;
    font-size: 1rem;
  }

  p {
    padding: 0.1rem;
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1.4rem 0;
  min-height: 140px;
  h4 {
    color: #37474f;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 0.4rem 2.5rem;
  // margin-top: 2rem;
  margin-bottom: 1rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #fff;
  background: #007fed;

  &:focus {
    outline: none;
  }

  &:hover{
    padding: 0.4rem 2.8rem;
    background: #0089ff;
    transition: 0.1s ease-in;
  }

  &:disabled {
    background: gray;
  }

  ${({ secondary }) =>
    secondary &&
    `
		background: #001F3F;
	`}
`;