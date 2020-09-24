import React from 'react';
import styled from 'styled-components';
import { Font } from 'utils';
import { MainSection, H1, I, Body, } from 'components/a-commons';

const Headline = styled(H1)`
    grid-column: 5/9;
    margin-bottom: 12vw;
    @media (max-width: 991px)
    {
      grid-column: 3/9;
      font-size: 10vw;
    }
`;

const Hollow = styled.span`
    color: transparent;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #f2efe8;
`;

const MailContainer = styled.div`
    grid-column: 5/9;
    grid-row: 2/3;
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    @media (max-width: 991px){
    grid-column: 3/9;
  };
`;
const Mail = styled(Body)`
  grid-column: 2/3;
  grid-row: 1/2;
  padding-right: 2vw;
  justify-self: start;
  text-decoration: none;
  @media (max-width: 991px){
    font: normal 400 2vw / 1.5em ${Font('title')};
  };
  @media (max-width: 767px){
    grid-column: 1/3;
    font-size: 2.7vw;
  }; 
`;

const TextContainer = styled.div`
    grid-column: 5/9;
    display:grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    //margin-bottom: 24vw;
    @media (max-width: 991px){
    grid-column: 3/9;
    };
    
`;
const Text = styled(Body)`
    grid-column: 2/3;
    grid-row: 1/2;
    padding-right: 2vw;
    justify-self: start;
    text-decoration: none;
    font: normal 400 1vw / 1.5em ${Font('title')};
    @media (max-width: 991px){
      font: normal 400 2vw / 1.5em ${Font('title')};
    };
    @media (max-width: 767px){
      grid-column: 1/3;
      font-size: 2.7vw;
    };    
`;

export const ContactMain = () => {
  return (
    <MainSection>
      <Headline>
        LET'S WORK <br />
        <Hollow>TOGETHER</Hollow>
      </Headline>
      <MailContainer>
        <Mail as='a' href="mailto:mgunsd@gmail.com ?subject=Let's%20Work%20Together">
          mgunsd@gmail.com <I>􀄯</I>
        </Mail>
      </MailContainer>
      <TextContainer>
        <Text >
          Reach out at the email above and share some basic info about your project, budget, and timeline. I'll get back to you as soon as possible.
          <br />
          <br />
          Cheers,
          <br />
          Erkam
        </Text>
      </TextContainer>
    </MainSection>
  )
};