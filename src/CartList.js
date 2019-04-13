import React from 'react';
import Cart from './Cart';

const CartList = ({kats})=> {
    const katsMap = kats.map((kat, i)=>{
        return <Cart key={i} id={kat.id} name={kat.name}  email={kat.email} />
    })
    return <div>{katsMap}</div>
}

export default CartList;