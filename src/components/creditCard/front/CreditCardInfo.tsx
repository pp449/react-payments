import styled from "@emotion/styled";
import { CreditCardProps } from "../../../@types/CreditCard";
import THEME from "../../../styles/theme";

const CreditCardInfo = ({ creditCardNumber, expirationPeriod, ownerName }: CreditCardProps) => {
  return (
    <CreditCardInfoContainer>
      <CreditCardInfoWrapper>{creditCardNumber}</CreditCardInfoWrapper>
      <CreditCardExpirationPeriod>{expirationPeriod}</CreditCardExpirationPeriod>
      <CreditCardOwnerInfo>{ownerName.toUpperCase()}</CreditCardOwnerInfo>
    </CreditCardInfoContainer>
  );
};

export default CreditCardInfo;

const CreditCardInfoContainer = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: ${THEME.DEFAULT.white};
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 44px 12px;
`;

const CreditCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
`;

const CreditCardExpirationPeriod = styled.h3`
  height: 20px;
`;

const CreditCardOwnerInfo = styled.h3`
  width: 100%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
