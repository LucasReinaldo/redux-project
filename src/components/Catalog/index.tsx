import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

const Catalog: React.FC = () => {
  const store = useSelector((state) => state);

  console.log(store);

  return (
    <Container>
      <h1>Catalog</h1>
    </Container>
  );
};

export default Catalog;
