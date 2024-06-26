import styled, { css } from "styled-components";

export const SubHeader = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.heavy};
  font-size: 30px;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textSecendary};
  letter-spacing: 0.05em;
  margin: 0 0 48px;
  gap: 16px;
  margin: 32px;
  padding-bottom: 18px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.line.primary};

  ${({ $line }) =>
    $line &&
    css`
      border-color: ${({ theme }) => theme.colors.line.secendary};
      padding-bottom: 15px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    font-size: 18px;
    margin: 0 0 25px;
    gap: 12px;
    margin: 16px 16px 12px;
    padding-bottom: 12px;
  }
`;
