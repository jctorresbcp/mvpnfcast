'use client';

export default function SponsorsSection() {
  return (
    <section id="patrocinio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Patrocínio
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                <strong>Conecte sua marca ao futuro do trabalho.</strong> O 50+ Cast é a ponte 
                entre sua empresa e um público de alto valor: profissionais experientes, 
                decisores e formadores de opinião.
              </p>
              
              <p className="leading-relaxed">
                Nossos ouvintes são líderes empresariais, gestores de RH, consultores e 
                profissionais que valorizam experiência e buscam constantemente evolução 
                em suas carreiras.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <i className="ri-team-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Audiência Qualificada</h3>
                  <p className="text-gray-600">Profissionais de alto nível e poder de decisão</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-trending-up-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Crescimento Constante</h3>
                  <p className="text-gray-600">Audiência em crescimento exponencial</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Posicionamento Premium</h3>
                  <p className="text-gray-600">Associe sua marca à valorização da experiência</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  Oportunidades de Patrocínio
                </h3>
                <p className="text-gray-600">
                  Escolha o formato que melhor se adequa aos seus objetivos
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold mb-3 text-orange-600">Patrocínio Episódio</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Menção no início e fim do episódio
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Logo nas plataformas digitais
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Post dedicado nas redes sociais
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-500">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-purple-600">Patrocínio Mensal</h4>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Todos os benefícios do episódio
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Logo permanente no site
                    </li>
                    <li className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      Conteúdo co-criado
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-300 shadow-xl whitespace-nowrap cursor-pointer">
                  Solicitar Mídia Kit
                </button>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"></div>
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-purple-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Empresas que já confiam no 50+ Cast
          </h3>
          <p className="text-gray-600 mb-8">
            Junte-se às marcas que valorizam a experiência e investem no futuro
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-2xl font-bold text-gray-400">EMPRESA A</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-2xl font-bold text-gray-400">EMPRESA B</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-2xl font-bold text-gray-400">EMPRESA C</span>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <span className="text-2xl font-bold text-gray-400">EMPRESA D</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}