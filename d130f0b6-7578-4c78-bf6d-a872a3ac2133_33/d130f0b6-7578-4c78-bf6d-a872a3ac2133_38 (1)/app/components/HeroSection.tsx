
'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-500 via-purple-600 to-pink-500"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20family%20business%20meeting%20in%20elegant%20boardroom%2C%20multi-generation%20family%20members%20discussing%20business%20strategy%20around%20conference%20table%2C%20warm%20lighting%20with%20modern%20corporate%20environment%2C%20successful%20family%20enterprise%20atmosphere%20with%20documents%20and%20charts%2C%20sophisticated%20business%20setting%20with%20orange%20and%20purple%20ambient%20lighting&width=1920&height=1080&seq=hero-bg-family&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Negócios Familiares: Desafios e Aprendizados
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Descubra como famílias enfrentam desafios únicos, superam obstáculos e transformam negócios em legados através de histórias reais e inspiradoras.
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
                src="https://readdy.ai/api/search-image?query=Family%20business%20owners%20using%20modern%20technology%2C%20tablet%20and%20smartphone%20displaying%20business%20analytics%20and%20family%20enterprise%20data%2C%20professional%20family%20working%20together%20with%20digital%20tools%2C%20contemporary%20business%20technology%20with%20warm%20family%20atmosphere&width=600&height=600&seq=devices-family&orientation=squarish"
                alt="Tecnologia para Negócios Familiares"
                className="w-full max-w-md rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <i className="ri-team-line text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
