import React, {useState, useEffect} from 'react';
import './Paginator.scss';

const Paginator = (props) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    if(props.data){
      setMaxPages(Math.ceil(props.data.length/props.dataPerPage))
    }
  }, [props.data]);

  useEffect(() => {
    if (props.data) {
      let indexStart = props.dataPerPage * (currentPageNumber - 1);
      let indexEnd = indexStart + props.dataPerPage;
      let displayedData = props.data.slice(indexStart, indexEnd);
      props.setDisplayedData(indexStart, indexEnd, displayedData);
    }
  }, [currentPageNumber]);

  function handlePreviousClick() {
    if(currentPageNumber > 1){
      setCurrentPageNumber(currentPageNumber - 1);
    }
  }

  function handleNextClick() {
    if(currentPageNumber < maxPages){
      setCurrentPageNumber(currentPageNumber + 1);
    }
  }

  return (
    <div className="Paginator">
      <button onClick={handlePreviousClick}>Previous</button>
      <p>{currentPageNumber}</p>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export {Paginator};
