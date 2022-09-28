import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AppContext} from "../context/AppContext";

type HeaderPropsType = {
    onClickKart: any
}

export const Header = (props: HeaderPropsType) => {
    const {cartItems} = useContext(AppContext)
    const totalPrice = cartItems?.reduce((sum, obj) => obj.price + sum, 0)


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
                    <img width={18} height={18} src="../img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
};
