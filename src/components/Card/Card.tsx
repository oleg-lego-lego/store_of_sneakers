import React, {FC, useEffect, useState} from 'react';
import s from './Card.module.scss'
import {ItemsType} from "../../App";

type CardPropsType = {
    id: string
    title: string
    price: number
    imageURL: string
    onFavorite?: (obj: ItemsType) => void
    onPlus?: (obj: ItemsType) => void
    favorites: boolean
}

export const Card: FC<CardPropsType> = (
    {title, price, imageURL,id,favorites,onFavorite,onPlus }) => {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const obj = {imageURL, title, price, id, favorites}

    const onClickFavorite = () => {
        if(onFavorite) {
            onFavorite(obj)
        }
        setIsFavorite(!isFavorite)
    }

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
                <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="unliked"/>
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



