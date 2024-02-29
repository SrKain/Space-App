import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Galery from "./components/Galery";
import DefaultContent from "./components/DefaultContent";
import Images from "./fotos.json";
import { useState } from "react";
import ModalZomm from "./components/ModalZomm";

const FundoGradient = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const AppContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

export default function App() {
  const [Image, setImages] = useState(Images);
  const [ActiveImage, setActiveImage] = useState('');
  return (
    <FundoGradient>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContainer>
          <GridContent>
            <Sidebar />
            <DefaultContent>
              <Galery active={item => setActiveImage(item)} images={Image} />
            </DefaultContent>
          </GridContent>
        </MainContainer>
      </AppContainer>
      <ModalZomm foto={ActiveImage} />
    </FundoGradient>
  );
}
