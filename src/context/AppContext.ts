import React from 'react';
import {ItemsType} from "../App";


export type ContextTypes = {
    items: ItemsType[],
    favorites: ItemsType[],
    cartItems: ItemsType[],
    isItemAdded: (id: string) => boolean
    // onAddToFavorite: (obj: ItemsType) => void
    // setCartOpened: (cartOpened:boolean) => void
    // setCartItems: ([]:ItemsType[]) => void
    // onAddToCart: (obj: ItemsType) => void
}

export const AppContext = React.createContext<Partial<ContextTypes>>({})