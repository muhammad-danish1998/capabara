import React from 'react'
import Header from './Header'
import SectionTwo from './SectionTwo'
import "./style/home.css"

const Home = () => {
  return (
    <div className="homemain container"  >
      <Header style={{zIndex:"9"}} />
      <SectionTwo />
    </div>
  )
}

export default Home