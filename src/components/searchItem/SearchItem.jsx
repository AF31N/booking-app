import React from 'react';
import './SearchItem.css';
import { useNavigate } from 'react-router-dom';
import Hotel from '../../pages/hotel/Hotel';

const SearchItem = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/hotels/:id');
    window.scrollTo(0, 0);
  };

  const images = [
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o='
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/223615457.webp?k=a9d6203f748133d6a5cea270f6515170f88cc96c148a4b2405ff414065845977&o='
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/475206972.webp?k=02f88e1666c94e8b7be01bab5158b1775108c848dc797ef563fbb9f375923c0c&o='
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/213270443.webp?k=c4ae15f92b5baf923be2c861915dfc211fc7d53cc6d6591fa5b35aaac0f4aa82&o='
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/389783643.webp?k=2d6db25929daf2719526e9d9fe2534bf3363476d31b1ff0a412d5773d4d1967a&o='
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/377502255.webp?k=22b6ec47847747e5af8319ac49da2287a123b261b6a4fc9d622e023e72618921&o='
    },

  ];

  return (
    <div className='searchItemContainer'>
      {images.map((image, index) => (
        <div className='searchItem' key={index}>
          <img src={image.src} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">Tower street apartments</h1>
            <span className='siDistance'>500m from center</span>
            <span className='siTaxiOp'>Free airport taxi</span>
            <span className='siSubtitle'>Studio apartment with AC</span>
            <span className='siFeatures'>Entire studio </span>
            <span className='siCancelOp'>Free cancellation</span>
            <span className='siCancelOpSubtitle'>you can cancel it anytime, so lock this at a great price today</span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>Excellent</span>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">$123</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton" onClick={handleClick}>Check Availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default SearchItem;
