import BannerSection from './banner/page'
import DreamSection from './dream/page'
import EnquiryForm from './enquiry/page'
import { MiddleSection } from './middle/page'
const BuyerSection = () => {
  return (
    <div>
        <BannerSection></BannerSection>
        <MiddleSection></MiddleSection>
        <EnquiryForm/>
        <DreamSection />
        
    </div>
  )
}

export default BuyerSection