import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Mission from '@sections/Mission';
import How from '@sections/How';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Mission />
    <How />
    <Team />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
