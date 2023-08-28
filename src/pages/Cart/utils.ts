export const calcQuantity = (cart: ICartItem[]) =>
  cart.reduce((qty, item) => qty + item.qty, 0);

export const calcTotal = (cart: ICartItem[], products: IProduct[]) => {
  return cart
    .reduce((sum, cp) => {
      const item = products.find((p) => p.id === cp.productId);
      return sum + (item?.price || 0) * cp.qty;
    }, 0)
    .toFixed(2);
};
