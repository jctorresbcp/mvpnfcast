
'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mensagem.length > 500) return;
    
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        setSubmitStatus('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setSubmitStatus('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setSubmitStatus('Erro ao enviar mensagem. Tente novamente.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem uma história inspiradora para compartilhar? Quer ser nosso próximo convidado 
            ou patrocinador? Entre em contato conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Vamos conversar!</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <i className="ri-mail-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">nfcast@ailhaconecta.com.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-phone-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Telefone</h4>
                  <p className="text-gray-600">(71) 99372-0007</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <i className="ri-linkedin-box-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">LinkedIn</h4>
                  <p className="text-gray-600">linkedin.com/in/fabio-rocha</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl">
              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Quer participar como convidado?
              </h4>
              <p className="text-gray-600 mb-4">
                Procuramos profissionais 50+ com histórias inspiradoras de carreira, 
                transição profissional ou empreendedorismo.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-purple-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
                Candidate-se
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie sua mensagem</h3>

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.mensagem.length}/500 caracteres
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.mensagem.length > 500}
                className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>

            {submitStatus && (
              <div className={`mt-4 p-4 rounded-lg ${submitStatus.includes('sucesso') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
