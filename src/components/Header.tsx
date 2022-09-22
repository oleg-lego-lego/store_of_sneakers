import React from 'react';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    onClickKart: any
}

export const Header = (props: HeaderPropsType) => {
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
                    <span>1205 руб</span>
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
