import styled from "styled-components";
import tags from "/src/components/Galery/Tags/tags.json";

const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 52px;
  margin-left: 0;
`;
const Title = styled.h4`
  font-size: 2rem;
  margin: 0;
  color: #d9d9d9;
  font-weight: 400;
`;

const ButtonTag = styled.button`
  background-color: rgba(217, 217, 217, 0.3);
  color: white;
  border-radius: 0.5rem;
  border: 1.5px solid #7b78e5;
`;

export default function Tags() {
  return (
    <TagContainer>
      <Title>Busque por tags:</Title>
      {tags.map((item) => (
        <ButtonTag  key={item.id}>
          {item.titulo}
        </ButtonTag>
      ))}
    </TagContainer>
  );
}
