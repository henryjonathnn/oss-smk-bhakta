import React from 'react';
import { Calendar } from 'lucide-react';
import LazyImage from '../Context/LazyImage';

const EventCard = ({ title, date, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <LazyImage src={image} alt={title} className="w-full h-48" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 flex items-center">
        <Calendar className="w-4 h-4 mr-2" /> {date}
      </p>
    </div>
  </div>
);

export default EventCard;