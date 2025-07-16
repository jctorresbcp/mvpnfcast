
'use client';

export default function EpisodesSection() {
  const episodes = [
    {
      id: 1,
      title: "Sucessão Familiar: Quando o fundador não quer sair",
      description: "O dilema emocional da passagem de bastão e como encontrar o momento certo para a transição geracional sem destruir relacionamentos.",
      duration: "42 min",
      date: "15 Jan 2024",
      image: "https://readdy.ai/api/search-image?query=Mature%20business%20founder%20sitting%20across%20from%20younger%20family%20member%20in%20elegant%20office%2C%20serious%20conversation%20about%20business%20succession%2C%20emotional%20family%20business%20transition%20moment%2C%20professional%20setting%20with%20family%20photos%20on%20desk%2C%20warm%20lighting%20capturing%20generational%20dialogue&width=400&height=300&seq=succession-episode&orientation=landscape"
    },
    {
      id: 2,
      title: "Conflitos Familiares: Separando o Pessoal do Profissional",
      description: "Como estabelecer limites saudáveis entre jantar de domingo e reunião de segunda-feira, mantendo harmonia familiar e eficiência empresarial.",
      duration: "38 min",
      date: "8 Jan 2024",
      image: "https://readdy.ai/api/search-image?query=Family%20members%20in%20tense%20business%20meeting%2C%20professional%20boardroom%20setting%20with%20family%20dynamics%20visible%2C%20challenging%20family%20business%20discussion%2C%20documents%20and%20charts%20on%20table%2C%20modern%20corporate%20environment%20with%20emotional%20undertones&width=400&height=300&seq=conflict-episode&orientation=landscape"
    },
    {
      id: 3,
      title: "Governança que Funciona: Estruturas para Empresas Familiares",
      description: "Cases reais de empresas que criaram conselhos de família eficazes e protocolos que preservam tanto o negócio quanto os laços familiares.",
      duration: "45 min",
      date: "1 Jan 2024",
      image: "https://readdy.ai/api/search-image?query=Professional%20family%20council%20meeting%20in%20modern%20boardroom%2C%20diverse%20family%20members%20around%20conference%20table%20with%20governance%20documents%2C%20formal%20family%20business%20governance%20structure%2C%20corporate%20family%20meeting%20with%20charts%20and%20protocols%20visible&width=400&height=300&seq=governance-episode&orientation=landscape"
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
            Explore os desafios reais, conflitos inevitáveis e soluções práticas dos negócios familiares
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
