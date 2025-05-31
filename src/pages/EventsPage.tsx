import React, { useState } from 'react';
import { events } from '../data/events';
import { Calendar, MapPin, Clock, Filter } from 'lucide-react';

const EventsPage = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-blue-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Événements</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos prochains événements, compétitions et démonstrations. Rejoignez-nous pour célébrer le roller skating !
          </p>
        </div>
      </section>

      {/* Events section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Événements à venir</h2>
            
            {/* Filter */}
            <div className="flex items-center bg-gray-100 p-1 rounded-lg">
              <Filter size={18} className="text-gray-500 ml-2 mr-1" />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-gray-700 py-1 pr-8 pl-1"
              >
                <option value="all">Tous les événements</option>
                <option value="competition">Compétitions</option>
                <option value="demonstration">Démonstrations</option>
                <option value="training">Stages/Formations</option>
                <option value="other">Autres</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map(event => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-lg">
                    {event.category === 'competition' && 'Compétition'}
                    {event.category === 'demonstration' && 'Démonstration'}
                    {event.category === 'training' && 'Formation'}
                    {event.category === 'other' && 'Événement'}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="text-blue-600 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="text-blue-600 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="text-blue-600 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {event.description}
                  </p>
                  
                  <div className="flex justify-end">
                    <button className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-lg transition-colors">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucun événement ne correspond à votre filtre actuellement.</p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Voir tous les événements
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Calendar section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Calendrier annuel</h2>
            <p className="text-gray-700 mb-8">
              Consultez notre calendrier annuel pour ne manquer aucun de nos événements importants. De la rentrée de septembre au gala de fin d'année, retrouvez toutes les dates clés de notre saison.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Dates clés de la saison 2023-2024</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Sept 2023
                  </div>
                  <p className="text-gray-700">Portes ouvertes et inscriptions</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Nov 2023
                  </div>
                  <p className="text-gray-700">Championnat Régional Junior</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Déc 2023
                  </div>
                  <p className="text-gray-700">Gala de Noël</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Fév 2024
                  </div>
                  <p className="text-gray-700">Stage Intensif Vacances d'Hiver</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Mars 2024
                  </div>
                  <p className="text-gray-700">Championnat National Junior</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Avril 2024
                  </div>
                  <p className="text-gray-700">Stage Intensif Vacances de Printemps</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Mai 2024
                  </div>
                  <p className="text-gray-700">Démonstration Fête de la Ville</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Juin 2024
                  </div>
                  <p className="text-gray-700">Tournoi "Jeunes Aigles" et Gala de fin d'année</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Juil 2024
                  </div>
                  <p className="text-gray-700">Stages d'été (2 semaines)</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 px-3 py-1 rounded-lg text-blue-800 font-semibold text-sm mr-3 whitespace-nowrap">
                    Août 2024
                  </div>
                  <p className="text-gray-700">Stage de préparation pré-rentrée</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-sm">
                  * Ce calendrier est susceptible d'être modifié. Veuillez consulter régulièrement notre site ou notre page Facebook pour les mises à jour.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
              >
                S'inscrire à un événement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;