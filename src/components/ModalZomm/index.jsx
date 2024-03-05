import styled from "styled-components";
import FotoCard from "../FotoCard";
import { useState } from "react";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Dialog = styled.dialog`
  position: fixed;
  background: transparent;
  top: 10vh;
  width: 50vw;
  height: 60vh;
  padding: 0;
  & > img {
    height: 100%;
  }
  div {
    height: 100%;
  }
`;
const Close = styled.button`
  position: fixed;
  top: 15%;
  right: 27%;
  color: white;
  background: transparent;
  border: none;
`;

export default function ModalZomm(props) {
  return (
    !!props.foto && (
      <>
        <Overlay onClick={() => props.close(false)} />
        <Dialog open={!!props.foto}>
          <div>
            <FotoCard onFav={props.onFav} foto={props.foto} cap={true} expand={true} />
            <form method="dialog">
              <Close onClick={() => props.close(false)}>X</Close>
            </form>
          </div>
        </Dialog>
      </>
    )
  );
}
