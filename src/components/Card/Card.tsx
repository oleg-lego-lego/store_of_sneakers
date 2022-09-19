import React, {useEffect, useState} from 'react';
import s from './Card.module.scss'

type CardPropsType = {
    title: string
    price: number
    imageURL: string
}

export const Card = (props: CardPropsType) => {
    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }

    useEffect(()=>{

    }, [isAdded])


    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src="../../img/heart_unliked.svg" alt="unliked"/>
            </div>

            <img width={133} height={112} src={props.imageURL} alt={'sneakers'}/>
            <h5>{props.title}</h5>
            <div className={s.cardButton}>
                <div className={s.cardPrise}>
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <img className={s.plus} onClick={onClickPlus} src={isAdded ? '/img/btn_checked.svg' : '/img/btn_plus.svg'} alt={'plus'}/>
            </div>
        </div>
    );
};
