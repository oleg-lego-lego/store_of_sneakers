import React, {ChangeEvent, useEffect, useState} from 'react';
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import axios from "axios"

export type ItemsType = {
    imageURL: string
    title: string
    price: number
}

const arr = [
    {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imageURL": "img/sneakers/1.jpg"},
    {"title": "Мужские Кроссовки Nike Air Max 270", "price": 12999, "imageURL": "img/sneakers/2.jpg"},
    {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageURL": "img/sneakers/3.jpg"},
    {"title": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageURL": "img/sneakers/4.jpg"},
    {"title": "Мужские Кроссовки Under Armour Curry 8", "price": 15199, "imageURL": "img/sneakers/5.jpg"},
    {"title": "Мужские Кроссовки Nike Kyrie 7", "price": 11299, "imageURL": "img/sneakers/6.jpg"},
    {"title": "Мужские Кроссовки Jordan Air Jordan 11", "price": 10799, "imageURL": "img/sneakers/7.jpg"},
    {"title": "Мужские Кроссовки Nike LeBron XVIII", "price": 16499, "imageURL": "img/sneakers/8.jpg"},
    {"title": "Мужские Кроссовки Nike Lebron XVIII Low", "price": 13999, "imageURL": "img/sneakers/9.jpg"},
    {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageURL": "img/sneakers/10.jpg"},
    {"title": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageURL": "img/sneakers/11.jpg"},
    {"title": "Мужские Кроссовки Nike Kyrie Flytrap IV", "price": 11299, "imageURL": "img/sneakers/12.jpg"},
]

function App() {
    const [items, setItems] = useState<ItemsType[]>([])
    const [cartItems, setCartItems] = useState<ItemsType[]>([])
    const [searchValue, setSearchValue] = useState('')

    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        // fetch('https://6328ab4ecc4c264fdedfb384.mockapi.io/items')
        //     .then(res => {
        //         return res.json()
        //     })
        //     .then(json => {
        //         setItems(json)
        //     })
        axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/items')
            .then(res => setItems(res.data))

        axios.get('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart')
            .then(res => setCartItems(res.data))

    }, [])

    const onAddToCart = (obj: ItemsType) => {
        axios.post('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart', obj)
            .then(() => {})
        setCartItems(prev => [...prev, obj])
    }

    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value)
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickKart={() => setCartOpened(true)}/>
            <div className="content">
                <div className={"titleSearch"}>
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                    <div className="searchBlock">
                        <img src="./img/search.svg" alt="search"/>
                        {searchValue && <img onClick={() => setSearchValue('')} className={"removeBtn clear"} src="/img/btn_remove.svg" alt="btn_remove"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder={'Поиск...'}/>
                    </div>
                </div>

                <div className="sneakers">
                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((el,index) =>
                        <Card
                            key={index} title={el.title}
                            price={el.price} imageURL={el.imageURL}
                            onPlus={(obj) => onAddToCart(el)}
                        />)}

                </div>
            </div>
        </div>
    );
}

export default App;
