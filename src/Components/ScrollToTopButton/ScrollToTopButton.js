import React, {useState, useEffect} from 'react';
import './ScrollToTopButton.scss';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = (props) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', setButtonState);
        return () => window.removeEventListener('scroll', setButtonState);
    });

    function setButtonState(e) {
        if(window.pageYOffset === 0){
            setShowButton(false)
        }
        else {
            setShowButton(true)
        }
    }

    function getStyling(){
        let buttonVal = showButton;
        if(showButton){
            return {};
        } else {
            return {display:'none'};
        }
    }

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <button id={'Back-to-top-button'} style={getStyling()} onClick={scrollToTop}>
            <FaArrowUp />
        </button>
    );
};

export {ScrollToTopButton};
