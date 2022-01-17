import React from 'react'
import AppStore from '../../images/Appstore.png'
import PlayStore from '../../images/Playstore.png'

const Store = () => {
    return (
        <div className='store'>
            <img src={PlayStore} alt="PlayStore" />
            <img src={AppStore} alt="AppStore" />
        </div>
    )
}

export default Store
