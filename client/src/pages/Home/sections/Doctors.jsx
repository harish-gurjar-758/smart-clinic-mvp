import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Doctors() {

    const doctors = [
        {
            name: "Dr. Rahul Sharma",
            specialty: "Cardiologist",
            experience: "12 Years Experience",
            rating: 4.9,
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Dr. Priya Verma",
            specialty: "Dentist",
            experience: "9 Years Experience",
            rating: 4.8,
            img: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Dr. Amit Singh",
            specialty: "General Physician",
            experience: "10 Years Experience",
            rating: 4.7,
            img: "https://randomuser.me/api/portraits/men/52.jpg"
        },
        {
            name: "Dr. Neha Kapoor",
            specialty: "Dermatologist",
            experience: "8 Years Experience",
            rating: 4.9,
            img: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "Dr. Arjun Mehta",
            specialty: "Orthopedic",
            experience: "14 Years Experience",
            rating: 4.8,
            img: "https://randomuser.me/api/portraits/men/41.jpg"
        }
    ];

    return (

        <section className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">

            {/* background blur shapes */}

            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/40 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl font-bold text-gray-800">
                        Meet Our Expert Doctors
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Our experienced medical professionals are committed to providing
                        the highest quality healthcare services.
                    </p>

                </motion.div>

                {/* DOCTOR CAROUSEL */}

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    navigation

                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >

                    {doctors.map((doc, i) => (

                        <SwiperSlide key={i}>

                            <motion.div
                                whileHover={{ y: -12 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                            >

                                {/* IMAGE */}

                                <div className="relative h-64 overflow-hidden">

                                    <img
                                        src={doc.img}
                                        alt={doc.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                    />

                                    {/* RATING */}

                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow flex items-center gap-1 text-sm font-semibold">

                                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                        {doc.rating}

                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div className="p-6 text-center">

                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {doc.name}
                                    </h3>

                                    <p className="text-blue-600 font-medium">
                                        {doc.specialty}
                                    </p>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {doc.experience}
                                    </p>

                                    {/* BUTTONS */}

                                    <div className="flex gap-3 justify-center mt-6">

                                        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                                            Book Now
                                        </button>

                                        <button className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                                            View Profile
                                        </button>

                                    </div>

                                </div>

                            </motion.div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>

    );
}