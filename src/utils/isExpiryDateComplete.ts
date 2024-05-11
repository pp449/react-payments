export interface ExpirationPeriodValue {
  month: string;
  year: string;
}

interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface ExpiryDate {
  inputValue: Record<keyof ExpirationPeriodValue, string>;
  validationResult: ValidationResult;
  handleExpiryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleExpiryDateBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const isExpiryDateComplete = (expiryDate: ExpiryDate) => {
  if (expiryDate.inputValue.month.length === 2 && expiryDate.inputValue.year.length === 2)
    return true;
  return false;
};

export default isExpiryDateComplete;
