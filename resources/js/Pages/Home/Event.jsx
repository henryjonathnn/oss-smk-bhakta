import React, { useState } from 'react'
import EventCard from '../../Components/modules/EventCard'
import { Navbar } from '../../Layouts/Navbar'
import EventSection from '../../Components/Home/EventSection'
import Pagination from '../../Components/elements/Pagination'
import { Footer } from '../../Layouts/Footer'
import Hero from '../../Components/elements/Hero'

const Event = () => {

    const events = [
        { title: "MPLS Bhakta 2023", date: "15 Juli 2023", image: "/assets/img/event/mpls2023.jpg" },
        { title: "PHBN 2023", date: "31 Agustus 2023", image: "/assets/img/event/phbn2023.jpg" },
        { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" },
        { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" },
        { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" },
        { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" },
        { title: "MOBA 3 2023", date: "19 Desember 2023", image: "/assets/img/event/moba3.jpg" }
    ]

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <Hero
                title="Membangun Masa Depan Bersama OSS Bhakta"
                subtitle="Terampil bersahaja OSS Bhakta jaya!"
                buttonText="Jelajahi Lebih Lanjut"
                backgroundImage="/assets/img/event/moba3.jpg"
            />
            <h2 className="text-4xl font-bold text-center mt-20 -mb-10 text-indigo-900">Event Terakhir</h2>
            <EventSection events={events} />
            <Pagination />
            <Footer />
        </div>
    )
}

export default Event