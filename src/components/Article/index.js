import HeadingGradient from 'components/HeadingGradient';
import React from 'react';
import styled from 'styled-components';
import Text from 'components/Text';
import colors from 'constants/colors';
import article from './article';

const ArticleContainer = styled.div`
  height: 80vh;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
`;

const ArticleBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  img {
    border-radius: 15px;
    width: 100%;
    object-fit: cover;
    max-height: 200px;
    box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
  }
`;

const ReadMoreButton = styled.button`
  border: solid ${colors.primary} 1px;
  border-radius: 5px;
  background-color: white;
  padding: 4px 10px;
  display: inline-block;
  width: fit-content;
  color: ${colors.primary};
  transition: all 0.5s;
  :hover {
    background: linear-gradient(97.49deg, #7c2fdf 37.83%, #984ec1 132.31%);
    color: white;
  }
`;

const Article = () => {
  return (
    <ArticleContainer>
      <HeadingGradient>Artikel Terbaru</HeadingGradient>
      <Container className='container'>
        {article.map((data) => (
          <ArticleBox>
            <Text
              color='#00000080'
              size='0.9rem'
              style={{ marginBottom: '-8px' }}
            >
              {data.date}
            </Text>
            <img src={data.image} />
            <Text size='1rem' color={colors.primary} weight='700'>
              {data.title}
            </Text>
            <Text size='0.9rem'>
              {data.description.length > 120
                ? `${data.description.slice(0, 120)}...`
                : data.description}
            </Text>
            <ReadMoreButton>Read More</ReadMoreButton>
          </ArticleBox>
        ))}
      </Container>
    </ArticleContainer>
  );
};

export default Article;
