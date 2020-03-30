import {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  useState
} from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  height: 72px;
  width: 100%;
  padding-top: 24px;
`;

const Placeholder = styled.div<{ activated: boolean }>`
  position: absolute;
  pointer-events: none;
  top: ${({ activated }) => (activated ? 0 : "50%")};
  padding: 16px;
  margin-top: 12px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ activated }) => (activated ? "1.2rem" : "1.6rem")};
  transform: translateY(-50%);
  color: ${({ activated, theme }) =>
    activated ? "#000" : theme.colors.placeholder};
  transition: top 0.2s ease-in-out, color 0.2s ease-in-out,
    font-size 0.2s ease-in-out;
  text-transform: none;
  text-align: left;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  appearance: none;
  border: none;
  padding: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  outline: none;
  border-radius: 4px;
  text-transform: inherit;
  text-align: inherit;
`;

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const TextInput: FC<Props> = ({
  placeholder,
  className,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  const [activated, setActivated] = useState(false);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setActivated(true);
    onFocus && onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setActivated(!!event.target.value.length);
    onFocus && onFocus(event);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setActivated(!!event.target.value.length);
    onChange && onChange(event);
  };

  return (
    <InputContainer className={className}>
      <StyledInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        {...props}
      />
      {placeholder && (
        <Placeholder activated={activated || !!props.value}>
          {placeholder}
        </Placeholder>
      )}
    </InputContainer>
  );
};

export default TextInput;
