import React from 'react'
import BannerSection from './banner/page'
import RelentlessSection from './relentless/page'
import ImageGallery from './goals/page'
import ScrollSection from './living/page'
import DirectorSection from './director/page'

const page = () => {
  return (
    <div>
        <BannerSection />
        <RelentlessSection/>
        <ImageGallery />
        <ScrollSection />
        <DirectorSection />
    </div>
  )
}

export default page