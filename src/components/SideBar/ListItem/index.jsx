import styled from "styled-components";

const LiStyled = styled.li`
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 22px;
  color: ${ props => props.$active?'#7B78E5':'white'};
  font-family: ${ props => props.$active?'GandhiSans-Bold':'GandhiSans-Regular'}
`;

export default function ListItem(props, active = false) {
  return (
    <LiStyled $active={props.active}>
      <img
        src={props.active ? `${props.linkactive}` : `${props.linkdeactive}`}
      />
      {props.children}
    </LiStyled>
  );
}
