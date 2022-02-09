import { createSelector } from "reselect";

//Input selector
const selectCart = (state) => state.cart; //Take all state of our reducer and brings a slice of that

//Output selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accuQuantity, carItem) => accuQuantity + carItem.quantity,
            0
        )
);

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) =>
        cartItems.reduce(
            (accuQuantity, carItem) => accuQuantity + carItem.quantity * carItem.price,
            0
        )
);
