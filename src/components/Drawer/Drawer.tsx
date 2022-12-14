import React, {FC, useState} from 'react';
import {ItemsType} from "../../App";
import {Info} from "../Info/Info";
import axios from "axios"
import {useCart} from "../hooks/useCart";

type DrawerPropsType = {
    onClose: () => void
    items: ItemsType[]
    onRemove: (id: string) => void
    opened: boolean
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Drawer: FC<DrawerPropsType> = ({onClose, items, onRemove}) => {

    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {cartItems, setCartItems, totalPrice} = useCart()

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://6328ab4ecc4c264fdedfb384.mockapi.io/orders', {items: cartItems})
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems && setCartItems([])

            for (let i = 0; i < Number(cartItems && cartItems.length); i++) {
                const item = cartItems && cartItems[i]
                await axios.delete('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart' + item?.id)
                await delay(1000)
            }
        } catch (e) {
            alert('Не удалось создать заказ :(')
        }
        setIsLoading(false)
    }

    return (
        <div className={"overlay"}>
            <div className={"drawer"}>

                <h2>
                    Корзина
                    <img onClick={onClose} className={"removeBtn"} src="img/btn_remove.svg" alt="btn_remove"/>
                </h2>

                {items.length > 0 ?
                    <>
                        <div className="items">
                            {items.map(el => {
                                return (
                                    <div key={el.id} className="cartItems">
                                        <div style={{backgroundImage: `url(${el.imageURL})`}}
                                             className="cartItemImg">
                                        </div>
                                        <div className={"cartText"}>
                                            <p>{el.title}</p>
                                            <b>{(el.price)}</b>
                                        </div>
                                        <img onClick={() => onRemove(el.id)} className={"removeBtn"}
                                             src="img/btn_remove.svg" alt="btn_remove"/>
                                    </div>
                                )
                            })}
                        </div>

                        <div className={"cartTotalBlock"}>
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб</b>
                                </li>
                                <li>
                                    <span>Скидка 5%:</span>
                                    <div></div>
                                    <b>{totalPrice && Math.trunc(totalPrice / 100 * 5)} руб.</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className={"greenButton"}>
                                Оформить заказ <img src="img/arrow.svg" alt="arrow"/>
                            </button>
                        </div>
                    </>
                    :
                    isOrderComplete
                        ? <Info title={'Заказ оформлен!'}
                                description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
                                image={'img/completed-order.svg'}/>
                        : <Info title={'корзина пуста'} description={'добавь хотябы одну пару кроссвок'}
                                image={'/img/empty-cart.jpg'}/>
                }
            </div>
        </div>
    );
};
