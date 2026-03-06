import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {

    const testimonials = [
        {
            name: "Rahul Mehta",
            city: "Jaipur",
            rating: 5,
            message:
                "The appointment booking process was extremely smooth. Dr. Sharma diagnosed my issue quickly and the treatment worked perfectly.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Priya Kapoor",
            city: "Delhi",
            rating: 5,
            message:
                "Very professional doctors and friendly staff. I booked my consultation online and everything was handled efficiently.",
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

        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* SECTION HEADER */}

                <div className="text-center mb-12">

                    <h2 className="text-4xl font-bold text-gray-800">
                        What Our Patients Say
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Trusted by thousands of patients for quality healthcare services
                    </p>

                </div>

                {/* CAROUSEL */}

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >

                    {testimonials.map((review, index) => (

                        <SwiperSlide key={index}>

                            <motion.div
                                whileHover={{ y: -8 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-lg relative"
                            >

                                {/* QUOTE ICON */}

                                <Quote
                                    className="absolute top-6 right-6 text-blue-100"
                                    size={40}
                                />

                                {/* PATIENT IMAGE */}

                                <div className="flex items-center gap-4 mb-4">

                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-14 h-14 rounded-full object-cover"
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

                                {/* REVIEW MESSAGE */}

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {review.message}
                                </p>

                                {/* RATING */}

                                <div className="flex gap-1 mt-4 text-yellow-400">

                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}

                                </div>

                                {/* VERIFIED BADGE */}

                                <span className="text-green-600 text-xs font-medium mt-3 inline-block">
                                    ✔ Verified Patient
                                </span>

                            </motion.div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>

    );
}