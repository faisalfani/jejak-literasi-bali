import Text from 'components/Text';
import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const JoinUsContainer = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(https://jejakliterasibali.org/storage/image/closing.jpg);
  background-size: 100% 200px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
`;

const JoinUsButton = styled.button`
  border: solid ${colors.primary} 1px;
  border-radius: 5px;
  background-color: white;
  padding: 4px 18px;
  display: inline-block;
  width: fit-content;
  color: ${colors.primary};
  transition: all 0.5s;
  :hover {
    background: linear-gradient(97.49deg, #7c2fdf 37.83%, #984ec1 132.31%);
    color: white;
  }
`;

const JoinUs = () => {
  return (
    <JoinUsContainer>
      <Text>Mari bergabung menjadi bagian dari</Text>
      <Text size='1.2rem' weight='600' color={colors.accent}>
        Komunitas Literasi Bali
      </Text>
      <JoinUsButton>DAFTAR </JoinUsButton>
    </JoinUsContainer>
  );
};

export default JoinUs;
