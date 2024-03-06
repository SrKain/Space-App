import styled from "styled-components";
import Tags from "./Tags";
import Popular from "./Popular";
import FotoCard from "../FotoCard";
import { useState } from "react";

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


const PopStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  gap: 1.5rem;
`;

const VerMais = styled.button`
  background-color: transparent;
  border: 1px solid #7B78E5;
  color: white;
  width: 90%;
  border-radius: 12px;
  padding: 0.5rem 0;
  margin: 1rem 0;
`

export default function Galery(props) {
  const [Exib, setExib] = useState(5);
  return (
    <>
      <Tags onTag={props.onTag} />
      <ContainerGalery>
        <GridGalery>
          <TitleStyled>Navegue pela galeria</TitleStyled>
          <UlStyled>
            {props.filterImages.map((item) => (
              <FotoCard
                onFav={props.onFav}
                cap={true}
                foto={item}
                active={props.active}
                expand={false}
                key={item.id}
              />
            ))}
          </UlStyled>
        </GridGalery>
        <GridPop>
          <TitleStyled>Populares</TitleStyled>
          <PopStyled>
            {props.images.slice(0,Exib).map((item) => (
              <FotoCard
                cap={false}
                key={item.id}
                foto={item}
                active={props.active}
                expand={false}
              />
            ))}
          </PopStyled>
              <VerMais onClick={()=> setExib(props.images.length)} >Veja mais.</VerMais>
        </GridPop>
      </ContainerGalery>
    </>
  );
}
