import Text from 'components/Text';
import colors from 'constants/colors';
import React from 'react';
import { AboutUsDescContainer, Founder, TextContainer } from './styled';
import FounderImage from 'assets/img/founder.jpeg';
import HeadingGradient from 'components/HeadingGradient';
import { useMediaQuery } from 'react-responsive';

const AboutUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <div
      className='container'
      style={{
        height: !isMobile && '80vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: isMobile && '3rem',
        rowGap: isMobile && '4rem',
        marginBottom: isMobile && '3rem',
      }}
    >
      <HeadingGradient>Tentang Kami</HeadingGradient>
      <AboutUsDescContainer>
        <TextContainer>
          <Text
            size={isMobile ? '0.9rem' : '1.1rem'}
            color='black'
            weight='bolder'
          >
            <Text
              size='0.8rem'
              weight='600'
              spacing='0.075rem'
              color={colors.primary}
            >
              TENTANG KAMI
            </Text>
            <Text color={colors.primary} display='inline'>
              Dibentuk pada 2019 oleh Andika Wirateja,Jejak Literasi Bali &nbsp;
            </Text>
            adalah komunitas non-formal beranggotakan pemuda-pemudi yang peduli
            pada pendidikan khususnya budaya literasi (baca dan tulis) pada
            anak-anak di wilayah pelosok di Bali.
          </Text>
          <Text size='0.75rem' weight='400'>
            &emsp; Berbeda dengan komunitas berbasis pendidikan lainnya, dalam
            komunitas ini kegiatan volunteering mengajar diisi juga dengan
            membuat pojok baca/ bedah perpustakaan. Program ini dilakukan agar
            anak-anak dapat nyaman membaca dan menulis, sehingga kebiasaan
            tersebut dapat terbentuk. Selain itu, kegiatan komunitas juga
            didukung dengan program membaca sambil bermain seperti mendengarkan
            cerita dongeng, menulis bintang harapan, dan lain-lain. Hal tersebut
            dilakukan agar budaya literasi dapat tumbuh sejak usia dini.
          </Text>
          <Text size='1rem' weight='300'></Text>
        </TextContainer>
        <Founder src={FounderImage} alt='founderImage' />
      </AboutUsDescContainer>
    </div>
  );
};

export default AboutUs;
