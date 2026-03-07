import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaHospital, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {

    const features = [
        {
            icon: <FaUserMd />,
            title: "Expert Doctors",
            desc: "Highly qualified specialists with years of clinical experience."
        },
        {
            icon: <FaHospital />,
            title: "Modern Equipment",
            desc: "State-of-the-art medical technology and advanced facilities."
        },
        {
            icon: <FaClock />,
            title: "24/7 Support",
            desc: "Round-the-clock medical assistance and emergency support."
        }
    ];

    return (

        <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">

            {/* Background Blur Shapes */}

            <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/40 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* SECTION HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl font-bold text-gray-800">
                        Why Choose Our Clinic
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        We provide world-class healthcare services with experienced doctors,
                        modern facilities, and patient-focused care.
                    </p>

                </motion.div>


                {/* FEATURES GRID */}

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/40 overflow-hidden"
                        >

                            {/* Hover Gradient Background */}

                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Content */}

                            <div className="relative z-10 text-center">

                                {/* Icon */}

                                <div className="w-16 h-16 mx-auto flex items-center justify-center text-3xl rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-white group-hover:text-blue-600 transition">

                                    {f.icon}

                                </div>

                                {/* Title */}

                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition">

                                    {f.title}

                                </h3>

                                {/* Description */}

                                <p className="text-gray-500 mt-3 text-sm group-hover:text-blue-100 transition">

                                    {f.desc}

                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>


                {/* CTA BUTTON */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">

                        Book Appointment

                    </button>

                </motion.div>

            </div>

        </section>

    );
}