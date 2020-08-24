import styled from 'styled-components';
import { FaAngleLeft } from 'react-icons/fa';

export const Container = styled.div`
  background: var(--color-white);

  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  width: 600px;
  height: 408px;

  border: none;
  // border: 1px solid var(--color-black);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  padding: 32px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  color: #000000;
`;

export const BackIcon = styled(FaAngleLeft)`
  height: 40px;
  width: 12px;
  margin-right: 11px;

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Title = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-left: 10px;

  display: flex;
  align-items: center;

  color: var(--color-black);
`;
