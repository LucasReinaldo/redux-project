import { AxiosResponse } from 'axios';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { IState } from '../..';

import { ActionTypes } from './types';

import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './actions';

import api from '../../../services/api';

interface IStockResponse {
  id: number;
  quantity: number;
}

type CheckProductInStockRequest = ReturnType<typeof addProductToCartRequest>;

function* checkProductInStock({ payload }: CheckProductInStockRequest) {
  const { product } = payload;

  const currentQuantity = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductInStock),
]);
