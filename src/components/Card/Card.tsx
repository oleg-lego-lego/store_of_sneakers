import React, {FC, useContext, useState} from 'react';
import s from './Card.module.scss'
import {ItemsType} from "../../App";
import ContentLoader from "react-content-loader";
import {AppContext} from "../../context/AppContext";

type CardPropsType = {
    id: string
    title: string
    price: number
    imageURL: string
    onFavorite?: (obj: ItemsType) => void
    onPlus?: (obj: ItemsType) => void
    favorited?: boolean
    // added?: boolean
    loading?: boolean
}

export const Card: FC<CardPropsType> = (
    {
        title, price, imageURL, id, onFavorite,
        onPlus, favorited = false,
        loading = false
    }) => {

    //const [isAdded, setIsAdded] = useState(added)
    const [isFavorite, setIsFavorite] = useState(favorited)

    const {isItemAdded} = useContext(AppContext)


    //liked unliked fixed

    const obj = {imageURL, title, price, id}

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
        //setIsAdded(!isAdded)
    }

    // useEffect(() => {
    //
    // }, [isAdded])

    return (
        <div className={s.card}>

            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={165}
                        height={250}
                        viewBox="0 0 155 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb">
                        <rect x="0" y="0" rx="10" ry="10" width="155" height="155"/>
                        <rect x="0" y="167" rx="5" ry="5" width="155" height="15"/>
                        <rect x="0" y="187" rx="5" ry="5" width="100" height="15"/>
                        <rect x="0" y="234" rx="5" ry="5" width="80" height="25"/>
                        <rect x="124" y="230" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader>
                    :
                    <>
                        <div className={s.favorite}>
                            <img onClick={onClickFavorite} src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                                 alt="unliked"/>
                        </div>

                        <img width={'100%'} height={135} src={imageURL} alt={'sneakers'}/>
                        <h5>{title}</h5>
                        <div className={s.cardButton}>
                            <div className={s.cardPrise}>
                                <span>Цена:</span>
                                <b>{price}</b>
                            </div>
                            <img className={s.plus} onClick={onClickPlus}
                                 src={isItemAdded && isItemAdded(id) ? '/img/btn_checked.svg' : '/img/btn_plus.svg'}
                                 alt={'plus'}/>
                        </div>
                    </>
            }
        </div>
    );
};



