import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import THEME from "../../styles/theme";

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface CVCNumber {
  readonly inputValue: string;
  readonly validationResult: ValidationResult;
  readonly handleCvcChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly handleCvcBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputCvcProps {
  cvcNumber: CVCNumber;
  id: string;
}

const InputCvc = ({ cvcNumber, id }: InputCvcProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="cvcNumber">{CARD_FORM_MESSAGE.cvc}</InputLabel>
      <InputBox
        inputValue={cvcNumber.inputValue}
        handleChange={cvcNumber.handleCvcChange}
        size="large"
        placeholder="cvc 3자리"
        id={id}
        name={CARD_INPUTBOX_NAME.info.cvc}
        isError={!cvcNumber.validationResult.isValid}
        onBlur={cvcNumber.handleCvcBlur}
      />
    </InputContainer>
  );
};

export default InputCvc;

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
