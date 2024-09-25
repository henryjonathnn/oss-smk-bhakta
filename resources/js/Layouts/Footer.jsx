import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-wrap justify-between mt-10">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">OSIS SMK Bhakti Wiayata Kediri</h3>
                        <p>Jl. Pendidikan No. 123, Kota Anda, 12345</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Kontak</h3>
                        <p>Email: osis@smabhakta.sch.id</p>
                        <p>Telepon: (021) 123-4567</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400">Instagram</a>
                            <a href="#" className="hover:text-blue-400">Twitter</a>
                            <a href="#" className="hover:text-blue-400">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className='underline'>&copy; 2024 OSIS SMK Bhakti Wiyata. Hak Cipta Dilindungi.</p>
                </div>
            </div>
        </footer>
    )
}
