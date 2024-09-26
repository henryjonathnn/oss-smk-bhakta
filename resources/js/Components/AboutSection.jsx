import React from 'react';
import { Users, BookOpen } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description, bgColor, textColor }) => (
  <div className={`${bgColor} rounded-xl p-8 text-center transform transition duration-500 hover:scale-105 shadow-lg`}>
    <Icon className="w-16 h-16 mx-auto mb-6 text-indigo-600" />
    <h3 className={`text-2xl font-semibold mb-4 ${textColor}`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Tentang OSIS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <AboutCard
          icon={Users}
          title="Kepemimpinan"
          description="Mengembangkan kemampuan kepemimpinan siswa melalui berbagai program dan kegiatan."
          bgColor="bg-indigo-50"
          textColor="text-indigo-900"
        />
        <AboutCard
          icon={BookOpen}
          title="Akademik"
          description="Mendukung kegiatan akademik dan ekstrakurikuler untuk pengembangan potensi siswa."
          bgColor="bg-emerald-50"
          textColor="text-emerald-900"
        />
        <AboutCard
          icon={Users}
          title="Sosial"
          description="Membangun hubungan sosial antar siswa dan meningkatkan solidaritas antar sesama."
          bgColor="bg-purple-50"
          textColor="text-purple-900"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;