import React from 'react';
import { Shield, Users, Target, Trophy } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-blue-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">À propos de nous</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez l'histoire, la mission et les valeurs qui guident l'Association Sportive Aigle Skaters depuis sa création.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre Histoire</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Fondée en 2010 par un groupe de passionnés de roller skating, l'Association Sportive Aigle Skaters est née de la volonté de promouvoir ce sport auprès des jeunes et de leur offrir un encadrement de qualité.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Au fil des années, notre association s'est développée pour devenir une référence dans l'enseignement du roller skating pour les enfants et les jeunes. Nous avons formé des centaines de jeunes patineurs, dont certains ont atteint des niveaux de compétition nationale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Aujourd'hui, nous sommes fiers de continuer à transmettre notre passion et notre savoir-faire à de nouvelles générations de patineurs, tout en préservant l'esprit familial et convivial qui caractérise notre association.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3621183/pexels-photo-3621183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Groupe de jeunes patineurs"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded shadow-lg">
                <p className="text-blue-600 font-bold">Depuis 2010</p>
                <p className="text-gray-600">Au service des jeunes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Notre Mission et Nos Valeurs</h2>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Notre Mission</h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
                Permettre à chaque enfant et jeune de découvrir et de développer sa passion pour le roller skating dans un environnement sécurisé, professionnel et bienveillant, favorisant à la fois l'épanouissement personnel et l'excellence sportive.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Nos Valeurs</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Sécurité</h4>
                    <p className="text-gray-600">
                      La sécurité de nos jeunes patineurs est notre priorité absolue. Nous veillons à offrir un environnement d'apprentissage sécurisé avec un équipement adapté.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Inclusion</h4>
                    <p className="text-gray-600">
                      Nous accueillons tous les enfants, quels que soient leur niveau, leur origine ou leurs capacités. Chacun trouve sa place au sein de notre association.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Excellence</h4>
                    <p className="text-gray-600">
                      Nous visons l'excellence dans notre enseignement et encourageons chaque jeune à donner le meilleur de lui-même, selon ses propres objectifs.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Trophy size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Esprit d'équipe</h4>
                    <p className="text-gray-600">
                      Nous cultivons l'esprit d'équipe et la solidarité, tout en respectant le parcours individuel de chaque patineur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Notre Équipe</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Notre association est composée d'une équipe dynamique d'entraîneurs qualifiés, de bénévoles passionnés et de membres du conseil d'administration dévoués à la réussite de nos jeunes patineurs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">5</span>
              </div>
              <h3 className="font-bold text-lg">Entraîneurs certifiés</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">10</span>
              </div>
              <h3 className="font-bold text-lg">Bénévoles actifs</h3>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">7</span>
              </div>
              <h3 className="font-bold text-lg">Membres du conseil</h3>
            </div>
          </div>
          
          <div className="mt-12">
            <a 
              href="/coaches" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Découvrir nos entraîneurs
            </a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos Réalisations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">Compétitions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Participation régulière aux championnats régionaux et nationaux</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">15 médailles remportées lors des derniers championnats juniors</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Organisation annuelle du tournoi "Jeunes Aigles" depuis 2015</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">Formation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Plus de 500 jeunes formés depuis notre création</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Programme "Jeunes Entraîneurs" pour former la relève</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Partenariats avec 5 écoles locales pour des initiations</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">Événements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Gala annuel avec plus de 300 spectateurs</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Participation aux événements sportifs de la ville</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Organisation de stages pendant les vacances scolaires</p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-600">Reconnaissance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Label "Association sportive de qualité" décerné en 2020</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Mention d'excellence pour notre engagement auprès des jeunes</p>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <p className="text-gray-700">Partenaire officiel de la fédération nationale de roller skating</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;