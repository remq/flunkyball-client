import styled, { css } from "styled-components";

export const paragraphStyle = css`
  font-family: ${({ theme }) => theme.fonts.paragraph};
  font-size: 1.4rem;
`;

export const headingStyle = css`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
`;

export const Paragraph = styled.p`
  ${paragraphStyle}
`;

export const Heading1 = styled.h1`
  ${headingStyle}
`;
