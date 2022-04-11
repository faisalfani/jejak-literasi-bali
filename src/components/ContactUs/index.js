import HeadingGradient from 'components/HeadingGradient';
import colors from 'constants/colors';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Devices from 'utils/Devices';
import { paramUrl } from 'utils/paramUrl';

const ContactUsContainer = styled.div`
  margin: 6rem 0;
  display: flex;
  row-gap: 4rem;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  border: solid ${colors.primary} 1px;
  border-radius: 5px;
  background-color: white;
  padding: 8px 0;
  display: inline-block;
  width: 30%;
  color: ${colors.primary};
  transition: all 0.5s;
  :hover {
    background: linear-gradient(97.49deg, #7c2fdf 37.83%, #984ec1 132.31%);
    color: white;
  }
  ${Devices.phone} {
    width: 100%;
  }
`;

const ContactUs = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleContactUsClicked = () => {
    setIsSubmit(true);
    const waParam = {
      text,
    };
    if (name && email && text) {
      window.open(
        `https://api.whatsapp.com/send?phone=6280008008&${paramUrl(waParam)}`
      );
    }
  };
  return (
    <ContactUsContainer id='contactUs'>
      <HeadingGradient>Hubungi Kami</HeadingGradient>
      <div
        className='container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '2rem',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            columnGap: '2rem',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: isMobile ? 'column' : '',
            rowGap: '2rem',
          }}
        >
          <div class='form-group w-100'>
            <input
              type='text'
              class={`form-control ${isSubmit && !name && 'is-invalid'}`}
              id='nameInput'
              placeholder='Name'
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </div>
          <div class='form-group w-100'>
            <input
              type='email'
              class={`form-control ${isSubmit && !email && 'is-invalid'}`}
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div class='form-group w-100'>
            <input
              type='number'
              class={`form-control ${isSubmit && !phone && 'is-invalid'}`}
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              onChange={({ target }) => setPhone(target.value)}
              placeholder='Phone'
            />
          </div>
        </div>
        <div class='form-group w-100'>
          <textarea
            class={`form-control ${isSubmit && !text && 'is-invalid'}`}
            id='exampleFormControlTextarea1'
            rows='4'
            placeholder='Pesan'
            value={text}
            onChange={({ target }) => setText(target.value)}
          ></textarea>
        </div>
        <SubmitButton
          type='submit'
          class='btn btn-primary'
          onClick={handleContactUsClicked}
        >
          Submit
        </SubmitButton>
      </div>
    </ContactUsContainer>
  );
};

export default ContactUs;
