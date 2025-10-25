"use client"

export default function BlackContactSection() {

  return (
    <section className="w-full bg-black py-16 md:py-24 lg:py-32">
      <div className="max-w-full mx-auto px-16 md:px-12">
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* ADDRESS Column */}
          <div
            className="transition-transform duration-300 ease-out"
          >
            <h3 className="text-white text-sm md:text-base font-bold tracking-widest mb-6">ADDRESS</h3>
            <div className="space-y-3">
              <p className="text-white/80 text-sm leading-relaxed">JCX Business Tower</p>
              <p className="text-white/80 text-sm leading-relaxed">Plot 1062A, Jasim Street, Block # 1,</p>
              <p className="text-white/80 text-sm leading-relaxed">Kawran Bazar, Dhaka - 1235,</p>
              <p className="text-white/80 text-sm leading-relaxed">Bangladesh</p>
              <div className="pt-4 space-y-2">
                <p className="text-white text-sm font-semibold">sales@jcxbd.com</p>
                <p className="text-white text-sm font-semibold">info@jcxbd.com</p>
              </div>
            </div>
          </div>

          {/* PHONE Column */}
          <div
            className="transition-transform duration-300 ease-out"
          >
            <h3 className="text-white text-sm md:text-base font-bold tracking-widest mb-6">PHONE</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-xs tracking-widest mb-2">Central Office</p>
                <p className="text-white text-sm font-semibold">+8801324-437947</p>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">16777</p>
              </div>
            </div>
          </div>

          {/* WORK SCHEDULE Column */}
          <div
            className="transition-transform duration-300 ease-out"
          >
            <h3 className="text-white text-sm md:text-base font-bold tracking-widest mb-6">WORK SCHEDULE</h3>
            <div className="space-y-4">
              <p className="text-white/80 text-sm">Saturday - Thursday</p>
              <div className="flex items-center gap-4">
                <span className="text-white text-sm font-semibold">9:30</span>
                <div className="flex-1 h-px bg-white/30"></div>
                <span className="text-white text-sm font-semibold">17:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
