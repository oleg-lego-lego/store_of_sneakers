import React, {useState} from 'react';
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";

const arr = [
    {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageURL: 'img/sneakers/1.jpg'},
    {title: 'Мужские Кроссовки Nike Air Max 270', price: 15600, imageURL: 'img/sneakers/2.jpg'}
]

function App() {
    const [cartOpened, setCartOpened] = useState(false)

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
            <Header onClickKart={() => setCartOpened(true)}/>
            <div className="content">
                <div className={"titleSearch"}>
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img src="./img/search.svg" alt="search"/>
                        <input placeholder={'Поиск...'}/>
                    </div>
                </div>

                <div className="sneakers">
                    {arr.map(el => <Card title={el.title} price={el.price} imageURL={el.imageURL}/>)}

                </div>
            </div>
        </div>
    );
}

export default App;
