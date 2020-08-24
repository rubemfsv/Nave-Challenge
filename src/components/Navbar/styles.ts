import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 145.12;
  height: 37px;
`;

export const LogoutButton = styled.button`
  border: none;

  font-family: Montserrat;
  font-style: normal;

  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  color: var(--color-black);
  background-color: var(--color-white);

  transition: opacity 0.2s;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
