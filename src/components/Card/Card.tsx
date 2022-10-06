import React, {FC, useContext, useState} from 'react';
import s from './Card.module.scss'
import {ItemsType} from "../../App";
import {AppContext} from "../../context/AppContext";
import {ContentLoaders} from "./ContentLoaders";

type CardPropsType = {
    id: string
    title: string
    price: number
    imageURL: string
    parentId: number
    onFavorite?: (obj: ItemsType) => void
    onPlus?: (obj: ItemsType) => void
    favorite?: boolean
    isLoading?: boolean
}

export const Card: FC<CardPropsType> = ({
                                            title, price, imageURL, id, onFavorite,
                                            onPlus, favorite = false,
                                            isLoading= false, parentId
                                        }) => {

    const [isFavorite, setIsFavorite] = useState(favorite)

    const {isItemAdded} = useContext(AppContext)


    //liked unliked fixed

    const obj = {imageURL, title, price, id, parentId}

    const onClickFavorite = () => {
        if (onFavorite) {
            onFavorite(obj)
        }
        setIsFavorite(!isFavorite)
    }

    const onClickPlus = () => {
        if (onPlus) {
            onPlus(obj)
        }
    }

    return (
        <div className={s.card}>

            {isLoading ?
                <ContentLoaders/>
                :
                <>
                    {onFavorite &&
                    <div className={s.favorite}>
                        <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                             alt={"liked"}/>
                    </div>
                    }

                    <img width={'100%'} height={135} src={imageURL} alt={'sneakers'}/>
                    <h5>{title}</h5>
                    <div className={s.cardButton}>
                        <div className={s.cardPrise}>
                            <span>Цена:</span>
                            <b>{price}</b>
                        </div>
                        {onPlus &&
                        <img className={s.plus} onClick={onClickPlus}
                             src={isItemAdded && isItemAdded(id) ? '/img/btn_checked.svg' : '/img/btn_plus.svg'}
                             alt={'plus'}/>
                        }
                    </div>
                </>}
        </div>
    );
};



