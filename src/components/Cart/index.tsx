import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../ReduxStore';
import { ICartItem } from '../../ReduxStore/modules/cart/types';

import { Container } from './styles';

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{quantity}</td>
              <td>{(product.price * quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Cart;
