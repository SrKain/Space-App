import styled from "styled-components";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
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

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04244f;
  margin: 1rem 0 0 0;
  padding: 0 1rem;
  div {
    display: flex;
    gap: 0.5rem;
  }
  h1 {
    font-size: 1.3rem;
    color: white;
    font-weight: 200;
    strong {
      font-weight: 500;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default function App() {
  const [Image, setImages] = useState(Images);
  const [ActiveImage, setActiveImage] = useState(null);
  const [filterImages, setFilterImages] = useState(Image);

  function onFav(foto) {
    if (foto.id === ActiveImage?.id) {
      setActiveImage({
        ...ActiveImage,
        favorite: !ActiveImage.favorite,
      });
    }

    setImages(
      Image.map((item) => {
        return {
          ...item,
          favorite: item.id === foto.id ? !foto.favorite : item.favorite,
        };
      })
    );
  }

  function onSearch(search) {
    if (!!search) {
      setFilterImages(
        Image.filter((item) => item.titulo.toLowerCase().includes(search))
      );
    }
  }

  function onTag(tag) {
    if (tag > 0) {
      setFilterImages(Image.filter((item) => item.tagId === tag));
    } else {
      setFilterImages(Image);
    }
  }

  return (
    <FundoGradient>
      <GlobalStyle />
      <AppContainer>
        <Header onSearch={(value) => onSearch(value.toLowerCase())} />
        <MainContainer>
          <GridContent>
            <Sidebar />
            <DefaultContent>
              <Galery
                onTag={(value) => onTag(value)}
                onFav={onFav}
                active={(item) => setActiveImage(item)}
                filterImages={filterImages}
                images={Image}
              />
            </DefaultContent>
          </GridContent>
        </MainContainer>
      </AppContainer>
      <ModalZomm
        close={(status) => setActiveImage(status)}
        foto={ActiveImage}
        onFav={onFav}
      />
      <FooterStyled>
        <div>
          <a href="https://github.com/srkain">
            <FaGithub size={30} color="white" />
          </a>
          <a href="https://www.linkedin.com/in/kauan-iasin-504b24253/">
            <FaLinkedinIn size={30} color="white" />
          </a>
          <a href="https://www.instagram.com/kauan_iasin/">
            <FaInstagram size={30} color="white" />
          </a>
        </div>
        <a href="https://portifolio-expert.vercel.app/">
          <h1>
            Desenolvido por <strong>Kauan Iasin.</strong>
          </h1>
        </a>
      </FooterStyled>
    </FundoGradient>
  );
}
