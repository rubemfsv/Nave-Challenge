import styled from 'styled-components';

export const Container = styled.div`
  width: 384px;
  height: 40px;
`;

export const ButtonForm = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--color-black);

  width: 100%;
  height: 40px;
  margin-top: 5px;
  margin-bottom: 25px;

  color: var(--color-white);
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  transition: opacity 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
