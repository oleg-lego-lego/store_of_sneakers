import React, {FC, useState} from 'react';
import {ItemsType} from "../../App";
import {Info} from "../Info/Info";
import s from './Drawer.module.scss'
import axios from "axios"
import {useCart} from "../hooks/useCart";

type DrawerPropsType = {
    onClose: any
    items: ItemsType[]
    onRemove: (id: string) => void
    opened: any
}


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Drawer: FC<DrawerPropsType> = ({onClose, items, onRemove, opened}) => {
    // const {setCartItems, cartItems} = useContext(AppContext)

    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const {cartItems, setCartItems, totalPrice} = useCart()

    // const totalPrice = cartItems?.reduce((sum, obj) => obj.price + sum, 0)


    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://6328ab4ecc4c264fdedfb384.mockapi.io/orders', {items: cartItems})
            //await axios.put('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart', [])
            setOrderId(data.id)
            setIsOrderComplete(true)
            setCartItems && setCartItems([])

            for (let i = 0; i < Number(cartItems && cartItems.length); i++) {
                const item = cartItems && cartItems[i]
                axios.delete('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart' + item?.id).then()
                await delay(1000)
            }

            //cartItems?.forEach(el => axios.delete('https://6328ab4ecc4c264fdedfb384.mockapi.io/cart' + items.))
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
                    <img onClick={onClose} className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/>
                </h2>

                {
                    items.length > 0 ?
                        <>
                            <div className="items">
                                {items.map(el => {
                                    return (
                                        <div key={el.id} className="cartItems">
                                            <div style={{backgroundImage: `url(${el.imageURL})`}}
                                                 className="cartItemImg"></div>

                                            {/*<img className={"cartItem"} src="/img/sneakers/1.jpg" alt="sneakers"/>*/}
                                            <div className={"cartText"}>
                                                <p>{el.title}</p>
                                                <b>{(el.price)}</b>
                                            </div>
                                            <img onClick={() => onRemove(el.id)} className={"removeBtn"}
                                                 src="/src/img/img/btn_remove.svg" alt="btn_remove"/>
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
                            ? <Info title={'Заказ оформлен!'} description={`Ваш заказ #${orderId} скоро будет передан курьерской доставке`}
                                    image={'img/completed-order.svg'}/>
                            : <Info title={'корзина пуста'} description={'добавь хотябы одну пару кроссвок'}
                                    image={'/img/empty-cart.jpg'}/>
                    // <div className="cartEmpty">
                    //     <img className="emptyImage" src={'/img/empty-cart.jpg'} alt="EmptyCart"/>
                    //     <h2>{'title'}</h2>
                    //     <p>{'description'}</p>
                    //     <button onClick={onClose} className="greenButton">
                    //         <img className="imgArrow" src="img/arrow.svg" alt="Arrow"/>Вернуться назад
                    //     </button>
                    // </div>
                }
            </div>
        </div>
    );
};
