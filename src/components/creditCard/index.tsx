import {
  CardNumberValue,
  ExpirationPeriodValue,
  InfoValue,
  OwnerValue,
} from "../../@types/CreditCard";
import { CardType } from "../../constants/cardType";
import SIGN from "../../constants/sign";
import CreditCardBack from "./back";
import CreditCardFront from "./front";

interface CreditCardProps {
  showPreviewCardBack: boolean;
  expirationPeriod: ExpirationPeriodValue;
  cardNumber: string;
  owner: string;
  selected: CardType | undefined;
  info: string;
}

const CreditCard = ({
  showPreviewCardBack,
  expirationPeriod,
  cardNumber,
  owner,
  selected,
  info,
}: CreditCardProps) => {
  const formatExpirationPeriod = () =>
    expirationPeriod.year.length
      ? expirationPeriod.month + SIGN.slash + expirationPeriod.year
      : expirationPeriod.month;

  return !showPreviewCardBack ? (
    <CreditCardFront
      creditCardNumber={cardNumber}
      expirationPeriod={formatExpirationPeriod()}
      ownerName={owner}
      selectedCard={selected}
    />
  ) : (
    <CreditCardBack cvcNumber={info} /> // cvcNumber props 전달
  );
};

export default CreditCard;
