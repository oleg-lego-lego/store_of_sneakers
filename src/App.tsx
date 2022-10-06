import React, {ChangeEvent, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer/Drawer";
import axios from "axios"
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {AppContext} from "./context/AppContext";
import {Orders} from "./pages/Orders";

export type ItemsType = {
    id: string
    imageURL: string
    title: string
    price: number
    parentId: number
}

function App() {
    const [items, setItems] = useState<ItemsType[]>([])
    const [cartItems, setCartItems] = useState<ItemsType[]>([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [favorites, setFavorites] = useState<ItemsType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart'),
                    axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/favorites'),
                    axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/items'),
                ]);

                setIsLoading(false)

                setCartItems(cartResponse.data)
                setFavorites(favoritesResponse.data)
                setItems(itemsResponse.data)

            } catch (e) {
                alert('Ошибка при запросе данных :(')
            }
        }


        fetchData()
    }, [])


    const onAddToCart = async (obj: ItemsType) => {
        const findItem = cartItems.find(el => el.parentId === Number(obj.id))
        try {
            if (findItem) {
                setCartItems(prev => prev.filter(el => el.parentId !== Number(obj.id)))
                await axios.delete(`https://6328ab4ecc4c264fdedfb384.mockapi.io/cart/${findItem.id}`)
            } else {
                setCartItems(prev => [...prev, obj])
                const {data} = await axios.post('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart', obj)
                setCartItems(prev => prev.map(el => (el.parentId === data.parentId) ? {...el, id: data.id} : el))
            }
        } catch (e) {
            alert('Ошика при добавлении в корзину :(')
        }
    }

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onRemoveItem = async (id: string) => {
        try {
            setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
            await axios.delete(`https://6328ab4ecc4c264fdedfb384.mockapi.io/cart/${id}`)
            //setCartItems(prev => prev.filter(item => item.parentId !== Number(id)))
        } catch (e) {
            alert('Ошика при удалении из корзины :(')
        }
    }

    const onAddToFavorite = async (obj: ItemsType) => {
        const findItem = favorites.find(el => el.parentId === Number(obj.id))
        try {
            if (findItem) {
                setFavorites(prev => prev.filter(item => item.parentId !== Number(obj.id)))
                await axios.delete(`https://6328ab4ecc4c264fdedfb384.mockapi.io/favorites/${obj.id}`)
            } else {
                setFavorites((prev) => [...prev, obj])
                const {data} = await axios.post(`https://6328ab4ecc4c264fdedfb384.mockapi.io/favorites/`, obj)
                setFavorites(prev => prev.map(el => (el.parentId === data.parentId) ? {...el, id: data.id} : el))
            }
        } catch (e) {
            alert('Не удалось добавить в закладки')
        }
    }

    const isItemAdded = (id: string) => {
        return cartItems.some(el => el.parentId === Number(id))
    }

    return (
        <AppContext.Provider value={
            {items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems, onAddToCart}}>

            <div className={"wrapper clear"}>
                {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}
                                       opened={cartOpened}/>}

                <Header onClickKart={() => setCartOpened(true)}/>

                <Routes>

                    <Route path={"/"} element={
                        <Home
                            items={items} searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}
                            cartItems={cartItems}
                            isLoading={isLoading}
                        />
                    }/>

                    <Route path={'/favorites'} element={<Favorites/>}/>
                    <Route path={'/orders'} element={<Orders/>}/>

                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
