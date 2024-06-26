import styled, { css } from "styled-components";

export const Title = styled.h4`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.tile.title};
  margin: 0;

  ${({ theme, $error }) =>
    $error &&
    css`
      color: ${theme.colors.textSecendary};
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    font-size: 16px;
  }
`;
