import React from 'react'
import firstImage from '../../assets/noroot.png'
import secondImage from '../../assets/IMG_0701-2.jpg'
import thirdImage from '../../assets/noroot1.png'

const AboutPov = () => {
    return (
        <div className='AboutPov'>
            <h1>Kurs Boshlovchisi</h1>

            <div className="PovInfo">
                <div className="PovImage">
                    <div className="firstPovPart">
                        <img src={firstImage} alt="" />
                        <img src={secondImage} alt="" />
                    </div>
                    <div className="secondPovPart">
                        <img src={thirdImage} alt="" />
                    </div>
                </div>

                <div className='PovPrefers'>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutPov