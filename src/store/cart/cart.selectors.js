import { createSelector } from "reselect";

const selectCartState = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartState],
  (cart) => cart.isCartOpen
);

export const selectCartItemsSlice = createSelector(
  [selectCartState],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
  [selectCartItemsSlice],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItemsSlice],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);
