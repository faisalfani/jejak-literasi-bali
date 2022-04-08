import HeadingGradient from 'components/HeadingGradient';
import Text from 'components/Text';
import colors from 'constants/colors';
import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter } from 'react-feather';
import styled from 'styled-components';

const OurTeamContainer = styled.div`
  padding-top: 4rem;
  row-gap: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Image = styled.div`
  flex: 1 20%; /* explanation below */
  height: 400px;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s;
  position: relative;
  ::after {
    content: '';
    transition: all 0.5s;
  }
  :hover {
    ::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 200px rgba(0, 0, 0, 0.4) inset;
    }
  }
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  padding: 12px 1rem;
  display: flex;
  flex-direction: column;
  width: 95%;
  z-index: 100;
  background-color: white;
  transition: all 0.4s;
  opacity: ${(props) => (props.display ? '1' : '0')};
`;

const SocialMedia = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 12px 8px;
  display: flex;
  width: fit-content;
  background: linear-gradient(98.87deg, #7c2fdf 30%, ${colors.accent} 100%);
  z-index: 100;
  background-color: white;
  transition: all 0.4s;
  opacity: ${(props) => (props.display ? '1' : '0')};
  border-radius: 3px;
  column-gap: 8px;
`;

const OurTeam = () => {
  const randomImageId = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 40)
  );

  const [isHover, setIsHover] = useState();

  return (
    <OurTeamContainer>
      <HeadingGradient>Team Kami</HeadingGradient>
      <ImageGallery>
        {randomImageId.map((data, i) => (
          <Image
            image={`https://picsum.photos/200/300`}
            onMouseEnter={() => setIsHover(i)}
            onMouseLeave={() => setIsHover(null)}
          >
            <SocialMedia display={i === isHover}>
              <Facebook size='0.9rem' color='white' />
              <Twitter size='0.9rem' color='white' />
              <Linkedin size='0.9rem' color='white' />
            </SocialMedia>
            <ImagePlaceholder display={i === isHover}>
              <Text color={colors.primary} weight='600'>
                its name
              </Text>
              <Text size='0.9rem'>jabatan</Text>
            </ImagePlaceholder>
          </Image>
        ))}
      </ImageGallery>
    </OurTeamContainer>
  );
};

export default OurTeam;
