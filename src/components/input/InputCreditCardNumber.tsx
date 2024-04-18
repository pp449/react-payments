import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import { CardNumberValue } from "../../@types/CreditCard";

interface InputCreditCardNumberProps {
  inputValue: CardNumberValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: boolean;
}

const InputCreditCardNumber = ({
  inputValue,
  handleChange,
  inputError,
}: InputCreditCardNumberProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="creditCardNumber">
        {CARD_FORM_MESSAGE.cardNumber}
      </InputLabel>
      <InputWrapper>
        <InputBox
          inputValue={inputValue.firstValue}
          handleChange={handleChange}
          size="small"
          placeholder="1234"
          id="creditCardNumber"
          name="firstValue"
          isError={inputError}
        />
        <InputBox
          inputValue={inputValue.secondValue}
          handleChange={handleChange}
          size="small"
          placeholder="1234"
          id="creditCardNumber"
          name="secondValue"
          isError={inputError}
        />
        <InputBox
          inputValue={inputValue.thirdValue}
          handleChange={handleChange}
          size="small"
          placeholder="1234"
          id="creditCardNumber"
          name="thirdValue"
          isError={inputError}
        />
        <InputBox
          inputValue={inputValue.fourthValue}
          handleChange={handleChange}
          size="small"
          placeholder="1234"
          id="creditCardNumber"
          name="fourthValue"
          isError={inputError}
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
  color: rgba(10, 13, 19, 1);
  margin-bottom: 8px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;