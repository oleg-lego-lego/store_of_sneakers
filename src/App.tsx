import React, {ChangeEvent, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import axios from "axios"
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {AppContext} from "./context/AppContext";

export type ItemsType = {
    id: string
    imageURL: string
    title: string
    price: number
}

const arr = [
    {
        "id": "1",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 12999,
        "imageURL": "img/sneakers/1.jpg"
    },
    {
        "id": "2",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Air Max 270",
        "price": 12999,
        "imageURL": "img/sneakers/2.jpg"
    },
    {
        "id": "3",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 8499,
        "imageURL": "img/sneakers/3.jpg"
    },
    {
        "id": "4",
        "favorites": false,
        "title": "Кроссовки Puma X Aka Boku Future Rider",
        "price": 8999,
        "imageURL": "img/sneakers/4.jpg"
    },
    {
        "id": "5",
        "favorites": false,
        "title": "Мужские Кроссовки Under Armour Curry 8",
        "price": 15199,
        "imageURL": "img/sneakers/5.jpg"
    },
    {
        "id": "6",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Kyrie 7",
        "price": 11299,
        "imageURL": "img/sneakers/6.jpg"
    },
    {
        "id": "7",
        "favorites": false,
        "title": "Мужские Кроссовки Jordan Air Jordan 11",
        "price": 10799,
        "imageURL": "img/sneakers/7.jpg"
    },
    {
        "id": "8",
        "favorites": false,
        "title": "Мужские Кроссовки Nike LeBron XVIII",
        "price": 16499,
        "imageURL": "img/sneakers/8.jpg"
    },
    {
        "id": "9",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Lebron XVIII Low",
        "price": 13999,
        "imageURL": "img/sneakers/9.jpg"
    },
    {
        "id": "10",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 8499,
        "imageURL": "img/sneakers/10.jpg"
    },
    {
        "id": "11",
        "favorites": false,
        "title": "Кроссовки Puma X Aka Boku Future Rider",
        "price": 8999,
        "imageURL": "img/sneakers/11.jpg"
    },
    {
        "id": "12",
        "favorites": false,
        "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
        "price": 11299,
        "imageURL": "img/sneakers/12.jpg"
    },
]


function App() {
    const [items, setItems] = useState<ItemsType[]>([])
    const [cartItems, setCartItems] = useState<ItemsType[]>([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)
    const [favorites, setFavorites] = useState<ItemsType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart')
            const favoritesResponse = await axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/favorites')
            const itemsResponse = await axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/items')

            setIsLoading(false)

            setCartItems(cartResponse.data)
            setFavorites(favoritesResponse.data)
            setItems(itemsResponse.data)
        }

        fetchData()
        //fetchData()
    }, [])

    const onAddToCart = (obj: ItemsType) => {
        try {
            if (cartItems.find(el => Number(el.id) === Number(obj.id))) {
                axios.delete(`https://6328ab4ecc4c264fdedfb384.mockapi.io/cart/${obj.id}`)
                    .then(() => {
                    })
                setCartItems(prev => prev.filter(el => Number(el.id) !== Number(obj.id)))
            } else {
                axios.post('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart', obj)
                    .then(() => {
                    })
                setCartItems(prev => [...prev, obj])
            }
        } catch (e) {

        }
    }

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    const onRemoveItem = (id: string) => {
        axios.delete(`https://6328ab4ecc4c264fdedfb384.mockapi.io/cart/${id}`)
            .then(() => {
            })
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const onAddToFavorite = async (obj: ItemsType) => {
        try {
            if (favorites.find(el => el.id === obj.id)) {
                axios.delete(`https://6328ab4ecc4c264fdedfb384.mockapi.io/favorites/${obj.id}`)
                    .then(() => {
                    })
                //setFavorites(prev => prev.filter(item => item.id !== obj.id))
            } else {
                const {data} = await axios.post(`https://6328ab4ecc4c264fdedfb384.mockapi.io/favorites/`, obj)
                setFavorites((prev) => [...prev, data])
            }
        } catch (e) {
            alert('Не удалось добавить в закладки')
        }
    }

    return (
        <AppContext.Provider value={{items, cartItems, favorites}}>
            <div className="wrapper clear">
                {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
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

                    <Route path={'/favorites'} element={
                        <Favorites
                            items={favorites}
                            onFavorite={onAddToFavorite}
                        />}/>

                </Routes>


                {/*<div className="content">*/}
                {/*    <div className={"titleSearch"}>*/}
                {/*        <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>*/}
                {/*        <div className="searchBlock">*/}
                {/*            <img src="./img/search.svg" alt="search"/>*/}
                {/*            {searchValue && <img onClick={() => setSearchValue('')} className={"removeBtn clear"} src="/img/btn_remove.svg" alt="btn_remove"/>}*/}
                {/*            <input onChange={onChangeSearchInput} value={searchValue} placeholder={'Поиск...'}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className="sneakers">*/}
                {/*        {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))*/}
                {/*            .map((el,index) =>*/}
                {/*            <Card*/}
                {/*                id={el.id}*/}
                {/*                key={index} title={el.title}*/}
                {/*                price={el.price} imageURL={el.imageURL}*/}
                {/*                favorites={el.favorites}*/}
                {/*                onPlus={(obj) => onAddToCart(el)}*/}
                {/*                onFavorite={(obj) => onAddToFavorite(el)}*/}
                {/*            />)}*/}

                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </AppContext.Provider>
    );
}

export default App;
