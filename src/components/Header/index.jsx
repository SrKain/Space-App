import styled from "styled-components";
import TextInput from "../TextInput";

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 13.25rem;
  }
`;

const Header = () => {
    return (
      <HeaderStyled>
        <img src="/assets/imagens/logo.png" alt="Logo do Space App"/>
        <TextInput/>
      </HeaderStyled>
    );
  };

export default Header;
