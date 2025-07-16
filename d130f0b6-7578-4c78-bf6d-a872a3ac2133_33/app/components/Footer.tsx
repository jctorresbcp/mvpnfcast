'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">50+</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
                  50+ Cast
                </h3>
                <p className="text-gray-400 text-sm">O futuro é agora</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Inspirando profissionais maduros a construir carreiras de impacto e 
              redefinir o mercado de trabalho com experiência e inovação.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 cursor-pointer">
                <i className="ri-spotify-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center hover:from-red-600 hover:to-pink-600 transition-all duration-300 cursor-pointer">
                <i className="ri-youtube-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 cursor-pointer">
                <i className="ri-linkedin-box-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-orange-400">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#podcast" className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  O Podcast
                </a>
              </li>
              <li>
                <a href="#episodios" className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Episódios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#patrocinio" className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                  Patrocínio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-purple-400">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-orange-400"></i>
                </div>
                <span className="text-gray-300 text-sm">nfcast@ailhaconecta.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-orange-400"></i>
                </div>
                <span className="text-gray-300 text-sm">(71) 99372-0007</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-map-pin-line text-orange-400"></i>
                </div>
                <span className="text-gray-300 text-sm">Salvador, BA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 50+ Cast. Todos os direitos reservados.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span>Criado por</span>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors font-semibold cursor-pointer">
                  Ruptus Digital
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>Produção:</span>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold cursor-pointer">
                  Estúdio Audiovisual "A Ilha"
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
