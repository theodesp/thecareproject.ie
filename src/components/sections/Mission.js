import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Mission = () => (
  <StaticQuery
    query={graphql`
      query {
        art_tooth: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "toothpaste" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_socks: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "socks" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="mission">
        <Container>
          <Grid>
            <div>
              <h1>Our Mission</h1>
              <p>
                The Care Project's present mission is to provide free, basic need care products, regularly 
                to people who experience sheltered, unsheltered, episodic or chronic 
                homelessness so that they have the opportunity to slowly start moving 
                beyond mere survival to well-being. At the moment, we are operating in the inner city
                of Limerick.
              </p>
            </div>
            <Art style={{maxWidth: 150}}>
              <Img fluid={data.art_tooth.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_socks.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Why?</h2>
              <p>
                Even though upsetting, it is a fact that many homeless individuals live on the streets 
                full time, or, with a 9-9 accommodation (if they manage to make the funds for it).
                This leaves homeless individuals with 12 or more hours, battling weather, being uncomfortable, 
                begging, being hungry, in verbal and physical danger, and even face medical conditions in the rough.
                These individuals need assistance, and some form of basic care provision for their everyday reality. 
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default Mission;
