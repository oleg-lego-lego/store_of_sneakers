import React, {FC, useContext} from 'react';
import {AppContext} from "../../context/AppContext";

type InfoPropsType = {
    title: string
    description: string
    image: string
}

export const Info: FC<InfoPropsType> = ({title, description, image}) => {
    const {setCartOpened} = useContext(AppContext)

    return (
        <div className="cartEmpty">
            <img className="emptyImage" src={image} alt="EmptyCart"/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => setCartOpened && setCartOpened(false)} className="greenButton">
                <img className="imgArrow" src="img/arrow.svg" alt="Arrow"/>Вернуться назад
            </button>
        </div>
    );
};