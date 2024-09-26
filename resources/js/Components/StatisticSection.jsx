import React from 'react';
import { Users, Calendar, BarChart } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }) => (
  <div>
    <Icon className="w-12 h-12 mx-auto mb-4" />
    <p className="text-4xl font-bold mb-2">{value}</p>
    <p className="text-xl">{label}</p>
  </div>
);

const StatisticSection = () => (
  <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <h2 className="text-4xl font-bold text-center mb-12">OSIS dalam Angka</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <StatCard icon={Users} value="50+" label="Anggota Aktif" />
        <StatCard icon={Calendar} value="20+" label="Event Tahunan" />
        <StatCard icon={BarChart} value="95%" label="Tingkat Kepuasan" />
      </div>
    </div>
  </section>
);

export default StatisticSection;