import { lighten } from "polished";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  border: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => lighten(0.05, theme.colors.primary)};
  }
`;

export default Button;
