import React, {FC, useContext} from 'react';
import {ItemsType} from "../App";
import {Card} from "../components/Card/Card";
import {AppContext} from "../context/AppContext";

type FavoritesPropsType = {
    //items: ItemsType[]
    onFavorite: (obj: ItemsType) => void
}

export const Favorites: FC<FavoritesPropsType> = ({onFavorite}) => {
    const {favorites} = useContext(AppContext)

    return (

        <div className="content">
            <div className={"titleSearch"}>
                <h1>Мои закладки</h1>
            </div>

            <div className="sneakers">
                {favorites?.map((el, index) =>
                        <Card
                            id={el.id}
                            key={index} title={el.title}
                            price={el.price} imageURL={el.imageURL}
                            favorited={true}
                            // onPlus={(obj) => onAddToCart(el)}
                            onFavorite={onFavorite}
                        />
                    )}
            </div>
        </div>
    );
};
