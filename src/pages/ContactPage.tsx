import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    childName: '',
    childAge: '',
    program: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, we would send this data to a server
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      childName: '',
      childAge: '',
      program: ''
    });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-blue-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contactez-nous</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Une question ? Besoin d'informations ? N'hésitez pas à nous contacter, nous serons ravis de vous répondre.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Informations de contact</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Adresse</h3>
                    <p className="text-gray-600">Ciné concorde, Cotonou, Bénin</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33123456789" className="hover:text-blue-600 transition-colors">+229 01 97 94 53 70</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@aigleskaters.fr" className="hover:text-blue-600 transition-colors">contact@aigleskaters.fr</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horaires de bureau</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 10h00 - 18h00</p>
                    <p className="text-gray-600">Samedi: 10h00 - 14h00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Comment nous trouver</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/18141781/pexels-photo-18141781/free-photo-of-skyline-d-une-ville-urbain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Carte de localisation" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Facilement accessible en transport en commun (Métro ligne 3, arrêt "Roller"), ou en voiture (parking à proximité).
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold mb-4">Pour une inscription (optionnel)</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">Nom de l'enfant</label>
                      <input
                        type="text"
                        id="childName"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">Âge de l'enfant</label>
                      <input
                        type="number"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        min="4"
                        max="18"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Programme d'intérêt</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Sélectionnez un programme</option>
                      <option value="découverte">Découverte (4-6 ans)</option>
                      <option value="fondamentaux">Fondamentaux (7-10 ans)</option>
                      <option value="performance">Performance (11-16 ans)</option>
                      <option value="elite">Elite (14-18 ans)</option>
                      <option value="stage">Stage vacances</option>
                      <option value="particulier">Cours particuliers</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>
                
                <div className="text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Envoyer le message
                    <Send size={18} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">Faut-il avoir son propre équipement ?</h3>
              <p className="text-gray-600">
                Pour les débutants, nous proposons du matériel en prêt pour les premières séances. Pour une pratique régulière, nous recommandons d'acquérir son propre équipement. Nos entraîneurs peuvent vous conseiller sur le matériel adapté.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">Comment s'inscrire aux cours ?</h3>
              <p className="text-gray-600">
                Les inscriptions se font en ligne via ce formulaire de contact, ou directement à notre bureau pendant les horaires d'ouverture. Un certificat médical de non contre-indication à la pratique du roller skating est obligatoire.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">Y a-t-il une période d'essai ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons une séance d'essai gratuite pour permettre à votre enfant de découvrir l'activité avant de s'engager. Il suffit de nous contacter pour réserver une place.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">Les cours sont-ils maintenus pendant les vacances scolaires ?</h3>
              <p className="text-gray-600">
                Les cours réguliers sont suspendus pendant les vacances scolaires, mais nous proposons des stages intensifs pendant ces périodes. Le calendrier détaillé est communiqué en début d'année.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">Est-il possible de payer en plusieurs fois ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons un paiement en trois fois sans frais. Les chèques vacances et coupons sport sont également acceptés. N'hésitez pas à nous contacter pour plus d'informations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;