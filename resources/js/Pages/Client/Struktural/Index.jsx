import React from 'react';
import { Head } from '@inertiajs/react';
import ClientLayout from '../../../Components/templates/ClientLayouts';
import StrukturalCard from '../../../Components/molecules/StrukturalCard';

const strukturalData = [
  {
    nama: "M. Revo Furqoni",
    jabatan: "Ketua OSIS",
    image: "/assets/img/struktural/ketos.jpeg"
  },
  {
    nama: "Faza Adhima",
    jabatan: "Wakil Ketua OSIS",
    image: "/assets/img/struktural/waketos.jpeg"
  },
  {
    nama: "Mike Johnson",
    jabatan: "Sekretaris",
    image: "/assets/img/struktural/mike-johnson.jpg"
  },
  {
    nama: "Emily Brown",
    jabatan: "Bendahara",
    image: "/assets/img/struktural/emily-brown.jpg"
  },
  // Tambahkan data struktural lainnya sesuai kebutuhan
];

const StrukturalPage = () => {
  return (
    <ClientLayout>
      <Head title="Struktural OSIS" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900">Struktural OSIS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {strukturalData.map((anggota, index) => (
            <StrukturalCard
              key={index}
              nama={anggota.nama}
              jabatan={anggota.jabatan}
              image={anggota.image}
            />
          ))}
        </div>
      </div>
    </ClientLayout>
  );
};

export default StrukturalPage;