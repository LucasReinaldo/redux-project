import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../ReduxStore/modules/cart/actions';
import { IProduct } from '../../ReduxStore/modules/cart/types';
import api from '../../services/api';
// import { useSelector } from 'react-redux';

import { Container, Item } from './styles';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  // const store = useSelector((state) => state);

  useEffect(() => {
    api.get('products').then((response) => setCatalog(response.data));
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addProductToCart(product));
    },
    [dispatch],
  );

  return (
    <Container>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <Item key={product.id}>
          <span>{product.title}</span>
          <span>R${product.price}</span>
          <div>
            <button onClick={() => handleAddToCart(product)} type="button">
              Buy
            </button>
          </div>
        </Item>
      ))}
    </Container>
  );
};

export default Catalog;
