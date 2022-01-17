import React from 'react'
import FansContent from './content/FansContent'
import FansHero from './hero/FansHero'

const Fans = () => {
    return (
        <section className='Fans' id='fans'>
            <FansHero/>
            <FansContent/>
        </section>
    )
}

export default Fans
