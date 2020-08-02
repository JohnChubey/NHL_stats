import React, {useState, useEffect} from 'react';
import './ScrollToTopButton.scss';

const ScrollToTopButton = (props) => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', setButtonState);
        return () => window.removeEventListener('scroll', setButtonState);
    })

    function setButtonState(e) {
        if(window.pageYOffset === 0){
            setShowButton(false)
        }
        else {
            setShowButton(true)
        }
    }

    function getStying(){
        if(showButton){
            return {display:null};
        } else {
            return {};
        }
    }

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <button id={'Back-to-top-button'} style={getStying()} onClick={scrollToTop}>Back to Top</button>
    );
}

export {ScrollToTopButton};
