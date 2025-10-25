import BannerSection from './banner/page'
import BlackContactSection from './details/page'
import EnquiryForm from './enquiry/page'

const contactSection = () => {
  return (
    <div>
        <BannerSection></BannerSection>
        <BlackContactSection />
        <EnquiryForm />
    </div>
  )
}

export default contactSection