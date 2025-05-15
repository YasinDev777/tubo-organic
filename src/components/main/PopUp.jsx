import React, { useEffect } from 'react'
import { BiX } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { closePopUp } from '../../redux/slices/PopUpSlice';
const PopUp = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.popUp.isOpen)
    const youtubeVideo = 'https://www.youtube.com/embed/RjcK4xqtp3M?controls=1&rel=0'
// https://www.youtube.com/watch?v=
    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        
        return () => {
            body.style.overflow = 'auto';
        };
    }, [isOpen]);
    
    return (
        <div className='PopUp' onClick={() => dispatch(closePopUp())}>
            <div className="PopUp__container" onClick={(e) => e.stopPropagation()}>
                <BiX onClick={() => dispatch(closePopUp())} />
                <div className="video__course">
                    <iframe
                        src={isOpen ? youtubeVideo : ''}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default PopUp