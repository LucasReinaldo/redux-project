import { all, takeLatest } from 'redux-saga/effects';

function checkProductInStock() {
  console.log('checkProductInStock');
}

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductInStock)]);
