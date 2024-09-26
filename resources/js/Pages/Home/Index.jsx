import React, { lazy, Suspense } from 'react';
import { Navbar } from '../../Layouts/Navbar';
import { ArrowRight, Calendar, Users, BookOpen, ChevronRight, Star, Clock, MapPin, Award, BarChart, Smile, Camera, MessageSquare } from 'lucide-react';
import { Footer } from '../../Layouts/Footer';
import { Link } from '@inertiajs/inertia-react';

// Lazy load components
const EventCard = lazy(() => import('../../Components/EventCard'));
const StrukturalCard = lazy(() => import('../../Components/StrukturalCard'));

const Index = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('/assets/img/hero.jpeg')"}}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Membangun Masa Depan Bersama OSS Bhakta</h1>
            <p className="text-xl md:text-2xl font-medium mb-10">Terampil bersahaja OSS Bhakta jaya!</p>
            <button className="bg-indigo-950 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Jelajahi Lebih Lanjut
            </button>
          </div>
        </div>
        <div className="absolute -bottom-3 left-0 right-0">
          <svg className="w-full h-16 text-gray-50" viewBox="0 0 1440 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48h1440V0c-211.88 41.63-554.46 48-733.47 48C528.03 48 186.2 41.63 0 0v48z"></path>
          </svg>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Tentang OSIS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-indigo-50 rounded-xl p-8 text-center transform transition duration-500 hover:scale-105 shadow-lg">
              <Users className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
              <h3 className="text-2xl font-semibold mb-4 text-indigo-900">Kepemimpinan</h3>
              <p className="text-gray-600">Mengembangkan kemampuan kepemimpinan siswa melalui berbagai program dan kegiatan.</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-8 text-center transform transition duration-500 hover:scale-105 shadow-lg">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
              <h3 className="text-2xl font-semibold mb-4 text-emerald-900">Akademik</h3>
              <p className="text-gray-600">Mendukung kegiatan akademik dan ekstrakurikuler untuk pengembangan potensi siswa.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-8 text-center transform transition duration-500 hover:scale-105 shadow-lg">
              <Users className="w-16 h-16 mx-auto mb-6 text-purple-600" />
              <h3 className="text-2xl font-semibold mb-4 text-purple-900">Sosial</h3>
              <p className="text-gray-600">Membangun hubungan sosial antar siswa dan meningkatkan kepedulian terhadap lingkungan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12">OSIS dalam Angka</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 mx-auto mb-4" />
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-xl">Anggota Aktif</p>
            </div>
            <div>
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <p className="text-4xl font-bold mb-2">20+</p>
              <p className="text-xl">Event Tahunan</p>
            </div>
            <div>
              <BarChart className="w-12 h-12 mx-auto mb-4" />
              <p className="text-4xl font-bold mb-2">95%</p>
              <p className="text-xl">Tingkat Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Event Terakhir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>}>
              <EventCard 
                title="MPLS Bhakta 2023" 
                date="15 Juli 2023" 
                image="/assets/img/event/mpls2023.jpg" 
              />
              <EventCard 
                title="PHBN 2023" 
                date="31 Agustus 2023" 
                image="/assets/img/event/phbn2023.jpg" 
              />
              <EventCard 
                title="MOBA 3 2023" 
                date="19 Desember 2023" 
                image="/assets/img/event/moba3.jpg" 
              />
            </Suspense>
          </div>
          <div className="text-center mt-12">
            <a href="/event" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-lg">
              Lihat Semua Event <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Pertanyaan Umum</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-lg cursor-pointer">Bagaimana cara bergabung dengan OSIS?</summary>
              <p className="mt-4 text-gray-600">Untuk bergabung dengan OSIS, Anda perlu mengikuti proses seleksi yang diadakan setiap tahun. Informasi lebih lanjut akan diumumkan melalui website dan media sosial resmi sekolah.</p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-lg cursor-pointer">Apa saja kegiatan OSIS?</summary>
              <p className="mt-4 text-gray-600">OSIS menyelenggarakan berbagai kegiatan, mulai dari acara sekolah, kompetisi antar siswa, program sosial, hingga pelatihan kepemimpinan. Setiap tahun, agenda kegiatan dapat bervariasi sesuai dengan program kerja yang telah disusun.</p>
            </details>
            <details className="bg-white rounded-lg shadow-md p-6">
              <summary className="font-semibold text-lg cursor-pointer">Apakah ada syarat khusus untuk menjadi pengurus OSIS?</summary>
              <p className="mt-4 text-gray-600">Syarat umum untuk menjadi pengurus OSIS biasanya mencakup prestasi akademik yang baik, tidak memiliki catatan pelanggaran sekolah, dan memiliki kemampuan leadership. Syarat spesifik dapat berbeda setiap tahunnya dan akan diinformasikan saat periode pendaftaran.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Suggestion Box Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-64">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Kotak Saran</h2>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Kotak Saran</h2>
                <p className="text-gray-600 mb-6">Kami menghargai masukan Anda. Klik tombol di bawah untuk memberikan saran atau ide untuk perbaikan OSIS ke depannya.</p>
                <Link
                  href="/kotak-saran"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105"
                >
                  Beri Saran
                  <MessageSquare className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="md:w-1/2 bg-white p-8 md:p-12 flex justify-center">
                <img 
                  src="/assets/img/suggestion-box.png" 
                  alt="Kotak Saran Ilustrasi" 
                  className="max-w-full h-auto w-60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;