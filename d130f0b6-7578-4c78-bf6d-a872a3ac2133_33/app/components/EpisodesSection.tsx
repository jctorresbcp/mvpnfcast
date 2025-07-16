'use client';

export default function EpisodesSection() {
  const episodes = [
    {
      id: 1,
      title: "Reinvenção aos 55: Como Maria transformou sua carreira em tecnologia",
      description: "Uma conversa inspiradora sobre transição de carreira e aprendizado contínuo no setor tech.",
      duration: "42 min",
      date: "15 Jan 2024",
      image: "https://readdy.ai/api/search-image?query=Professional%20mature%20woman%20working%20with%20technology%2C%20confident%20and%20inspiring%2C%20modern%20office%20environment%20with%20computers%20and%20tech%20equipment%2C%20warm%20lighting%2C%20contemporary%20workspace%20setting%2C%20successful%20career%20transition%20concept&width=400&height=300&seq=episode-1&orientation=landscape"
    },
    {
      id: 2,
      title: "Liderança Experiente: O valor do conhecimento acumulado",
      description: "Explorando como líderes seniores usam sua experiência para guiar equipes multigeracionais.",
      duration: "38 min",
      date: "8 Jan 2024",
      image: "https://readdy.ai/api/search-image?query=Mature%20business%20leader%20in%20boardroom%20setting%2C%20confident%20executive%20leading%20team%20meeting%2C%20professional%20corporate%20environment%2C%20inspiring%20leadership%20atmosphere%2C%20experienced%20professional%20guiding%20younger%20colleagues&width=400&height=300&seq=episode-2&orientation=landscape"
    },
    {
      id: 3,
      title: "Empreendedorismo na Maturidade: Começar aos 50+",
      description: "Histórias de sucesso de empreendedores que iniciaram seus negócios após os 50 anos.",
      duration: "45 min",
      date: "1 Jan 2024",
      image: "https://readdy.ai/api/search-image?query=Mature%20entrepreneur%20in%20modern%20startup%20office%2C%20confident%20business%20owner%20with%20innovative%20ideas%2C%20contemporary%20workspace%20with%20creative%20elements%2C%20inspiring%20entrepreneurial%20spirit%2C%20successful%20business%20launch%20concept&width=400&height=300&seq=episode-3&orientation=landscape"
    }
  ];

  return (
    <section id="episodios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Últimos Episódios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Venha explorar os desafios, vantagens e aprendizados das Empresas Familiares
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {episode.duration}
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                    <i className="ri-play-fill text-orange-500 text-2xl ml-1"></i>
                  </button>
                </div>
              </div>
            
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-orange-500 font-semibold">{episode.date}</span>
                  <span className="text-sm text-gray-500">Episódio #{episode.id}</span>
                </div>
            
                <h3 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
                  {episode.title}
                </h3>
            
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {episode.description}
                </p>
            
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                      <i className="ri-spotify-fill text-white"></i>
                    </button>
                    <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                      <i className="ri-youtube-fill text-white"></i>
                    </button>
                    <button className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                      <i className="ri-headphone-line text-white"></i>
                    </button>
                  </div>
              
                  <button className="text-orange-500 hover:text-orange-600 font-semibold cursor-pointer whitespace-nowrap">
                    Ouvir agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
            Ver Todos os Episódios
          </button>
        </div>
      </div>
    </section>
  );
}
