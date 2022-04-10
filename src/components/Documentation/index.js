import HeadingGradient from 'components/HeadingGradient';
import colors from 'constants/colors';
import React from 'react';
import { LightgalleryItem } from 'react-lightgallery';
import styled from 'styled-components';
import Devices from 'utils/Devices';
import DocumentationCarousel from './DocumentationCarousel';
import { docGroup } from './docData';

const DocumentationContainer = styled.div`
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 4rem;
  position: relative;
  overflow: hidden;
  ::after {
    content: '';
    width: 300px;
    height: 300px;
    background-color: #ffffff50;
    position: absolute;
    right: -50px;
    top: -50px;
    border-radius: 50%;
    z-index: 0;
    filter: blur(10px);
    ${Devices.phone} {
      width: 200px;
      height: 200px;
    }
  }
  ::before {
    content: '';
    width: 300px;
    height: 300px;
    background-color: #ffffff50;
    position: absolute;
    left: -50px;
    bottom: -50px;
    border-radius: 50%;
    z-index: 0;
    filter: blur(10px);
    ${Devices.phone} {
      width: 200px;
      height: 200px;
    }
  }
`;

const PhotoItem = ({ image, thumb, group }) => (
  <div style={{ display: 'none' }}>
    <LightgalleryItem group={group} src={image} thumb={thumb}>
      <img src={image} style={{ width: '100%' }} />
    </LightgalleryItem>
  </div>
);

const Documentation = () => {
  return (
    <DocumentationContainer id='documentation'>
      <HeadingGradient type='monochrome'>Dokumentasi</HeadingGradient>
      <div className='container'>
        <DocumentationCarousel />
      </div>

      <div>
        {Object.keys(docGroup).map((data) =>
          docGroup[data].map((p, idx) => {
            return <PhotoItem group={data} image={p} index={idx} />;
          })
        )}
      </div>
    </DocumentationContainer>
  );
};

export default Documentation;
