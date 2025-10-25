import React from 'react'
import BannerSection from './banner/page'
import { ScrollSection } from './middle/page'
import EnquiryForm from './enquiry/page'
import DreamSection from './dream/page'
const LandOwnerSection = () => {
  return (
    <div>
        <BannerSection></BannerSection>
        <ScrollSection />
        <EnquiryForm />
        <DreamSection />
    </div>
  )
}

export default LandOwnerSection