import React from 'react';
import { ArrowRight, Calendar, User, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ 
          backgroundImage: 'url("/images/aigles.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Association Sportive</span>
            <span className="text-blue-400">Aigle Skaters</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            Formez vos enfants et jeunes aux joies du roller skating dans un environnement professionnel et passionné
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos programmes
            </Link>
            <Link 
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ce que nous offrons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <User size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Cours adaptés</h3>
              <p className="text-gray-600 text-center">
                Des cours adaptés à tous les niveaux, de débutant à expert, et à toutes les tranches d'âge.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Entraîneurs qualifiés</h3>
              <p className="text-gray-600 text-center">
                Une équipe d'entraîneurs expérimentés et passionnés, formés aux meilleures techniques.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">Événements réguliers</h3>
              <p className="text-gray-600 text-center">
                Des compétitions, démonstrations et événements spéciaux tout au long de l'année.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos programmes d'entraînement</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Découvrez nos différents programmes adaptés à tous les âges et niveaux. Que votre enfant soit débutant ou qu'il souhaite se perfectionner, nous avons le programme idéal pour lui.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Découverte (4-6 ans)</h3>
                    <p className="text-gray-600">Initiation ludique aux bases du roller skating.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Fondamentaux (7-10 ans)</h3>
                    <p className="text-gray-600">Apprentissage technique des mouvements essentiels.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Performance (11-16 ans)</h3>
                    <p className="text-gray-600">Perfectionnement et préparation aux compétitions.</p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/programs"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Voir tous les programmes
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="md:w-1/2 relative">
              <img 
                src="/images/Aigles (240).jpg" 
                alt="Enfants pratiquant le roller" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-blue-600">+500</p>
                <p className="text-gray-600 text-sm">Jeunes formés</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-blue-600">10+</p>
                <p className="text-gray-600 text-sm">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ce que disent nos membres</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sophie Martin</h4>
                  <p className="text-gray-500 text-sm">Parent d'un enfant de 8 ans</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Mon fils a progressé de façon impressionnante en seulement quelques mois. Les entraîneurs sont attentifs et très pédagogues. Je recommande vivement!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">T</span>
                </div>
                <div>
                  <h4 className="font-semibold">Thomas Dupont</h4>
                  <p className="text-gray-500 text-sm">Parent d'une adolescente de 14 ans</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Ma fille a trouvé sa passion grâce à Aigle Skaters. L'ambiance est à la fois sérieuse et conviviale. Les progrès sont constants et l'encadrement est exemplaire."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">L</span>
                </div>
                <div>
                  <h4 className="font-semibold">Lucas Petit</h4>
                  <p className="text-gray-500 text-sm">Jeune patineur de 12 ans</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "J'adore venir aux entraînements! Les coachs sont géniaux et j'ai pu participer à ma première compétition cette année. C'est vraiment cool!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à rejoindre l'aventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inscrivez votre enfant dès aujourd'hui et offrez-lui la chance de développer une passion pour le roller skating.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            S'inscrire maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;