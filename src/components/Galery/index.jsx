import styled from "styled-components";
import Tags from "./Tags";
import Popular from "./Popular";
import FotoCard from "../FotoCard";

const TitleStyled = styled.h2`
  background-image: linear-gradient(to right, #c98cf1, #7b78e5);
  background-clip: text;
  color: transparent;
  font-size: 32px;
  text-align: ${(props) => (props.$align ? props.$align : "left")};
`;

const ContainerGalery = styled.section`
  display: flex;
`;
const GridGalery = styled.div`
  flex-grow: 1;
`;
const GridPop = styled.div``;

const UlStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 0;
  padding: 2% 2% 0 0;
`;

const Fotos = styled.img`
  width: 100%;
  height: auto;
`;

export default function Galery(props) {
  return (
    <>
      <Tags />
      <ContainerGalery>
        <GridGalery>
          <TitleStyled>Navegue pela galeria</TitleStyled>
          <UlStyled>
            {props.images.map((item) => (
              <FotoCard foto={item} active={props.active} expand={false} key={item.id}/>
            ))}
          </UlStyled>
        </GridGalery>
        <Popular>
          <TitleStyled>Populares</TitleStyled>
        </Popular>
      </ContainerGalery>
    </>
  );
}
