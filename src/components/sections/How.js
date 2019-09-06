import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const How = () => (
  <StaticQuery
    query={graphql`
      query {
        art_blanket: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "blanket" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_wipes: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "web_wipes" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="how" accent>
        <StyledContainer>
          <div>
            <h1>How</h1>
          </div>
          <HalfWidthContainer>
            <AlignedRightText>
              At this starting point, The Care Project is being solely funded by Georgie and her 
              family; with no public or private funding. For this reason, our initial aim to deliver 
              care packages (customised for men and women), in the inner area of the city of Limerick, 
              is around 4-6 times a year. 

              Naturally, if public and/or private funding and/or donations begin, the number of care packages, 
              as well as the number of deliveries will also increase in time. 
            </AlignedRightText>
          </HalfWidthContainer>
          <Wipes>
            <Img fluid={data.art_wipes.childImageSharp.fluid} />
          </Wipes>
          <Blanket>
            <Img fluid={data.art_blanket.childImageSharp.fluid} />
          </Blanket>
        </StyledContainer>
      </Section>
    )}
  />
);


const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  color: ${props => props.theme.color.white.regular};

  @media (max-width: ${props => props.theme.screen.md}) {
    align-items: center;
  }
`;

const HalfWidthContainer = styled.div`
  width: 50%;

  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
`;

const Text = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: ${props => props.theme.color.white.regular};
`;

const AlignedRightText = styled(Text)`
  text-align: right;

  @media (max-width: ${props => props.theme.screen.sm}) {
    text-align: inherit;
  }
`;

const Art = styled.figure`
  width: 200px;
  position: absolute;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const Wipes = styled(Art)`
  top: 25%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 200px;
  }
`

const Blanket = styled(Art)`
  top: 25%;
  left: 0;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 50%;
    left: 5%;
    width: 200px;
  }
`

export default How;
