import React, { Suspense } from 'react';
import { ChevronRight } from 'lucide-react';
import EventCard from './EventCard';

const EventSection = ({ events }) => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Event Terakhir</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>}>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </Suspense>
      </div>
      <div className="text-center mt-12">
        <a href="/event" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg">
          Lihat Semua Event <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  </section>
);

export default EventSection;