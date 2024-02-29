import styled from "styled-components";
import FotoCard from "../FotoCard";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Dialog = styled.dialog`
  
`

export default function ModalZomm(props) {
  return (
    <>
      {props.foto && (
        <>
        <Overlay />
          <Dialog open={!!props.foto}>
            <FotoCard foto={props.foto} expand={true} />
            <form method="dialog">
              <button>OK</button>
            </form>
          </Dialog>
        </>
      )}
    </>
  );
}
