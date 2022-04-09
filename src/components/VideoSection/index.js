import HeadingGradient from 'components/HeadingGradient';
import colors from 'constants/colors';
import React from 'react';
import styled from 'styled-components';
import Devices from 'utils/Devices';

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const VideoBox = styled.div`
  height: 40vh;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ::after {
    content: '';
    width: 300px;
    height: 300px;
    background-color: ${colors.primary}30;
    position: absolute;
    right: -50px;
    top: -50px;
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    ${Devices.phone} {
      width: 200px;
      height: 200px;
      right: -200px;
      top: 0;
    }
  }
  ::before {
    content: '';
    width: 200px;
    height: 200px;
    background-color: ${colors.accent}30;
    position: absolute;
    left: -50px;
    bottom: -50px;
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    ${Devices.phone} {
      width: 200px;
      height: 200px;
      left: -200px;
      bottom: 0;
    }
  }
`;

const StyledIframe = styled.iframe`
  border-radius: 15px;
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
`;

const VideoSection = () => {
  return (
    <VideoContainer>
      <HeadingGradient>Lebih Dekat dengan Kami</HeadingGradient>
      <VideoBox>
        <StyledIframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/LGNz-DGPLQA'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
      </VideoBox>
    </VideoContainer>
  );
};

export default VideoSection;
