import React from 'react';

export const Header = () => {
    return (
        <header>
            <div className={"headerLeft"}>
                <img width={40} height={40} src="../img/logo.png" alt="logo"/>
                <div>
                    <h3>React Sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <ul className={"headerRight"}>
                <li>
                    <img width={18} height={18} src="../img/cart.svg" alt="cart"/>
                    <span>1205 руб</span>
                </li>
                <li>
                    <img width={18} height={18} src="../img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
};
