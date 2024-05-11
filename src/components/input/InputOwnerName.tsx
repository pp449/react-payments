import InputBox from "./common/InputBox";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import styled from "@emotion/styled";
import CARD_INPUTBOX_NAME from "../../constants/cardInputBoxName";
import THEME from "../../styles/theme";

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface CardHolder {
  readonly inputValue: string;
  readonly validationResult: ValidationResult;
  readonly handleCardHolderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly handleCardHolderBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

interface InputOwnerNameProps {
  cardHolder: CardHolder;
  id: string;
}

const InputOwnerName = ({ cardHolder, id }: InputOwnerNameProps) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="ownerName">{CARD_FORM_MESSAGE.cardOwner}</InputLabel>
      <InputBox
        inputValue={cardHolder.inputValue.toUpperCase()}
        handleChange={cardHolder.handleCardHolderChange}
        onBlur={cardHolder.handleCardHolderBlur}
        size="large"
        placeholder="JOHN DOE"
        id={id}
        name={CARD_INPUTBOX_NAME.owner.name}
        isError={!cardHolder.validationResult.isValid}
        autoFocus
      />
    </InputContainer>
  );
};

export default InputOwnerName;

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
