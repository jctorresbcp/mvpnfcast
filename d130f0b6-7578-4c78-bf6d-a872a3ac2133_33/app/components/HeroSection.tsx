
'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-purple-600 to-pink-500"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20podcast%20studio%20setup%20with%20warm%20lighting%2C%20microphones%20and%20recording%20equipment%2C%20inspiring%20atmosphere%20with%20orange%20and%20purple%20ambient%20lighting%2C%20professional%20broadcast%20environment%2C%20contemporary%20design%20with%20glass%20and%20steel%20elements%2C%20sophisticated%20technology%20setup%2C%20warm%20welcoming%20environment%20perfect%20for%20mature%20professionals&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Negócios em família, lições para líderes, inspiração para todos.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Descubra como famílias vencem desafios e criam negócios extraordinários através de histórias reais e inspiradoras.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
                <i className="ri-play-circle-line mr-2"></i>
                Assista Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 whitespace-nowrap cursor-pointer">
                <i className="ri-handshake-line mr-2"></i>
                Seja um Patrocinador
              </button>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20and%20laptop%20displaying%20podcast%20interface%20with%20headphones%2C%20professional%20podcast%20branding%20on%20screens%2C%20sleek%20technology%20setup%20with%20orange%20and%20purple%20accent%20colors%2C%20contemporary%20mobile%20and%20desktop%20podcast%20player%20interface%2C%20inspiring%20professional%20design&width=600&height=600&seq=devices-hero&orientation=squarish"
                alt="Podcast em dispositivos"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <i className="ri-headphone-line text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
