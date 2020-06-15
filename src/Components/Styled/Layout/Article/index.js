
import styled from 'styled-components';

const Article = styled.article`
  grid-area: Article;
  display: grid;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2fr;
  grid-template-areas: "Header Header Header" "Section Section Section";
`;

export default Article;
