import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, PlayCircle } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function PremiumTestimonials() {

    const testimonials = [
        {
            name: "Rahul Mehta",
            city: "Jaipur",
            rating: 5,
            message:
                "The appointment booking process was extremely smooth. The doctor diagnosed my issue quickly and the treatment worked perfectly.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Priya Kapoor",
            city: "Delhi",
            rating: 5,
            message:
                "Very professional doctors and friendly staff. I booked consultation online and everything was handled efficiently.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Amit Singh",
            city: "Mumbai",
            rating: 4,
            message:
                "Great experience! The clinic is clean, well managed and doctors explain everything clearly.",
            image: "https://randomuser.me/api/portraits/men/52.jpg"
        },
        {
            name: "Neha Sharma",
            city: "Bangalore",
            rating: 5,
            message:
                "Amazing consultation experience. The doctor listened carefully and provided excellent guidance.",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    return (

        <section className="relative py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white">

            {/* FLOATING BACKGROUND */}

            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl font-bold text-gray-800">
                        Trusted by Thousands of Patients
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        Real experiences from patients who received quality healthcare
                        services through our platform.
                    </p>

                </motion.div>

                {/* TESTIMONIAL CAROUSEL */}

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    style={{
                        paddingBottom: '25px'
                    }}
                >

                    {testimonials.map((review, index) => (
                        <SwiperSlide key={index}>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -12 }}
                                transition={{ duration: 0.4 }}
                                className="h-full flex flex-col justify-between bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 relative"
                            >

                                {/* QUOTE */}

                                <Quote
                                    size={44}
                                    className="absolute top-6 right-6 text-blue-100"
                                />

                                {/* USER */}

                                <div className="flex items-center gap-4 mb-4">

                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full border-2 border-blue-100 object-cover"
                                    />

                                    <div>

                                        <h4 className="font-semibold text-gray-800">
                                            {review.name}
                                        </h4>

                                        <p className="text-sm text-gray-500">
                                            {review.city}
                                        </p>

                                    </div>

                                </div>

                                {/* MESSAGE */}

                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-grow">
                                    {review.message}
                                </p>

                                {/* FOOTER */}

                                <div className="flex items-center justify-between mt-6">

                                    <div className="flex gap-1 text-yellow-400">

                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} size={18} fill="currentColor" />
                                        ))}

                                    </div>

                                    <span className="text-green-600 text-xs font-semibold">
                                        ✔ Verified Patient
                                    </span>

                                </div>

                            </motion.div>

                        </SwiperSlide>
                    ))}

                </Swiper>

                {/* VIDEO TESTIMONIAL CTA */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 flex justify-center"
                >

                    <button className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition">

                        <PlayCircle size={24} />
                        Watch Patient Stories

                    </button>

                </motion.div>

            </div>

        </section>

    );
}