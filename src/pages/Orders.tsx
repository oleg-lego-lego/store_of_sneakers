import React, {FC, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {ItemsType} from "../App";
import {Card} from "../components/Card/Card";
import {AppContext} from "../context/AppContext";

type OrdersPropsType = {
    //items: ItemsType[]
    //onFavorite: (obj: ItemsType) => void
}

export const Orders: FC<OrdersPropsType> = () => {
    const {onFavorite, onAddToCart} = useContext(AppContext)

    const [orders, setOrders] = useState<ItemsType[]>([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get(`https://6328ab4ecc4c264fdedfb384.mockapi.io/orders`)
                setOrders(data.reduce((prev: ItemsType[], obj: { items: ItemsType[] }) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (e) {
                alert('Ошибка при запросе заказов')
                console.log(e)
            }
        })()
    }, [])

    return (

        <div className={"content"}>
            <div className={"titleSearch"}>
                <h1>Мои заказы</h1>
            </div>

            <div className={"sneakers"}>
                {(isLoading
                    ? [...Array(8)]
                    : orders).map((el, index) =>
                        <Card
                            id={el.id}
                            key={index} title={el.title}
                            price={el.price} imageURL={el.imageURL}
                            parentId={el.parentId}
                            favorited={true}
                            // onPlus={(obj) => onAddToCart(el)}
                            onFavorite={onFavorite}
                        />
                    )}
            </div>
        </div>
    );
};
