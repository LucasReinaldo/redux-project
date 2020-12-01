import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../ReduxStore/modules/cart/actions';
import { IProduct } from '../../ReduxStore/modules/cart/types';

import { Container, Item } from './styles';

interface ICatalogItemProps {
  product: IProduct;
}

const CatologItem = ({ product }: ICatalogItemProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <Container>
      <Item key={product.id}>
        <span>{product.title}</span>
        <span>R${product.price}</span>
        <div>
          <button onClick={handleAddToCart} type="button">
            Buy
          </button>
        </div>
      </Item>
    </Container>
  );
};

export default CatologItem;
