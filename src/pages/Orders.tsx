import React, {FC} from 'react';

type OrdersPropsType = {
    //items: ItemsType[]
    //onFavorite: (obj: ItemsType) => void
}

export const Orders: FC<OrdersPropsType> = () => {
    return (

        <div className="content">
            <div className={"titleSearch"}>
                <h1>Мои заказы</h1>
            </div>

            <div className="sneakers">
                {[]?.map((el, index) =>  el
                    //<Card
                        // id={el.id}
                        // key={index} title={el.title}
                        // price={el.price} imageURL={el.imageURL}
                        // favorited={true}
                        // // onPlus={(obj) => onAddToCart(el)}
                        // onFavorite={onFavorite}
                    ///>
                )}
            </div>
        </div>
    );
};
