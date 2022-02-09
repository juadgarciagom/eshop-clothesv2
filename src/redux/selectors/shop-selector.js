import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

//Transform our collections into an array from shop data
export const selectCollectionsForPreview = createSelector(
    [selectShopItems],
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectCategory = categoryUrlParam => 
    createSelector(
        [selectShopItems],
        collections => collections[categoryUrlParam]
        
    )