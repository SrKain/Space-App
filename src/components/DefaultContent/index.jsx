import styled from "styled-components";
import Banner from "../Banner";

const Content = styled.section`
display: flex;
flex-direction: column;
`

export default function DefaultContent(props) {
  return (
    <Content>
      <Banner>A galeria mais completa de fotos do espaço!</Banner>
      {props.children}
    </Content>
  );
}
