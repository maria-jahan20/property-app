import Footer from "./footer";
import AwardsSection from "./awardsSection"
import Testimonial from "./testimonial";

export default function FooterPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Your page content goes here */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome</h1>
          <p className="text-gray-600">Your content here</p>
        </div>
      </div>

      <Testimonial />

      
      {/* Award Section */}
      <AwardsSection />
      

      {/* Footer */}
      <Footer />
    </main>
  )
}
