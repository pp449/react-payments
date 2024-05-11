import { useState } from "react";
import BankLists from "../bankLists/bankLists";
import styled from "@emotion/styled";
import THEME from "../../styles/theme";
import { Modal } from "darr-modal-components";
import { CardType } from "../../constants/cardType";
import "darr-modal-components/dist/style.css";

interface CardSelectorProps {
  selected: string | undefined;
  handleSelected: (selectedBank: CardType) => void;
}

const CardSelector = ({ selected, handleSelected }: CardSelectorProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <Modal
          modalTitle="카드사 선택"
          hasCloseButton={true}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        >
          {" "}
          <BankLists
            onClick={(selectedBank) => {
              handleSelected(selectedBank);
              setIsModalOpen(false);
            }}
          />
        </Modal>
      )}
      <CardSelection onClick={() => setIsModalOpen(true)}>
        {selected ? selected : "카드를 선택해주세요"}
      </CardSelection>
    </>
  );
};

export default CardSelector;

const CardSelection = styled.div`
  border: 1px solid ${THEME.DEFAULT.grey};
  text-align: center;
  height: 32px;
  box-sizing: border-box;
  font-size: 11px;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 2px;
`;
