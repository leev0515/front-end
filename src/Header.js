import React, { useState } from 'react';
import './App.css';

function Header () {

    const [menu] = useState ([
        {title: 'Greek Salad', body: 'A salad that is from Greek and uses Greek ingredients.', price: '$5', id: 1},
        {title: 'Bruscetta', body: 'A piece of bread that has been toasted with toppings.', price: '$7', id: 2},
        {title: 'Lemon Cake', body: 'A delicious cake that is made from flour and lemon with other ingredients.', price: '$6', id: 3},
    ]);

    return (
        <nav className='home'>
            <h1>Welcome to the Little Lemon website.</h1>
            {menu.map((menu) => (
                <div className='menu' key={menu.id}>
                    <h2>{ menu.title }</h2>
                    <p> {menu.body} </p>
                    <p>Price {menu.price}</p>
                </div>
                ))}
        </nav>
    );
}

export default Header