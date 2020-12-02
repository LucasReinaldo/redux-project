import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../ReduxStore';
import { addProductToCartRequest } from '../../ReduxStore/modules/cart/actions';
import { IProduct } from '../../ReduxStore/modules/cart/types';

import { Container, Item } from './styles';

interface ICatalogItemProps {
  product: IProduct;
}

const CatologItem = ({ product }: ICatalogItemProps) => {
  const dispatch = useDispatch();

  const outOfStock = useSelector<IState, boolean>((state) =>
    state.cart.failedItemsById.includes(product.id),
  );

  const handleAddToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
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
          {outOfStock && <span style={{ color: 'red' }}>Out of stock</span>}
        </div>
      </Item>
    </Container>
  );
};

export default CatologItem;
