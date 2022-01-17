import React from 'react'
import InfluencerContent from './content/InfluencerContent'
import InfluencerHero from './hero/InfluencerHero'

const Influencer = () => {
    return (
        <section className='Influencer' id='influencer'>
            <InfluencerHero />
            <InfluencerContent/>
        </section>
    )
}

export default Influencer
