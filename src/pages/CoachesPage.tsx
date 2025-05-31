import React from 'react';
import { coaches } from '../data/coaches';

const CoachesPage = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-blue-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nos Entraîneurs</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez notre équipe d'entraîneurs qualifiés et passionnés, dédiés à la progression de vos enfants.
          </p>
        </div>
      </section>

      {/* Coaches team section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Une équipe expérimentée</h2>
          
          <div className="grid grid-cols-1 gap-16">
            {coaches.map((coach, index) => (
              <div key={coach.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="md:w-2/5">
                  <div className="relative">
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[3/4]"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white py-2 px-4 rounded-lg shadow-md">
                      <p className="font-bold text-blue-600">{coach.experience}</p>
                      <p className="text-sm text-gray-500">d'expérience</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold mb-2">{coach.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{coach.role}</p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {coach.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Spécialités:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join our team */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Rejoignez notre équipe</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Vous êtes passionné(e) par le roller skating et l'enseignement aux jeunes ? Aigle Skaters recherche régulièrement des entraîneurs qualifiés et motivés pour rejoindre notre équipe.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Postes recherchés :</h3>
              
              <div className="mb-6">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold">Entraîneur assistant</p>
                      <p className="text-gray-600">Pour accompagner nos entraîneurs principaux et encadrer les groupes débutants.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold">Entraîneur spécialisé en roller hockey</p>
                      <p className="text-gray-600">Pour développer une nouvelle section dédiée au roller hockey pour les jeunes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-semibold">Chorégraphe</p>
                      <p className="text-gray-600">Pour créer et superviser les routines artistiques de nos groupes performance et élite.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700 mb-6">
                Nous recherchons des personnes motivées, pédagogues et titulaires de qualifications en roller skating (BEES, CQP, etc.). Une expérience préalable avec les enfants est un plus.
              </p>
              
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Postuler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoachesPage;