import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import { Star, Clock, Calendar } from "lucide-react";

export default function FeaturedDoctors() {

    const doctors = [
        {
            name: "Dr. Rahul Sharma",
            specialty: "Cardiologist",
            experience: "12 Years Experience",
            rating: 4.9,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            available: "Available Today"
        },
        {
            name: "Dr. Priya Verma",
            specialty: "Dentist",
            experience: "9 Years Experience",
            rating: 4.8,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            available: "Available Tomorrow"
        },
        {
            name: "Dr. Amit Singh",
            specialty: "General Physician",
            experience: "15 Years Experience",
            rating: 4.7,
            image: "https://randomuser.me/api/portraits/men/52.jpg",
            available: "Available Today"
        },
        {
            name: "Dr. Neha Kapoor",
            specialty: "Dermatologist",
            experience: "10 Years Experience",
            rating: 4.9,
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            available: "Available Today"
        },
        {
            name: "Dr. Arjun Mehta",
            specialty: "Orthopedic",
            experience: "13 Years Experience",
            rating: 4.8,
            image: "https://randomuser.me/api/portraits/men/46.jpg",
            available: "Available Tomorrow"
        }
    ];

    return (

        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}

                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold text-gray-800">
                        Top Rated Doctors
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Consult experienced specialists trusted by thousands of patients
                    </p>

                </div>

                {/* CAROUSEL */}

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    pagination={{ clickable: true }}

                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                >

                    {doctors.map((doc, index) => (

                        <SwiperSlide key={index}>

                            <motion.div
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl shadow-lg p-6 text-center"
                            >

                                {/* DOCTOR IMAGE */}

                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-100"
                                />

                                {/* NAME */}

                                <h3 className="text-xl font-semibold mt-4">
                                    {doc.name}
                                </h3>

                                {/* SPECIALIZATION */}

                                <p className="text-blue-600 font-medium">
                                    {doc.specialty}
                                </p>

                                {/* EXPERIENCE */}

                                <div className="flex justify-center items-center gap-2 text-gray-500 text-sm mt-2">

                                    <Clock size={16} />

                                    {doc.experience}

                                </div>

                                {/* RATING */}

                                <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">

                                    <Star size={16} fill="currentColor" />

                                    <span className="text-gray-700 text-sm">
                                        {doc.rating}
                                    </span>

                                </div>

                                {/* AVAILABILITY */}

                                <div className="text-green-600 text-sm mt-2">

                                    {doc.available}

                                </div>

                                {/* BUTTON */}

                                <button className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full transition">

                                    <Calendar size={18} />

                                    Book Appointment

                                </button>

                            </motion.div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
}