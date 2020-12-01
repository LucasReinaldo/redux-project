import React from 'react';

import Catalog from '../../components/Catalog';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Catalog />
    </Container>
  );
};

export default Home;
