/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';

import { ActionTypes, ICartState, ICustomAction } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedItemsById: [],
};

const cart: Reducer<ICartState, ICustomAction> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCartSuccess: {
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
      case ActionTypes.addProductToCartFailure: {
        const { productId } = action.payload;

        if (productId) {
          draft.failedItemsById.push(productId);
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
