import React, {useState, useEffect} from 'react';
import './ScrollToTopButton.scss';

const ScrollToTopButton = (props) => {
    const [startDate, setStartDate] = useState(1);

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"})
    };

    return (
        <button id={'Back-to-top-button'} onClick={scrollToTop}>Back to Top</button>
    );
}

export {ScrollToTopButton};
