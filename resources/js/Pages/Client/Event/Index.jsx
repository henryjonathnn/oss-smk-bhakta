import React from 'react';
import { Head } from '@inertiajs/react';
import ClientLayout from '../../../Components/templates/ClientLayouts';
import { StrukturalCard, CenteredCardContainer } from '../../../Components/molecules/StrukturalCard';
import EventCard from '../../../Components/molecules/EventCard';
import Hero from '../Home/Hero';

const events = [
  { title: "MPLS Bhakta 2023", date: "15 Juli 2023", image: "/assets/img/event/mpls2023.jpg" },
  { title: "PHBN 2023", date: "31 Agustus 2023", image: "/assets/img/event/phbn2023.jpg" },
  { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" }
];

const EventPage = () => {
  return (
    <ClientLayout>
      <Head title="Struktural OSIS" />
      <Hero
        title="Akan segera digelar event MOBA 4 2024"
        subtitle="Meaning of Bhakta"
        buttonText="Jelajahi Lebih Lanjut"
        backgroundImage="/assets/img/event/moba3.jpg"
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 mt-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900">Struktural OSIS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard className="transform transition duration-500 hover:scale-105 shadow-lg"
              key={index}
              title={event.title}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </ClientLayout>
  );
};

export default EventPage;