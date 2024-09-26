// resources/js/Pages/Admin/Anggota/Index.jsx
import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

const Index = () => {
  // Data statis untuk anggota
  const anggotaList = [
    { id: 1, nama: 'John Doe', email: 'john@example.com', status: 'Aktif' },
    { id: 2, nama: 'Jane Smith', email: 'jane@example.com', status: 'Nonaktif' },
    { id: 3, nama: 'Bob Johnson', email: 'bob@example.com', status: 'Aktif' },
    // Tambahkan lebih banyak data statis jika diperlukan
  ];

  return (
    <AppLayout>
      <Head title="Daftar Anggota" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              <h1 className="text-2xl font-semibold mb-6">Daftar Anggota</h1>
              
              <div className="mb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Tambah Anggota
                </button>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {anggotaList.map((anggota) => (
                    <tr key={anggota.id}>
                      <td className="px-6 py-4 whitespace-nowrap">{anggota.nama}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{anggota.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          anggota.status === 'Aktif' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {anggota.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                        <button className="text-red-600 hover:text-red-900">Hapus</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;