import React, {FC} from 'react';

type FavoritesPropsType = {

}

export const Favorites: FC<FavoritesPropsType> = ({}) => {
    return (

        <div className="content">
            <div className={"titleSearch"}>
                <h1>Мои закладки</h1>
                {/*<div className="searchBlock">*/}
                {/*    <img src="./img/search.svg" alt="search"/>*/}
                {/*    {searchValue &&*/}
                {/*    <img onClick={() => setSearchValue('')} className={"removeBtn clear"} src="/img/btn_remove.svg"*/}
                {/*         alt="btn_remove"/>}*/}
                {/*    <input onChange={onChangeSearchInput} value={searchValue} placeholder={'Поиск...'}/>*/}
                {/*</div>*/}
            </div>

            <div className="sneakers">
                tut
            </div>
        </div>
    );
};
