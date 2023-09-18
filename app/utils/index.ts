import { Product } from "@/Store/Cart/Model";

export const isServer = typeof window !== "undefined";

export function getQut(productId: number, cartproducts: Product[]) {
  const data = cartproducts?.find((item) => item?.id === productId);
  return data?.quantity;
}

export function isProductInCart(productId: number, cartproducts: Product[]) {
  return cartproducts?.some((item) => item?.id === productId);
}

export const isTimeInRange = (startTime: number, endTime: number) => {
  const now = new Date(); // Get the current date and time
  const currentH = now.getHours();
  const istrue = currentH >= startTime && currentH <= 12 + endTime;
  return istrue;
};
