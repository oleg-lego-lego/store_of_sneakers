import React from 'react';
import s from './Card.module.scss'

type CardPropsType = {
    title: string
    price: number
    imageURL: string
}

export const Card = (props: CardPropsType) => {
    const onClickButton = () => {alert(123)}

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
                <button className={s.button} onClick={onClickButton}>
                    <img width={11} height={11} src={'/img/plus.svg'} alt={'plus'}/>
                </button>
            </div>
        </div>
    );
};
