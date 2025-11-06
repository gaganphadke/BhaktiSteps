"use client";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #eac8aa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 50px 20px;
`;

const Content = styled.div`
  background-color: white;
  max-width: 900px;
  width: 100%;
  border-radius: 8px;
  padding: 60px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-family: "Georgia", serif;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 42px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 56px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 40px;
`;

const Subsection = styled.div`
  background-color: #f9f9f9;
  border-left: 3px solid #e2c67a;
  padding: 30px 40px;
  margin-bottom: 40px;
`;

const SubTitle = styled.h3`
  font-size: 36px;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 10px;
`;

const SubHeader = styled.p`
  font-style: italic;
  font-weight: 600;
  color: #555;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 10px;
`;

const QualificationText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin-top: 10px;

  span {
    font-weight: bold;
    color: #b52764;
  }
`;

const TwoColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  > div {
    flex: 1 1 400px;
  }
`;

export default function GBCReferences() {
  return (
    <Container>
      <Content>
        <Title>ISKCON Law Book Chapter 15</Title>

        <SectionTitle>15.2 Guidelines:</SectionTitle>

        <Subsection>
          <SubTitle>15.2.1</SubTitle>
          <SubHeader>
            Encouraging the Congregation: <i>The Siksa Ceremony</i>
          </SubHeader>
          <Text>
            1. ISKCON Leaders and GBC Members (with the exception of ISKCON initiating spiritual masters who cannot perform this ceremony except when it is for an approved guru-asraya (sheltered) or approved aspirant disciple) shall, within their area of authority, be permitted to publicly bestow acceptance and recognition to members of its congregation for devotional achievements and progress in devotional service.
<br></br>
            2. Local temples and congregational preaching units should implement programs for aiding the congregational members to enhance their standing, and for training them to qualify for the higher levels. This should include following a recommended study course for the different levels (Adult Education and Congregational Preaching Monitors shall recommend.)
<br></br>
            3. Standard certificates shall be issued worldwide. (The proforma certificates shall be created and circulated by the Corresponding Secretary in consultation with the Congregational Preaching Monitor.)
<br></br>
            4. The recognition shall be granted in any of the following categories (giving these is optional, as also the bestowal ceremony according to local time, place and circumstance)
          </Text>
        {/* </Subsection> */}

        <TwoColumn>
          <div>
            <SubTitle>15.2.1.1</SubTitle>
            <SubHeader>
              Accepting the Sacred Order of Lord Caitanya – (Sat-sangi, or
              Sraddhavan)
            </SubHeader>
            <QualificationText>
              <span>Qualifications:</span> Accepting the instructions or sacred
              order of Lord Caitanya to chant Hare Krsna (minimum one round per
              day), to worship Lord Krsna (to visit the temple or otherwise
              cultivate devotional service as far as possible), and to read the
              teachings of Lord Krsna (Bhagavad-gita, Srimad-Bhagavatam, and
              other books of Srila Prabhupada). [Note: Since this broadly
              correlates with sraddha or sat-sanga stages of devotion, they can
              generally be called as “Sat-sangi” or “Sraddhavan”.]
            </QualificationText>
          </div>

          <div>
            <SubTitle>15.2.1.2</SubTitle>
            <SubHeader>Krsna (or Gauranga) Sevaka</SubHeader>
            <QualificationText>
              <span>Qualifications:</span> Chanting a minimum of four rounds of
              Hare Krsna japa per day, refraining from meat-eating (including
              fish & egg), believing in Lord Krsna as the Supreme Personality of
              Godhead, possessing a devotional attitude, and avoiding of grossly
              immoral acts (drugs, prostitution, etc.)
            </QualificationText>
          </div>
        </TwoColumn>
        </Subsection>
      </Content>
    </Container>
  );
}
