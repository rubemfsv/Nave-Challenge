import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-white);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  width: 448px;
  height: 408px;
  top: 156px;

  border: 1px solid var(--color-black);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 60px;
`;

export const Logo = styled.img``;

export const CardBody = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;
