import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItems src="/img" text="Explore hidden waterfall" label='Adventure' path='/service' />
                    <CardItems src="/img" text="Explore hidden waterfall" label='Adventure' path='/service' />
                </ul>
                <ul className="cards__items">
                    <CardItems src="/img" text="Explore hidden waterfall" label='Adventure' path='/service' />
                    <CardItems src="/img" text="Explore hidden waterfall" label='Adventure' path='/service' />
                </ul>
            </div>
        </div>
            
        </div>
    )
}

export default Cards
