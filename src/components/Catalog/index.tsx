import React, { useEffect, useState } from 'react';
import { IProduct } from '../../ReduxStore/modules/cart/types';
import api from '../../services/api';
import CatologItem from '../CatologItem';
// import { useSelector } from 'react-redux';

import { Container } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  // const store = useSelector((state) => state);

  useEffect(() => {
    api.get('products').then((response) => setCatalog(response.data));
  }, []);

  return (
    <Container>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatologItem key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Catalog;
