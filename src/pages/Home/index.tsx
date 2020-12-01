import React from 'react';
import Cart from '../../components/Cart';

import Catalog from '../../components/Catalog';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Catalog />
      <Cart />
    </Container>
  );
};

export default Home;
