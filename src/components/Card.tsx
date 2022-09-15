import React from 'react';

type CardPropsType = {
    title: string
    price: number
    imageURL: string
}

export const Card = (props: CardPropsType) => {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/src/img/img/heart_unliked.svg" alt="unliked"/>
            </div>

            <img width={133} height={112} src={props.imageURL} alt={'sneakers'}/>
            <h5>{props.title}</h5>
            <div className={"cardButton"}>
                <div className={"cardPriсe"}>
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className={"button"}>
                    <img width={11} height={11} src={'/img/plus.svg'} alt={'plus'}/>
                </button>
            </div>
        </div>
    );
};
