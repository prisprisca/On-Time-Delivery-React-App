import React from 'react';
import {useSelector} from 'react-redux';
import Order from './Order/Order';
import useStyles from './styles';

const Orders = () => {
    const orders = useSelector((state)=> state.orders)
    const classes = useStyles();
    console.log(orders);
    return (
        <>
        <h1>Orders</h1>
        <Order />
        <Order />
        </>
    )
}

export default Orders
