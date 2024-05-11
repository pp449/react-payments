import styled from "@emotion/styled";

import IconKind from "../../@types/IconKind";
import IconSource from "../../constants/IconSource";

interface IconProps {
  kind: IconKind;
}

const Icon = ({ kind }: IconProps) => {
  return (
    <CheckBoxContainer>
      <Img src={IconSource[kind]} />
    </CheckBoxContainer>
  );
};

export default Icon;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Img = styled.img`
  margin: 0 auto;
`;
