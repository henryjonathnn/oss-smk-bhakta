import React, { lazy, Suspense } from 'react';
import { Navbar } from '../../Layouts/Navbar';
import { ArrowRight, Calendar, Users, BookOpen, ChevronRight, Star, Clock, MapPin, Award, BarChart, Smile, Camera, MessageSquare } from 'lucide-react';
import { Footer } from '../../Layouts/Footer';
import { Link } from '@inertiajs/inertia-react';


const StrukturalCard = lazy(() => import('../../Components/StrukturalCard'));

const Struktural = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Struktural OSS Bhakta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Suspense fallback={<div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse"></div>}>
              <StrukturalCard 
                nama="M. Revo Furqoni" 
                jabatan="Ketua OSIS" 
                image="/assets/img/struktural/ketos.jpeg" 
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

      <Footer />
    </div>
  )
}

export default Struktural