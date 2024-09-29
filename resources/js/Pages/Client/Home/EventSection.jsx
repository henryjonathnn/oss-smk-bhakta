import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import EventCard from '../../../Components/molecules/EventCard';

const EventSection = ({ events }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </Suspense>
      </div>
    </div>
  </section>
);

EventSection.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventSection;