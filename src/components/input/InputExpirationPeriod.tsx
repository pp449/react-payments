import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import THEME from "../../styles/theme";

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

export interface ExpirationPeriodValue {
  month: string;
  year: string;
}

interface ExpiryDate {
  inputValue: Record<keyof ExpirationPeriodValue, string>;
  validationResult: ValidationResult;
  handleExpiryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleExpiryDateBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputExpirationPeriodProps {
  expiryDate: ExpiryDate;
  id: string;
}

interface InputboxData {
  inputValue: string;
  name: string;
}

const InputExpirationPeriod = ({ expiryDate, id }: InputExpirationPeriodProps) => {
  const inputboxData: InputboxData[] = [
    {
      inputValue: expiryDate.inputValue.month,
      name: CARD_INPUTBOX_NAME.expirationPeriod.month,
    },
    {
      inputValue: expiryDate.inputValue.year,
      name: CARD_INPUTBOX_NAME.expirationPeriod.year,
    },
  ];

  return (
    <InputContainer>
      <InputLabel htmlFor="expirationDate1">{CARD_FORM_MESSAGE.expirationDate}</InputLabel>
      <InputWrapper>
        {inputboxData.map((data, idx) => (
          <InputBox
            key={`expirationDate${idx + 1}`}
            inputValue={data.inputValue}
            handleChange={expiryDate.handleExpiryChange}
            onBlur={expiryDate.handleExpiryDateBlur}
            size="medium"
            placeholder="MM"
            id={`${id}${idx + 1}`}
            name={data.name}
            isError={!expiryDate.validationResult.isValid}
            autoFocus={idx === 0}
          />
        ))}
      </InputWrapper>
    </InputContainer>
  );
};

export default InputExpirationPeriod;

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
