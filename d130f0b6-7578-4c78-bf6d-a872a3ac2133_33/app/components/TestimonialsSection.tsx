'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ana Paula Silva",
      role: "Diretora de RH - TechCorp",
      age: 52,
      text: "O 50+ Cast me inspirou a repensar nossa estratégia de contratação. A experiência dos profissionais maduros é um tesouro que muitas empresas estão desperdiçando.",
      image: "https://readdy.ai/api/search-image?query=Professional%20mature%20businesswoman%20in%20her%2050s%2C%20confident%20HR%20director%2C%20warm%20smile%2C%20executive%20appearance%2C%20professional%20headshot%20with%20soft%20lighting%2C%20sophisticated%20and%20inspiring%20demeanor%2C%20corporate%20setting&width=120&height=120&seq=testimonial-1&orientation=squarish"
    },
    {
      id: 2,
      name: "Roberto Mendes",
      role: "Convidado - Ep. 15",
      age: 58,
      text: "Participar do podcast foi transformador. Fábio tem a habilidade única de extrair o melhor de cada história, mostrando que nossa jornada profissional está longe de acabar.",
      image: "https://readdy.ai/api/search-image?query=Professional%20mature%20businessman%20in%20his%20late%2050s%2C%20confident%20executive%2C%20distinguished%20appearance%2C%20warm%20and%20approachable%20expression%2C%20business%20attire%2C%20inspiring%20professional%20headshot%20with%20contemporary%20styling&width=120&height=120&seq=testimonial-2&orientation=squarish"
    },
    {
      id: 3,
      name: "Carla Rodrigues",
      role: "Ouvinte Fiel",
      age: 49,
      text: "Cada episódio é uma dose de motivação. Estou me preparando para uma grande mudança na minha carreira e o podcast tem sido meu guia nessa jornada.",
      image: "https://readdy.ai/api/search-image?query=Professional%20mature%20woman%20approaching%2050%2C%20confident%20and%20determined%2C%20inspiring%20expression%2C%20contemporary%20business%20attire%2C%20warm%20lighting%2C%20motivational%20and%20empowering%20appearance%2C%20career%20transition%20concept&width=120&height=120&seq=testimonial-3&orientation=squarish"
    },
    {
      id: 4,
      name: "José Antonio",
      role: "Empreendedor - Convidado Ep. 23",
      age: 61,
      text: "Aos 61 anos, lancei minha startup depois de ouvir histórias similares no 50+ Cast. A idade não é barreira, é experiência concentrada!",
      image: "https://readdy.ai/api/search-image?query=Distinguished%20mature%20entrepreneur%20in%20his%2060s%2C%20confident%20startup%20founder%2C%20inspiring%20business%20leader%2C%20professional%20headshot%20with%20warm%20lighting%2C%20successful%20and%20innovative%20appearance%2C%20entrepreneurial%20spirit&width=120&height=120&seq=testimonial-4&orientation=squarish"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Depoimentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o impacto real que o 50+ Cast está causando na vida de profissionais, 
            empresas e nossa comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-orange-500 font-semibold">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.age} anos</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 flex items-center justify-center">
                  <i className="ri-double-quotes-l text-orange-500 text-2xl"></i>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg italic pl-6">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill"></i>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">Avaliação 5.0</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Quer compartilhar sua experiência?
            </h3>
            <p className="text-gray-600 mb-6">
              Envie seu depoimento ou candidate-se para ser nosso próximo convidado!
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Enviar Depoimento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}