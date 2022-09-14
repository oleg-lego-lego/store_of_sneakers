import React from 'react';

function App() {
    return (
        <div className="wrapper clear">

            <div className="overlay">
                <div className="drawer">

                    <h2>Корзина  <img className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/></h2>

                    <div className="items">
                        <div className="cartItems">

                            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>

                            {/*<img className={"cartItem"} src="/img/sneakers/1.jpg" alt="sneakers"/>*/}
                            <div className={"cartText"}>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/>
                        </div>
                        <div className="cartItems">

                            <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>

                            {/*<img className={"cartItem"} src="/img/sneakers/1.jpg" alt="sneakers"/>*/}
                            <div className={"cartText"}>
                                <p>Мужские Кроссовки Nike Air Max 270</p>
                                <b>12 999 руб.</b>
                            </div>
                            <img className={"removeBtn"} src="/img/btn_remove.svg" alt="btn_remove"/>
                        </div>
                    </div>

                    <div className={"cartTotalBlock"}>
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>21 498 руб</b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>1074 руб.</b>
                            </li>
                        </ul>
                        <button className={"greenButton"}>Оформить заказ <img src="/img/arrow.svg" alt="arrow"/></button>
                    </div>


                </div>
            </div>

            <header>
                <div className={"headerLeft"}>
                    <img width={40} height={40} src="/img/logo.png" alt="logo"/>
                    <div>
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>

                <ul className={"headerRight"}>
                    <li>
                        <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
                        <span>1205 руб</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" alt="user"/>
                    </li>
                </ul>
            </header>
            <div className="content">
                <div className={"titleSearch"}>
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src="/img/search.svg" alt="search"/>
                        <input placeholder={'Поиск...'}/>
                    </div>
                </div>


                <div className="sneakers">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/heart_unliked.svg" alt="unliked"/>
                        </div>

                        <img width={133} height={112} src={'/img/sneakers/1.jpg'} alt={'sneakers'}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"cardButton"}>
                            <div className={"cardPriсe"}>
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={'/img/plus.svg'} alt={'plus'}/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src={'/img/sneakers/2.jpg'} alt={'sneakers'}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"cardButton"}>
                            <div className={"cardPriсe"}>
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={'/img/plus.svg'} alt={'plus'}/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src={'/img/sneakers/3.jpg'} alt={'sneakers'}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"cardButton"}>
                            <div className={"cardPriсe"}>
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={'/img/plus.svg'} alt={'plus'}/>
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img width={133} height={112} src={'/img/sneakers/4.jpg'} alt={'sneakers'}/>
                        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                        <div className={"cardButton"}>
                            <div className={"cardPriсe"}>
                                <span>Цена:</span>
                                <b>12 999 руб.</b>
                            </div>
                            <button className={"button"}>
                                <img width={11} height={11} src={'/img/plus.svg'} alt={'plus'}/>
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default App;
