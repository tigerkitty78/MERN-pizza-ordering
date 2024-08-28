import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Pizzacard from '../componenets/pizzacard';
import {getAllPizzas} from '../actions/pizzaActions';


export default function Home() {

    const dispatch = useDispatch()

    const pizzasstate = useSelector(state => state.getAllPizzasReducer)

    const{pizzas, error, loading } = pizzasstate
    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])



    return (
        <div>
            <div className='row'>

                {loading ? (<h1>loading</h1>) : error ? (<h1>something went wrong</h1>) : (

                    pizzas.map(pizza => {
                        return <div className='col-md-4 'key = {pizza._id}>
                            <div className='m-3'>
                                <Pizzacard pizza={pizza} />
                            </div>

                        </div>
                    })

                )}





            </div>
        </div>
    );
}