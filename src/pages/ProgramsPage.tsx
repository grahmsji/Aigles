import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, User, Award, ArrowRight, Star } from 'lucide-react';

const ProgramsPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-blue-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Programmes</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos différents programmes d'entraînement adaptés à tous les âges et niveaux de compétence.
          </p>
        </div>
      </section>

      {/* Programs overview */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Programmes par Âge</h2>
          
          <div className="grid gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-50 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Découverte</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">4 à 6 ans</p>
                  <div className="flex items-center mb-1">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-gray-300 mr-1" />
                    <Star size={16} className="text-gray-300 mr-1" />
                    <Star size={16} className="text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-500">Niveau: Débutant</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Ce programme d'initiation est spécialement conçu pour les tout-petits qui découvrent le roller skating. À travers des jeux et des activités ludiques, les enfants développent leur équilibre, leur coordination et leur confiance.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2 h par séance</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2 séance par semaine</span>
                    </div>
                    <div className="flex items-center">
                      <User size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Groupes de 8 maximum</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Médailles de progression</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    S'inscrire au programme
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-50 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Fondamentaux</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">3 à 15 ans</p>
                  <div className="flex items-center mb-1">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-gray-300 mr-1" />
                    <Star size={16} className="text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-500">Niveau: Intermédiaire</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Dans ce programme, les enfants apprennent les techniques fondamentales du roller skating: propulsion, freinage, virages et posture correcte. Les exercices sont structurés pour renforcer la technique tout en restant amusants.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2h par séance</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2 séances par semaine</span>
                    </div>
                    <div className="flex items-center">
                      <User size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Groupes de 10 maximum</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Compétitions amicales</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    S'inscrire au programme
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-50 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Performance</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">11 à 16 ans</p>
                  <div className="flex items-center mb-1">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-gray-300" />
                  </div>
                  <p className="text-sm text-gray-500">Niveau: Avancé</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Un programme intensif qui prépare les jeunes patineurs à la compétition. Les entraînements comprennent des techniques avancées, de la préparation physique spécifique et des routines chorégraphiées pour développer la performance.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2 h par séance</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2 séances par semaine</span>
                    </div>
                    <div className="flex items-center">
                      <User size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Groupes de 8 maximum</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Compétitions régionales/nationales</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    S'inscrire au programme
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Program 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-blue-50 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">Elite</h3>
                  <p className="text-lg font-medium text-gray-700 mb-4">14 à 18 ans</p>
                  <div className="flex items-center mb-1">
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400 mr-1" />
                    <Star size={16} className="text-yellow-400" />
                  </div>
                  <p className="text-sm text-gray-500">Niveau: Expert</p>
                </div>
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-700 mb-4">
                    Réservé aux patineurs les plus prometteurs, ce programme d'élite offre un entraînement personnalisé de haut niveau. Il comprend du coaching individuel, de la préparation mentale et un suivi complet pour atteindre l'excellence.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">2h par séance</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">4-5 séances par semaine</span>
                    </div>
                    <div className="flex items-center">
                      <User size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Coaching personnalisé</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={18} className="text-blue-600 mr-2" />
                      <span className="text-gray-600">Compétitions nationales/internationales</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    S'inscrire au programme
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special programs */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Programmes Spéciaux</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Special Program 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Calendar size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Stages Vacances</h3>
              <p className="text-gray-600 mb-4">
                Stages intensifs d'une semaine pendant les vacances scolaires pour progresser rapidement et s'amuser entre amis.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Durée: 5 jours (10h-16h)</p>
                <p>Âges: 6-16 ans (groupes par niveau)</p>
                <p>Repas: Déjeuner inclus</p>
              </div>
              <Link 
                to="/contact" 
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
            
            {/* Special Program 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <User size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cours Particuliers</h3>
              <p className="text-gray-600 mb-4">
                Sessions individuelles avec nos entraîneurs pour un progrès accéléré et une attention personnalisée.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Durée: 45min ou 1h</p>
                <p>Fréquence: À la demande</p>
                <p>Tous niveaux, tous âges</p>
              </div>
              <Link 
                to="/contact" 
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
            
            {/* Special Program 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Award size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Préparation Compétition</h3>
              <p className="text-gray-600 mb-4">
                Programme spécifique pour les patineurs souhaitant participer aux compétitions régionales et nationales.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Séances techniques spécifiques</p>
                <p>Préparation physique et mentale</p>
                <p>Coaching pendant les compétitions</p>
              </div>
              <Link 
                to="/contact" 
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Horaires des Cours</h2>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-gray-700 mb-6 text-center">
                Nos cours se déroulent les week-end. Consultez le planning ci-dessous pour trouver l'horaire qui vous convient.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Jour</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Horaire</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Programme</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Âge</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Samedi</td>
                      <td className="py-3 px-4 text-gray-700">16h00 - 18h00</td>
                      <td className="py-3 px-4 text-gray-700">Découverte</td>
                      <td className="py-3 px-4 text-gray-700">4-6 ans</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-gray-700">Samedi</td>
                      <td className="py-3 px-4 text-gray-700">16h00 - 18h00</td>
                      <td className="py-3 px-4 text-gray-700">Fondamentaux</td>
                      <td className="py-3 px-4 text-gray-700">7-10 ans</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                * Les horaires peuvent être modifiés en fonction des besoins et des disponibilités des salles d'entraînement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center">Tarifs et Inscriptions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Price Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-blue-600 p-6 text-white text-center">
                <h3 className="text-xl font-bold">Découverte</h3>
                <p className="text-3xl font-bold mt-2">150€<span className="text-sm font-normal">/an</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">1 séance par semaine</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Licence fédérale incluse</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Prêt de matériel possible</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Gala de fin d'année</p>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full bg-blue-600 text-white text-center font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
            
            {/* Price Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-blue-600 p-6 text-white text-center">
                <h3 className="text-xl font-bold">Fondamentaux</h3>
                <p className="text-3xl font-bold mt-2">250€<span className="text-sm font-normal">/an</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">2 séances par semaine</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Licence fédérale incluse</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Compétitions amicales</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">T-shirt du club offert</p>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full bg-blue-600 text-white text-center font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
            
            {/* Price Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-blue-600 p-6 text-white text-center">
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-3xl font-bold mt-2">350€<span className="text-sm font-normal">/an</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">3 séances par semaine</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Licence compétition incluse</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Participation aux compétitions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Équipement du club inclus</p>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full bg-blue-600 text-white text-center font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
            
            {/* Price Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-blue-600 p-6 text-white text-center">
                <h3 className="text-xl font-bold">Elite</h3>
                <p className="text-3xl font-bold mt-2">500€<span className="text-sm font-normal">/an</span></p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">4-5 séances par semaine</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Coaching personnalisé</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Préparation physique</p>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-2">✓</div>
                    <p className="text-gray-600">Équipement complet inclus</p>
                  </li>
                </ul>
                <Link 
                  to="/contact" 
                  className="block w-full bg-blue-600 text-white text-center font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Paiement en plusieurs fois possible. Réduction pour les fratries (-10% à partir du 2ème enfant).
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Nous contacter pour plus d'informations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;