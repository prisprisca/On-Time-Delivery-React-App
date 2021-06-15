import React from 'react';
import Order from './Order/Order';
import useStyles from './styles';

const Orders = () => {
    const classes = useStyles();
    return (
        <>
        <h1>Orders</h1>
        <Order />
        <Order />
        </>
    )
}

export default Orders
