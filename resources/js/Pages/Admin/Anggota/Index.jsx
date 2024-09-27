import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const Index = () => {
  // Data statis untuk anggota
  const anggotaList = [
    { id: 1, nama: 'John Doe', jabatan: 'Ketua OSIS', status: 'Aktif', img: '/assets/img/anggota/jonathan.jpeg' },
    { id: 2, nama: 'Jane Smith', jabatan: 'Wakil Ketua OSIS', status: 'Nonaktif', img: '/assets/img/anggota/jonathan.jpeg' },
    { id: 3, nama: 'Bob Johnson', jabatan: 'Anggota', status: 'Aktif', img: '/assets/img/anggota/jonathan.jpeg' },
  ];

  const handleDelete = (id) => {
    console.log(`Menghapus anggota dengan id: ${id}`);
  };

  return (
    <AppLayout>
      <Head title="Daftar Anggota" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-10 bg-white border-b border-gray-200">
              <h1 className="text-2xl font-semibold mb-4">Daftar Anggota</h1>
              
              <div className="mb-8">
                <Link
                  href="/anggota/create"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Tambah Anggota
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {anggotaList.map((anggota) => (
                  <div key={anggota.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={anggota.img} className='object-cover w-full' alt="" />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2">{anggota.nama}</h2>
                      <p className="text-gray-600 mb-2">{anggota.jabatan}</p>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        anggota.status === 'Aktif' ? 'bg-green' : 'bg-red-100 text-red-800'
                      }`}>
                        {anggota.status}
                      </span>
                    </div>
                    <div className="bg-gray-50 p-4 flex justify-between">
                      <Link
                        href={`/anggota/${anggota.id}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Detail
                      </Link>
                      <Link
                        href={`/anggota/${anggota.id}/edit`}
                        className="text-green-600 hover:text-green-800"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(anggota.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;