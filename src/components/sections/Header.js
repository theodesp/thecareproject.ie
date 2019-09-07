import React from 'react';
import styled from 'styled-components';
import logo from '@images/art/logo.png';

import { Container } from '@components/global';

const Header = () => (
  <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <img src={logo} alt="logo" />
            </Art>
          </Grid>
        </Container>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.white};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 100%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 80%;
    }
  }
`;

const Grid = styled.div`
  display: flex;
  width: 50%;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.screen.md}) {
    > ${Art} {
      order: 2;
    }
  }
`;

export default Header;
