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

const isCardNumberComplete = (cardNumber: CardNumber) => {
  let maxLength;
  if (cardNumber.brandType === "Diners") maxLength = 14;
  else if (cardNumber.brandType === "AMEX") maxLength = 15;
  else maxLength = 16;

  if (cardNumber.inputValue.replace(/\s/g, "").length === maxLength) return true;
  return false;
};

export default isCardNumberComplete;
