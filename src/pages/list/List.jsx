import React, { useEffect, useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './List.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  
  const dateRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dateRef]);
  const navigate = useNavigate()
  const handleSearch = () => {
    // Navigate to the specified route
    navigate('/hotels/:id');

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
 
  
  

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
         <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem" ref={dateRef}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MMMM dd, yyyy")} to ${format(date[0].endDate, "MMMM dd, yyyy")}`}
              </span>
              {openDate && 
              (<DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
                className='date'
              />)}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsItemOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Min price <small> per night</small></span>
                  <input type="number" min={0} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small> per night</small></span>
                  <input type="number" className="lsOptionInput" min={0} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
          <SearchItem/>
          </div>
        </div>
      </div>
      </div>
  );
};

export default List;
