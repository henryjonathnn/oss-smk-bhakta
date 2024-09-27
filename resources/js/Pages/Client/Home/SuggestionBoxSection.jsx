import React from 'react';
import { Link } from '@inertiajs/react';
import { MessageSquare } from 'lucide-react';

const SuggestionBoxSection = () => (
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
);

export default SuggestionBoxSection;
