import React, {ChangeEvent, FC} from 'react';
import {Card} from "../components/Card/Card";
import {ItemsType} from "../App";


type HomePropsType = {
    items: ItemsType[]
    searchValue: string
    setSearchValue: (str: string) => void
    onChangeSearchInput: (e: ChangeEvent<HTMLInputElement>) => void
    onAddToFavorite: (obj: ItemsType) => void
    onAddToCart: (obj: ItemsType) => void
    cartItems: ItemsType[]
    isLoading: boolean
}

export const Home: FC<HomePropsType> = (
    {items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart, cartItems, isLoading}) => {
    const renderItems = () => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (
            <>
                {isLoading
                    ? [...Array(8)]
                    : filteredItems
                        .map((el, index) =>
                            <Card
                                id={el.id}
                                key={index} title={el.title}
                                price={el.price} imageURL={el.imageURL}
                                onPlus={(obj) => onAddToCart(el)}
                                onFavorite={(obj) => onAddToFavorite(el)}
                                //favorited={true}
                                added={cartItems.some(f => Number(f.id) === Number(f.id))}
                                loading={isLoading}
                            />
                            )
                }
            </>
        )
    }

    return (
        <div className="content">
            <div className={"titleSearch"}>
                <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}</h1>
                <div className="searchBlock">
                    <img src="./img/search.svg" alt="search"/>
                    {searchValue &&
                    <img onClick={() => setSearchValue('')} className={"removeBtn clear"} src="/img/btn_remove.svg"
                         alt="btn_remove"/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder={'Поиск...'}/>
                </div>
            </div>

            <div className="sneakers">
                {renderItems()}
            </div>
        </div>
    );
};
