export default function Hero() {
    return (
      <section className="relative h-[70vh] bg-[url('/bg2.jpeg')] bg-cover bg-center flex items-center">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative container mx-auto text-center px-6">
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Powering Business Success with <br /> Unmatched IT Solutions
          </h1>
          <p className="font-serif mt-10 text-lg md:text-2xl text-white mb-6 max-w-3xl mx-auto">
            At WebAlora, we deliver comprehensive IT services designed to drive growth, enhance security, and streamline
            operations for businesses of all sizes.
          </p>
  
          {/* Animated Button */}
          <button className="relative flex flex-row hover:text-white  mx-auto mt-10 px-8 py-3 text-lg font-semibold text-blue-900 bg-white rounded-lg overflow-hidden group">
            <span className="relative z-10">Get a Free IT Health Check</span>
            <div className="absolute inset-0  bg-blue-800 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            
            {/* Icon */}
            <span className="relative z-10 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    );
  }
  