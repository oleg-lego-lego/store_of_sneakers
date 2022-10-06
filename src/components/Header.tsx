import React from 'react';
import {NavLink} from "react-router-dom";
import {useCart} from "./hooks/useCart";

type HeaderPropsType = {
    onClickKart: () => void
}

export const Header = (props: HeaderPropsType) => {
    const {totalPrice} = useCart()

    return (
        <header>
            <NavLink to="/">
                <div className={"headerLeft"}>
                    <img width={40} height={40} src="../img/logo.png" alt="logo"/>
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </NavLink>

            <ul className={"headerRight"}>
                <li onClick={props.onClickKart}>
                    <img width={18} height={18} src="../img/cart.svg" alt="cart"/>
                    <span>{totalPrice} руб</span>
                </li>
                <li>
                    <NavLink to="/favorites">
                        <img width={18} height={18} src="../img/heart.svg" alt="закладки"/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/orders">
                        <img width={18} height={18} src="../img/user.svg" alt="user"/>
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};
