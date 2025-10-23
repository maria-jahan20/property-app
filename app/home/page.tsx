import React from 'react'
import ImageCarousel from './carousel/page'
import Perfection from './perfection/page'
import AscendanceSection from './ascendance/page'
import BeliefsSection from './belief/page'
import HeavenSection from './heaven/page'
import MapLoader from './map/page'

const HomePage = () => {
  return (
    <div>
        <ImageCarousel />
        <Perfection />
        <AscendanceSection />
        <BeliefsSection />
        <HeavenSection />
        <MapLoader />
    </div>
    
  )
}

export default HomePage
