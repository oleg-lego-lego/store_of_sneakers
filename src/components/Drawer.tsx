import React, {FC} from 'react';
import {ItemsType} from "../App";
import {Info} from "./Info/Info";


type DrawerPropsType = {
    onClose: any
    items: ItemsType[]
    onRemove: (id: string) => void
}

export const Drawer: FC<DrawerPropsType> = ({onClose, items, onRemove}) => {
    return (
        <div className="overlay">
            <div className="drawer">

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
                                        <b>21 498 руб</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%:</span>
                                        <div></div>
                                        <b>1074 руб.</b>
                                    </li>
                                </ul>
                                <button className={"greenButton"}>Оформить заказ <img src="/src/img/img/arrow.svg"
                                                                                      alt="arrow"/></button>
                            </div>
                        </>
                        :
                        <Info title={'корзина пуста'} description={'добавь хотябы одну пару кроссвок'} image={'/img/empty-cart.jpg'}/>
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
