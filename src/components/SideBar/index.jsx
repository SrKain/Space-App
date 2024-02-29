import styled from "styled-components";
import ListItem from "./ListItem";

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

export default function Sidebar() {
  return (
    <aside>
      <nav>
        <UlStyled>
          <ListItem
            linkactive={"./assets/icones/home-ativo.png"}
            linkdeactive={"./assets/icones/home-inativo.png"}
            active={true}
          >
            Inicio
          </ListItem>
          <ListItem
            linkactive={"./assets/icones/mais-vistas-ativo.png"}
            linkdeactive={"./assets/icones/mais-vistas-inativo.png"}
          >
            Mais Vistos
          </ListItem>
          <ListItem
            linkactive={"./assets/icones/mais-curtidas-ativo.png"}
            linkdeactive={"./assets/icones/mais-curtidas-inativo.png"}
          >
            Mais Curtidas
          </ListItem>
          <ListItem
            linkactive={"./assets/icones/novas-ativo.png"}
            linkdeactive={"./assets/icones/novas-inativo.png"}
          >
            Novas
          </ListItem>
          <ListItem
            linkactive={"./assets/icones/surpreenda-me-ativo.png"}
            linkdeactive={"./assets/icones/surpreenda-me-inativo.png"}
          >
            Surpreenda-me!
          </ListItem>
        </UlStyled>
      </nav>
    </aside>
  );
}
