import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import ClientLayout from '../../../Components/templates/ClientLayouts';
import { StrukturalCard, CenteredCardContainer } from '../../../Components/molecules/StrukturalCard';
import Hero from '../Home/Hero';;
import Filter from '../../../Components/atoms/Filter';

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
    nama: "Marela Tiara Pozak",
    jabatan: "Sekretaris",
    image: "/assets/img/struktural/sekretaris.jpeg"
  },
  {
    nama: "Emily Brown",
    jabatan: "Bendahara",
    image: "/assets/img/struktural/emily-brown.jpg"
  },
];

const sekbidData = [
  {
    nama: "John Doe",
    jabatan: "Sekbid 1",
    image: "/assets/img/struktural/john-doe.jpg"
  },
  {
    nama: "Jane Smith",
    jabatan: "Sekbid 2",
    image: "/assets/img/struktural/jane-smith.jpg"
  },
  {
    nama: "Alex Johnson",
    jabatan: "Sekbid 3",
    image: "/assets/img/struktural/alex-johnson.jpg"
  },
  {
    nama: "Sarah Lee",
    jabatan: "Sekbid 4",
    image: "/assets/img/struktural/sarah-lee.jpg"
  },
];

const StrukturalPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredSekbid = filter === 'all'
    ? sekbidData
    : sekbidData.filter(member => member.jabatan === filter);

  return (
    <ClientLayout>
      <Head title="Struktural OSIS" />
      <Hero
        title="Akan segera digelar event MOBA 4 2024"
        subtitle="Meaning of Bhakta"
        buttonText="Jelajahi Lebih Lanjut"
        backgroundImage="/assets/img/event/moba3.jpg"
      />
      <div className="container mx-auto px-4 py-12 mb-10 mt-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900">Struktural Anggota Inti OSIS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center mb-20">
          {strukturalData.map((anggota, index) => (
            <CenteredCardContainer key={index}>
              <StrukturalCard
                nama={anggota.nama}
                jabatan={anggota.jabatan}
                image={anggota.image}
              />
            </CenteredCardContainer>
          ))}
        </div>

        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-indigo-900">
            Struktural Sekbid
          </h1>
        </div>
        <div className='mb-10 flex mx-auto px-4'>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredSekbid.map((anggota, index) => (
            <CenteredCardContainer key={index}>
              <StrukturalCard
                nama={anggota.nama}
                jabatan={anggota.jabatan}
                image={anggota.image}
              />
            </CenteredCardContainer>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
};

export default StrukturalPage;