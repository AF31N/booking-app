import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedHomes from '../../components/featuredHomes/FeaturedHomes'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
      <h1 className="homeTitle">Trending destinations</h1>
      <h2 className='homeTitle2'>Most popular choices for travellers from India</h2>
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedHomes/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
