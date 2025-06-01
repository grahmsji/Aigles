import React, { useState } from 'react';
import { galleryItems } from '../data/gallery';
import { X, Filter } from 'lucide-react';

const GalleryPage = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getSelectedItem = () => {
    return galleryItems.find(item => item.id === selectedImage);
  };

  const getNextImageId = () => {
    if (selectedImage === null) return null;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    return currentIndex < galleryItems.length - 1 ? galleryItems[currentIndex + 1].id : galleryItems[0].id;
  };

  const getPrevImageId = () => {
    if (selectedImage === null) return null;
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    return currentIndex > 0 ? galleryItems[currentIndex - 1].id : galleryItems[galleryItems.length - 1].id;
  };

  return (
    <div className="pt-24 pb-16">
      {/* Hero section */}
      <section className="bg-blue-600 py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Galerie</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez en images les moments forts de notre association, de nos compétitions et de nos entraînements.
          </p>
        </div>
      </section>

      {/* Gallery section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Nos photos</h2>
            
            {/* Filter */}
            <div className="flex items-center bg-gray-100 p-1 rounded-lg">
              <Filter size={18} className="text-gray-500 ml-2 mr-1" />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-gray-700 py-1 pr-8 pl-1"
              >
                <option value="all">Toutes les photos</option>
                <option value="competition">Compétitions</option>
                <option value="training">Entraînements</option>
                <option value="event">Événements</option>
                <option value="other">Autres</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
              <div 
                key={item.id} 
                className="relative group overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => openLightbox(item.id)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Aucune photo ne correspond à votre filtre actuellement.</p>
              <button 
                onClick={() => setFilter('all')}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                Voir toutes les photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <div className="w-full max-w-5xl">
            <div className="relative">
              <img 
                src={getSelectedItem()?.image} 
                alt={getSelectedItem()?.title} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-r-lg hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(getPrevImageId())}
              >
                &lt;
              </button>
              
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-l-lg hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(getNextImageId())}
              >
                &gt;
              </button>
            </div>
            
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">{getSelectedItem()?.title}</h3>
              <p className="text-gray-500 mb-2">{getSelectedItem()?.date}</p>
              <p className="text-gray-700">{getSelectedItem()?.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Nos vidéos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%]">
                  <img 
                    src="https://ik.imagekit.io/16fpzbjyo/No-video-title-fdown.net.mp4?updatedAt=1748795197296" 
                    alt="Vidéo gala fin d'année" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Gala de fin d'année 2023</h3>
                  <p className="text-gray-600">Les moments forts de notre gala annuel sur le thème "Voyage autour du monde".</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative pb-[56.25%]">
                  <img 
                    src="https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Stage de patinage" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">Stage de patinage</h3>
                  <p className="text-gray-600">Stage de patinage organisé par EYA Centre Communautaire Stage participé par certains de nos athlètes. Très émus les athlètes.</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Retrouvez plus de vidéos de nos événements, compétitions et démonstrations sur notre chaîne YouTube.
            </p>
            
                <a 
          href="https://web.facebook.com/Aigleskaterakpakpa/photos?locale=fr_FR&_rdc=1&_rdr" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Notre page Facebook
        </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;