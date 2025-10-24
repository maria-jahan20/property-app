import Footer from "./footer";
import AwardsSection from "./awardsSection"
import Testimonial from "./testimonial";

export default function FooterPage() {
  return (
    <main className="min-h-screen flex flex-col">

      <Testimonial />

      
      {/* Award Section */}
      <AwardsSection />
      

      {/* Footer */}
      <Footer />
    </main>
  )
}
