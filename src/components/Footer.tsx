import React from 'react';
import { Link } from 'react-router-dom';
import { Heater as Skate, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Skate size={28} className="text-blue-400" />
              <span className="text-xl font-bold">Aigle Skaters</span>
            </div>
            <p className="text-gray-300 mb-4">
              Association sportive dédiée à l'enseignement et à la pratique du roller skating pour les enfants et les jeunes.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/Aigleskaterakpakpa?locale=fr_FR" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">À propos</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-blue-400 transition-colors">Programmes</Link></li>
              <li><Link to="/coaches" className="text-gray-300 hover:text-blue-400 transition-colors">Entraîneurs</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-blue-400 transition-colors">Événements</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-blue-400 transition-colors">Galerie</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Ciné concorde, Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+33123456789" className="text-gray-300 hover:text-blue-400 transition-colors">+229 01 97 94 53 70</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@aigleskaters.fr" className="text-gray-300 hover:text-blue-400 transition-colors">contact@aigleskaters.fr</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Horaires d'ouverture</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-300">Lundi - Vendredi:</span>
                <span className="text-gray-300">14h00 - 20h00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Samedi:</span>
                <span className="text-gray-300">10h00 - 18h00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Dimanche:</span>
                <span className="text-gray-300">10h00 - 14h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Association Sportive Aigle Skaters. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;