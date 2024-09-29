import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'lucide-react';
import Card from '../atoms/Card';

const EventCard = ({ title, date, image, className }) => (
  <Card
    imageUrl={image}
    imageAlt={title}
    imageClassName="h-60"
    title={title}
    className={className}
    content={
      <p className="text-gray-600 flex items-center">
        <Calendar className="w-4 h-4 mr-2" /> {date}
      </p>
    }
  />
);

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default EventCard;