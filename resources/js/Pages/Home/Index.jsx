import React from 'react';
import { Head } from '@inertiajs/react';
import { Navbar } from '../../Layouts/Navbar';
import { Footer } from '../../Layouts/Footer';
import Hero from '../../Components/Hero';
import AboutSection from '../../Components/AboutSection';
import StatisticSection from '../../Components/StatisticSection';
import EventSection from '../../Components/EventSection';
import FAQSection from '../../Components/FaqSection';
import SuggestionBoxSection from '../../Components/SuggestionBoxSection';

const Index = () => {
  const events = [
    { title: "MPLS Bhakta 2023", date: "15 Juli 2023", image: "/assets/img/event/mpls2023.jpg" },
    { title: "PHBN 2023", date: "31 Agustus 2023", image: "/assets/img/event/phbn2023.jpg" },
    { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" }
  ];

  const faqs = [
    {
      question: "Bagaimana cara bergabung dengan OSIS?",
      answer: "Untuk bergabung dengan OSIS, Anda perlu mengikuti proses seleksi yang diadakan setiap tahun. Informasi lebih lanjut akan diumumkan melalui website dan media sosial resmi sekolah."
    },
    {
      question: "Apa saja kegiatan OSIS?",
      answer: "OSIS menyelenggarakan berbagai kegiatan, mulai dari acara sekolah, kompetisi antar siswa, program sosial, hingga pelatihan kepemimpinan. Setiap tahun, agenda kegiatan dapat bervariasi sesuai dengan program kerja yang telah disusun."
    },
    {
      question: "Apakah ada syarat khusus untuk menjadi pengurus OSIS?",
      answer: "Syarat umum untuk menjadi pengurus OSIS biasanya mencakup prestasi akademik yang baik, tidak memiliki catatan pelanggaran sekolah, dan memiliki kemampuan leadership. Syarat spesifik dapat berbeda setiap tahunnya dan akan diinformasikan saat periode pendaftaran."
    }
  ];

  return (
    <>
      <Head title="Home" />
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Hero
          title="Membangun Masa Depan Bersama OSS Bhakta"
          subtitle="Terampil bersahaja OSS Bhakta jaya!"
          buttonText="Jelajahi Lebih Lanjut"
          backgroundImage="/assets/img/hero.jpeg"
        />
        <AboutSection />
        <StatisticSection />
        <EventSection events={events} />
        <FAQSection faqs={faqs} />
        <SuggestionBoxSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;