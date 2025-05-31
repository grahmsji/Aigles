export interface Coach {
  id: number;
  name: string;
  role: string;
  bio: string;
  experience: string;
  specialties: string[];
  image: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'competition' | 'demonstration' | 'training' | 'other';
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  author: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'competition' | 'training' | 'event' | 'other';
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar?: string;
}