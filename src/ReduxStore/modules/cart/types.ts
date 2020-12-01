interface IProduct {
  id: number;
  title: string;
  price: number;
}

interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
