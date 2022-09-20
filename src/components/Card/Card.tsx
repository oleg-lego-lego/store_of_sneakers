import React, {FC, useEffect, useState} from 'react';
import s from './Card.module.scss'
import {ItemsType} from "../../App";

type CardPropsType = {
    title: string
    price: number
    imageURL: string
    onFavorite?: (obj: ItemsType) => void
    onPlus?: (obj: ItemsType) => void
}

export const Card: FC<CardPropsType> = (
    {title, price, imageURL,onFavorite,onPlus }) => {
    const [isAdded, setIsAdded] = useState(false)

    const obj = {imageURL, title, price}

    const onClickPlus = () => {
        if(onPlus) {
            onPlus(obj)
        }
        setIsAdded(!isAdded)
    }

    useEffect(()=>{

    }, [isAdded])


    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src="../../img/heart_unliked.svg" alt="unliked"/>
            </div>

            <img width={133} height={112} src={imageURL} alt={'sneakers'}/>
            <h5>{title}</h5>
            <div className={s.cardButton}>
                <div className={s.cardPrise}>
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>
                <img className={s.plus} onClick={onClickPlus} src={isAdded ? '/img/btn_checked.svg' : '/img/btn_plus.svg'} alt={'plus'}/>
            </div>
        </div>
    );
};



