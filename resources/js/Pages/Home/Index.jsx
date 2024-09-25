import React, { lazy, Suspense } from 'react';
import { Navbar } from '../../Layouts/Navbar';
import { ArrowRight, Calendar, Users, BookOpen } from 'lucide-react';
import { Footer } from '../../Layouts/Footer';

// Lazy load the EventCard component
const EventCard = lazy(() => import('../Components/EventCard'));

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: "url('/assets/img/hero.jpeg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Selamat Datang di website OSS Bhakta</h1>
            <p className="text-xl mb-8">Terampil bersahaja OSS Bhakta jaya!</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Jelajahi Lebih Lanjut
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Tentang OSIS</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Kepemimpinan</h3>
                <p className="text-gray-600">Mengembangkan kemampuan kepemimpinan siswa</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Akademik</h3>
                <p className="text-gray-600">Mendukung kegiatan akademik dan ekstrakurikuler</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="text-center">
                <Users className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2">Sosial</h3>
                <p className="text-gray-600">Membangun hubungan sosial antar siswa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-8">Acara Mendatang</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Suspense fallback={<div>Loading...</div>}>
              <EventCard 
                title="Lomba Debat Antar Kelas" 
                date="15 Oktober 2024" 
                image="/assets/img/hero.jpeg" 
              />
              <EventCard 
                title="Pekan Olahraga Sekolah" 
                date="22 Oktober 2024" 
                image="/assets/img/event2.jpg" 
              />
              <EventCard 
                title="Seminar Kepemimpinan" 
                date="5 November 2024" 
                image="/assets/img/event3.jpg" 
              />
            </Suspense>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-600 font-semibold">
              Lihat Semua Acara <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;