import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import THEME from "../../styles/theme";

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface Password {
  readonly inputValue: string;
  readonly validationResult: ValidationResult;
  readonly handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly handlePasswordBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputPasswordProps {
  password: Password;
  id: string;
}

const InputPassword = ({ password, id }: InputPasswordProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="password">{CARD_FORM_MESSAGE.twoDigitPassword}</InputLabel>
      <InputBox
        type="password"
        inputValue={password.inputValue}
        handleChange={password.handlePasswordChange}
        onBlur={password.handlePasswordBlur}
        size="large"
        placeholder="카드 비밀번호"
        id={id}
        name={CARD_INPUTBOX_NAME.authentication.password}
        isError={!password.validationResult.isValid}
        autoFocus
      />
    </InputContainer>
  );
};

export default InputPassword;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: ${THEME.DEFAULT.black};
  margin-bottom: 8px;
`;
