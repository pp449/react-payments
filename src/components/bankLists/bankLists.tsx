import styled from "@emotion/styled";
import Icon from "../icon";
import IconKind from "../../@types/IconKind";
import { CardType } from "../../constants/cardType";

const bankList: { iconKind: IconKind; label: CardType }[] = [
  {
    iconKind: "bc",
    label: "BC카드",
  },
  {
    iconKind: "shin",
    label: "신한카드",
  },
  {
    iconKind: "kakao",
    label: "카카오뱅크",
  },
  {
    iconKind: "hyeondae",
    label: "현대카드",
  },
  {
    iconKind: "woori",
    label: "우리카드",
  },
  {
    iconKind: "lotte",
    label: "롯데카드",
  },
  {
    iconKind: "hana",
    label: "하나카드",
  },
  {
    iconKind: "kb",
    label: "국민카드",
  },
];

interface BankListsProps {
  onClick: (selectedBank: CardType) => void;
}

const BankLists = ({ onClick }: BankListsProps) => {
  return (
    <BankContainer>
      {bankList.map((bank) => (
        <BankWrapper onClick={() => onClick(bank.label)}>
          <Icon kind={bank.iconKind} />
          <BankLabel>{bank.label}</BankLabel>
        </BankWrapper>
      ))}
    </BankContainer>
  );
};

export default BankLists;

const BankContainer = styled.div`
  display: flex;
  padding-top: 24px;
  flex-wrap: wrap;
`;
const BankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-bottom: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const BankLabel = styled.p`
  padding-top: 4px;
  width: 100%;
  height: 15px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
`;
