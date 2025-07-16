
'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Helena Santos",
      role: "2ª Geração - Empresa Familiar",
      age: 52,
      text: "O podcast me ajudou a entender que os conflitos na sucessão são normais. Aprendi estratégias para separar questões familiares dos negócios sem perder o afeto.",
      image: "https://readdy.ai/api/search-image?query=Professional%20mature%20businesswoman%20in%20her%2050s%20from%20family%20business%2C%20confident%20second%20generation%20leader%2C%20warm%20smile%2C%20executive%20appearance%20in%20family%20enterprise%20setting%2C%20professional%20headshot%20with%20heritage%20business%20atmosphere&width=120&height=120&seq=family-testimonial-1&orientation=squarish"
    },
    {
      id: 2,
      name: "Carlos Roberto Lima",
      role: "Fundador - Convidado Ep. 15",
      age: 68,
      text: "Depois de 40 anos resistindo à sucessão, o episódio me fez perceber que preparar meus filhos é o maior legado que posso deixar. A transição começou!",
      image: "https://readdy.ai/api/search-image?query=Distinguished%20mature%20businessman%20in%20his%20late%2060s%2C%20family%20business%20founder%2C%20wise%20and%20experienced%20expression%2C%20professional%20patriarch%20of%20family%20enterprise%2C%20inspiring%20business%20leader%20with%20legacy%20mindset&width=120&height=120&seq=family-testimonial-2&orientation=squarish"
    },
    {
      id: 3,
      name: "Ana Beatriz Rocha",
      role: "3ª Geração - Sucessora",
      age: 32,
      text: "Como jovem executiva assumindo o negócio da família, o podcast me deu coragem para implementar mudanças respeitando a tradição familiar.",
      image: "https://readdy.ai/api/search-image?query=Young%20professional%20woman%20in%20her%2030s%2C%20third%20generation%20family%20business%20successor%2C%20confident%20and%20modern%20executive%2C%20contemporary%20business%20attire%2C%20inspiring%20next%20generation%20family%20business%20leader&width=120&height=120&seq=family-testimonial-3&orientation=squarish"
    },
    {
      id: 4,
      name: "Roberto Meneses",
      role: "Consultor - Especialista em Governança",
      age: 55,
      text: "Indico o podcast para todas as famílias empresárias que atendo. É um material rico em casos reais e soluções práticas para conflitos familiares.",
      image: "https://readdy.ai/api/search-image?query=Professional%20mature%20consultant%20in%20his%2050s%2C%20family%20business%20governance%20expert%2C%20confident%20advisor%20expression%2C%20executive%20appearance%20with%20consulting%20expertise%2C%20professional%20business%20advisor%20specializing%20in%20family%20enterprises&width=120&height=120&seq=family-testimonial-4&orientation=squarish"
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
            Veja como famílias empresárias estão transformando desafios em oportunidades 
            com os aprendizados do nosso podcast.
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
