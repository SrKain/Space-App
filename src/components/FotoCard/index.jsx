import styled from "styled-components";
import {
  AiOutlineExpandAlt,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

const Figure = styled.figure`
  width: ${(props) => (props.$expand ? "100%" : "90%")};
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    border-radius: ${(props) => (props.$cap ? "20px 20px 0 0" : "20px")};
  }
  figcaption {
    display: ${(props) => (props.$cap ? "flex" : "none")};
    flex-direction: column;
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    button {
      background: transparent;
      color: white;
      border: none;
    }
    footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
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
const Expand = styled.button`
  ${(props) =>
    props.$expand
      ? "display: none;"
      : "background: transparent; color: white;border: none;"}
`;
const Fav = styled.button`
  background: transparent;
  color: white;
  border: none;
`;

export default function FotoCard(props) {
  return (
    <Figure $cap={props.cap} $expand={props.expand}>
      <img onClick={() => props.active(props.foto)} alt={`foto da ${props.foto.titulo}`} src={props.foto.path} />
      <figcaption>
        <h3>{props.foto.titulo}</h3>
        <footer>
          <p>{props.foto.fonte}</p>
          <div>
            <Fav onClick={() => props.onFav(props.foto)}>
              {props.foto.favorite ? (
                <AiFillHeart size={25} />
              ) : (
                <AiOutlineHeart size={25} />
              )}
            </Fav>
            <Expand
              $expand={props.expand}
              onClick={() => props.active(props.foto)}
            >
              <AiOutlineExpandAlt size={25} />
            </Expand>
          </div>
        </footer>
      </figcaption>
    </Figure>
  );
}
