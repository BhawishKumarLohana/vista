export default function FeatureCard({name,description}) {
    return (
      <div className="py-20">
        <div className=" bg-gradient-to-b from-gray-900 to to-black flex justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden border border-gray-700 backdrop-blur-md ">
        
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-purple-400 font-mono">
            {name}
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {description}.
          </p>
          <button className="w-fit bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-2 rounded-xl shadow-lg transition duration-300">
            Enable Alerts
          </button>
        </div>
  
        {/* Right: Animation / Visual Placeholder */}
        <div className="w-full md:w-1/2 bg-black/20 flex items-center justify-center p-6">
          {/* Replace below div with Lottie animation or animated SVG */}
          <div className="w-full h-48 bg-gradient-to-tr from-purple-600 via-green-300 to-transparent rounded-xl animate-pulse blur-sm opacity-60" />
        </div>
        </div>
        </div>
        </div>

    );
  }
  