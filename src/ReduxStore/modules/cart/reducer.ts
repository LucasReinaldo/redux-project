/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';

import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_CART_SUCCESS': {
        const { product } = action.payload;

        const productInCart = draft.items.findIndex(
          (item) => item.product.id === product.id,
        );

        if (productInCart >= 0) {
          draft.items[productInCart].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
