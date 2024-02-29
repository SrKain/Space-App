import styled from "styled-components";

const BannerStyled = styled.div`
  background-image: url("/assets/imagens/banner/Foto destaque.png");
  background-size: auto;
  height: 250px;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-radius: 20px;
  align-items: center;
  font-size: 40px;
  padding: 30px;
  color: white;
`;

export default function Banner(props) {
  return <BannerStyled>{props.children}</BannerStyled>;
}
