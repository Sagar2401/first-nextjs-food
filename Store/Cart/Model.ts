export interface Product {
  name: string;
  description: string;
  img: string;
  price: number;
  quantity: number;
  id: number;
}

export interface CartProducts {
  cartproducts: Product[];
}
