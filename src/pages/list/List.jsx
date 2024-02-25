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
  const { destination, date, options } = location.state;
  
  const [openDate, setOpenDate] = useState(false);
  
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

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels/:id');
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
              <input type="text" placeholder={destination} value={destination} readOnly />
            </div>
            <div className="lsItem" ref={dateRef}>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MMMM dd, yyyy")} to ${format(date[0].endDate, "MMMM dd, yyyy")}`}
              </span>
              {openDate && 
              (<DateRange
                // eslint-disable-next-line
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
                {/* Similarly, fill other input fields with appropriate placeholders and values */}
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
