import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import THEME from "../../styles/theme";

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

type BrandType = "Diners" | "AMEX" | "UnionPay" | "Visa" | "Master" | "Normal";

interface CardNumber {
  inputValue: string;
  validationResult: ValidationResult;
  brandType: BrandType;
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCardNumberBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputCreditCardNumberProps {
  cardNumber: CardNumber;
  id: string;
}

const InputCreditCardNumber = ({ cardNumber, id }: InputCreditCardNumberProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="creditCardNumber1">{CARD_FORM_MESSAGE.cardNumber}</InputLabel>
      <InputWrapper>
        <InputBox
          key={"creditCardNumber1"}
          inputValue={cardNumber.inputValue}
          handleChange={cardNumber.handleCardNumberChange}
          onBlur={cardNumber.handleCardNumberBlur}
          size="large"
          placeholder="1234"
          id={id}
          isError={!cardNumber.validationResult.isValid}
          autoFocus
        />
      </InputWrapper>
    </InputContainer>
  );
};

export default InputCreditCardNumber;

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

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
