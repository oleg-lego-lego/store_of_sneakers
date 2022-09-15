import React from 'react';

export const Drawer = () => {
    return (
        <div className="drawer">

            <h2>Корзина  <img className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/></h2>

            <div className="items">
                <div className="cartItems">

                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>

                    {/*<img className={"cartItem"} src="/img/sneakers/1.jpg" alt="sneakers"/>*/}
                    <div className={"cartText"}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/>
                </div>
                <div className="cartItems">

                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>

                    {/*<img className={"cartItem"} src="/img/sneakers/1.jpg" alt="sneakers"/>*/}
                    <div className={"cartText"}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/>
                </div>
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
                <button className={"greenButton"}>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
            </div>


        </div>
    );
};
