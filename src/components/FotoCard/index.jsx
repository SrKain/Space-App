import styled from "styled-components";

const Figure = styled.figure`
  width: ${(props) => (props.$expand ? "100%" : "90%")};
  max-width: 100%;
  height: auto;
  max-height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border-radius: ${(props)=>(props.$cap?'20px 20px 0 0':'20px')};
  }
  figcaption {
    display: ${(props) => (props.$cap?"flex":"none")};
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

export default function FotoCard(props) {
  return (
    <Figure $cap={props.cap} $expand={props.expand}>
      <img alt={`foto da ${props.foto.titulo}`} src={props.foto.path} />
      <figcaption >
        <h3>{props.foto.titulo}</h3>
        <footer>
          <p>{props.foto.fonte}</p>
          <button>Favorito</button>
          <button onClick={() => props.active(props.foto)}>Expandir</button>
        </footer>
      </figcaption>
    </Figure>
  );
}
