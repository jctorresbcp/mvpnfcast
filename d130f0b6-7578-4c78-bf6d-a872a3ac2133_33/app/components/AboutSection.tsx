
'use client';

export default function AboutSection() {
  return (
    <section id="podcast" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Sobre o "Negócios Familiares Cast"
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                O <strong>"Negócios Familiares Cast"</strong> é mais que um Podcast – é um movimento de valorização 
                das Empresas Familiares e do seu potencial transformador na sociedade.
              </p>
              
              <p className="leading-relaxed">
                Nossa missão é inspirar e valorizar empreendedores familiares, compartilhando histórias reais 
                de quem superou barreiras, construindo negócios prósperos e criando um grande legado social.
              </p>
              
              <p className="leading-relaxed">
                Venha explorar os desafios, vantagens e aprendizados das Empresas Familiares
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl border-l-4 border-orange-500">
              <p className="text-gray-600 italic text-lg">
                "Trajetórias que unem famílias, sucesso e propósito."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center mb-6">
                <img 
                  src="https://static.readdy.ai/image/ce540b20b461a1f41e5f73575daba3ba/16b86299c981d6c07b61bcea707211c7.jfif"
                  alt="Fábio Rocha"
                  className="w-20 h-20 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Fábio Rocha</h3>
                  <p className="text-orange-500 font-semibold">Apresentador</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  <strong>Consultor e Especialista em Carreira</strong><br/>
                  Diretor Executivo da Damicos Consultoria
                </p>
                
                <p className="leading-relaxed">
                  Com mais de duas décadas de experiência em desenvolvimento de carreiras 
                  e estratégias corporativas, Fábio Rocha é uma referência em orientação 
                  profissional para executivos e empresas.
                </p>
                
                <div className="flex items-center space-x-4 pt-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-linkedin-box-fill text-blue-600 text-xl"></i>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-mail-line text-orange-500 text-xl"></i>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-phone-line text-purple-600 text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
