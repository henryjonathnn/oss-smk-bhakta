import React from 'react';
import { Head } from '@inertiajs/react';
import ClientLayout from '../../../Components/templates/ClientLayouts';
import Hero from './Hero';
import AboutSection from './AboutSection';
import StatisticSection from './StatisticSection';
import EventSection from './EventSection';
import FAQSection from './FAQSection';
import SuggestionBoxSection from './SuggestionBoxSection';
import { ChevronRight } from 'lucide-react';
import StrukturalSection from './StrukturalSection';

const Index = () => {
  const events = [
    { title: "MPLS Bhakta 2023", date: "15 Juli 2023", image: "/assets/img/event/mpls2023.jpg" },
    { title: "PHBN 2023", date: "31 Agustus 2023", image: "/assets/img/event/phbn2023.jpg" },
    { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" }
  ];

  const anggota = [
    { nama: "M. Revo Furqoni", jabatan: "Katua OSIS", image: "/assets/img/struktural/ketos.jpeg" },
    { nama: "Faza Adhima Putra", jabatan: "Wakil Ketua OSIS", image: "/assets/img/struktural/waketos.jpeg" },
    { nama: "Marela Tiara Pozak", jabatan: "Sekretaris", image: "/assets/img/struktural/sekretaris.jpeg" },
    { nama: "Marela Tiara Pozak", jabatan: "Sekretaris", image: "/assets/img/struktural/sekretaris.jpeg" }
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
    <ClientLayout>
      <Head title="Home" />
      <Hero
        title="Membangun Masa Depan Bersama OSS Bhakta"
        subtitle="Terampil bersahaja OSS Bhakta jaya!"
        buttonText="Jelajahi Lebih Lanjut"
        backgroundImage="/assets/img/hero.jpeg"
      />
      <AboutSection />
      <StatisticSection />
      <h2 className="text-4xl font-bold text-center mt-20 -mb-10 text-indigo-900">Event Terakhir</h2>
      <EventSection events={events} />
      <div className="text-center mb-20">
        <a href="/event" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg">
          Lihat Semua Event <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
      <h2 className="text-4xl font-bold text-center mt-20 -mb-10 text-indigo-900">Struktural OSIS</h2>
      <StrukturalSection anggota={anggota} />
      <div className="text-center mb-20">
        <a href="/struktural" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg">
          Lihat Struktural OSIS <ChevronRight className="w-5 h-5 ml-2" />
        </a>
      </div>
      <FAQSection faqs={faqs} />
      <SuggestionBoxSection />
    </ClientLayout>
  );
};

export default Index;