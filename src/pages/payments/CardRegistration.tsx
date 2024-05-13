import styled from "@emotion/styled";
import CreditCardForm from "../../components/creditCardForm";
import CARD_FORM_MESSAGE from "../../constants/cardFormMessage";
import InputCreditCardNumber from "../../components/input/InputCreditCardNumber";
import InputExpirationPeriod from "../../components/input/InputExpirationPeriod";
import InputOwnerName from "../../components/input/InputOwnerName";

import InputCVC from "../../components/input/InputCVC";
import InputPassword from "../../components/input/InputPassword";
import useCurrentIndex from "../../hooks/useCurrentIndex";
import { useEffect, useState } from "react";
import CARD_INPUT_LENGTH from "../../constants/cardInputLength";
import Button from "../../components/button/common";
import { useNavigate } from "react-router-dom";
import CreditCard from "../../components/creditCard";
import SIGN from "../../constants/sign";
import { useCVC, useCardHolder, useCardNumber, useExpiryDate, usePassword } from "darr-input-hooks";
import isCardNumberComplete from "../../utils/isCardNumberComplete";
import isExpiryDateComplete from "../../utils/isExpiryDateComplete";
import CardSelector from "../../components/cardSelector/CardSelector";
import { CardType } from "../../constants/cardType";

interface CreditCardForms {
  title: string;
  description: string;
  inputError: boolean;
  childComponent: JSX.Element;
}

const CardRegistration = () => {
  const cardNumber = useCardNumber("");
  const expiryDate = useExpiryDate({ month: "", year: "" });
  const cardHolder = useCardHolder("");
  const cvcNumber = useCVC("");
  const password = usePassword("");
  const [selected, setSelected] = useState<CardType>();

  const [showPreviewCardBack, setShowPreviewCardBack] = useState(false);

  const completeStatus = [
    isCardNumberComplete(cardNumber),
    !!selected,
    isExpiryDateComplete(expiryDate),
    !!cardHolder.inputValue,
    cvcNumber.inputValue.length === 3,
    password.inputValue.length === 2,
  ];

  const currentIndex = useCurrentIndex(...completeStatus);
  const isFormComplete = completeStatus.every(Boolean);
  const router = useNavigate();

  useEffect(() => {
    if (cvcNumber.inputValue) setShowPreviewCardBack(true);
    if (cvcNumber.inputValue.length === CARD_INPUT_LENGTH.cvc) setShowPreviewCardBack(false);
  }, [cvcNumber.inputValue]);

  const creditCardForms: CreditCardForms[] = [
    {
      title: CARD_FORM_MESSAGE.inputCardNumber,
      description: CARD_FORM_MESSAGE.cardNumberDescription,
      inputError: cardNumber.validationResult.errorMessage,
      childComponent: <InputCreditCardNumber cardNumber={cardNumber} id="creditCardNumber" />,
    },
    {
      title: CARD_FORM_MESSAGE.inputCardType,
      description: CARD_FORM_MESSAGE.domasticCardOnly,
      inputError: false,
      childComponent: (
        <CardSelector
          selected={selected}
          handleSelected={(selectedBank) => setSelected(selectedBank)}
        />
      ),
    },
    {
      title: CARD_FORM_MESSAGE.inputCardExpirationDate,
      description: CARD_FORM_MESSAGE.cardExpirationDateDescription,
      inputError: expiryDate.validationResult.errorMessage,
      childComponent: <InputExpirationPeriod expiryDate={expiryDate} id="expirationDate" />,
    },
    {
      title: CARD_FORM_MESSAGE.inputCardOwner,
      description: SIGN.empty,
      inputError: cardHolder.validationResult.errorMessage,
      childComponent: <InputOwnerName cardHolder={cardHolder} id="ownerName" />,
    },
    {
      title: CARD_FORM_MESSAGE.inputCvc,
      description: SIGN.empty,
      inputError: cvcNumber.validationResult.errorMessage,
      childComponent: <InputCVC cvcNumber={cvcNumber} id="cvcNumber" />,
    },
    {
      title: CARD_FORM_MESSAGE.inputCardPassword,
      description: CARD_FORM_MESSAGE.cardPasswordDescription,
      inputError: password.validationResult.errorMessage,
      childComponent: <InputPassword password={password} id="password" />,
    },
  ];

  return (
    <PaymentsContainer>
      <CreditCard
        cardNumber={cardNumber.inputValue}
        showPreviewCardBack={showPreviewCardBack}
        expirationPeriod={expiryDate.inputValue}
        owner={cardHolder.inputValue}
        selected={selected}
        info={cvcNumber.inputValue}
      />
      <InputFormContainer>
        {creditCardForms.map((formData, idx) => {
          if (idx > currentIndex) return;

          return (
            <CreditCardForm
              title={formData.title}
              description={formData.description}
              inputError={formData.inputError}
              key={formData.title}
            >
              {formData.childComponent}
            </CreditCardForm>
          );
        })}
      </InputFormContainer>
      {isFormComplete && (
        <ButtonWrapper>
          <Button
            content="확인"
            onClick={() =>
              router("/register/success", {
                state: {
                  selectedCard: selected,
                  cardNumber: cardNumber.inputValue.split(" ")[0],
                },
              })
            }
          />
        </ButtonWrapper>
      )}
    </PaymentsContainer>
  );
};

export default CardRegistration;

const PaymentsContainer = styled.div`
  padding: 5% 0 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 45px;
  display: flex;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
`;
