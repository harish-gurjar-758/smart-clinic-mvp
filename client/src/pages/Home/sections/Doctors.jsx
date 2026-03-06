import React from "react";
import { motion } from "framer-motion";

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
            img: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Dr. Priya Verma",
            specialty: "Dentist",
            img: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Dr. Amit Singh",
            specialty: "General Physician",
            img: "https://randomuser.me/api/portraits/men/52.jpg"
        },
        {
            name: "Dr. Neha Kapoor",
            specialty: "Dermatologist",
            img: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        {
            name: "Dr. Arjun Mehta",
            specialty: "Orthopedic",
            img: "https://randomuser.me/api/portraits/men/41.jpg"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-10">
                    Meet Our Doctors
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}

                    loop={true}  // ✅ infinite loop

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}

                    navigation
                    pagination={{ clickable: true }}

                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >

                    {doctors.map((doc, i) => (

                        <SwiperSlide key={i}>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white shadow-lg rounded-xl p-6"
                            >

                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
                                />

                                <h3 className="text-xl font-semibold">
                                    {doc.name}
                                </h3>

                                <p className="text-gray-500">
                                    {doc.specialty}
                                </p>

                                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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