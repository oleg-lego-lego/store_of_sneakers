import React, {FC, useContext} from 'react';
import {Card} from "../components/Card/Card";
import {AppContext} from "../context/AppContext";

type FavoritesPropsType = {}

export const Favorites: FC<FavoritesPropsType> = () => {
    const {favorites, onFavorite} = useContext(AppContext)

    return (
        <div className={"content"}>
            <div className={"titleSearch"}>
                <h1>Мои закладки</h1>
            </div>

            <div className={"sneakers"}>
                {favorites?.map((el, index) =>
                        <Card
                            id={el.id}
                            key={index}
                            title={el.title}
                            price={el.price}
                            imageURL={el.imageURL}
                            parentId={el.parentId}
                            favorite={true}
                            onFavorite={onFavorite}
                        />
                    )}
            </div>
        </div>
    );
};
