import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function Services() {

    const services = [
        {
            icon: <FaHeartbeat />,
            title: "Cardiology",
            desc: "Advanced heart diagnosis and treatment by experienced cardiologists."
        },
        {
            icon: <FaTooth />,
            title: "Dental Care",
            desc: "Comprehensive dental treatments for healthy teeth and smiles."
        },
        {
            icon: <FaStethoscope />,
            title: "General Checkup",
            desc: "Routine health checkups and consultations with expert physicians."
        }
    ];

    return (

        <section className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">

            {/* Background blur effects */}

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
                        Our Medical Services
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        We provide high-quality healthcare services with modern medical
                        technology and experienced doctors.
                    </p>

                </motion.div>


                {/* SERVICES GRID */}

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -12 }}
                            transition={{ duration: 0.4 }}
                            className="group relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100 overflow-hidden"
                        >

                            {/* Hover Gradient */}

                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Content */}

                            <div className="relative z-10 text-center">

                                {/* Icon */}

                                <div className="w-16 h-16 mx-auto flex items-center justify-center text-3xl rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-white group-hover:text-blue-600 transition">

                                    {service.icon}

                                </div>

                                {/* Title */}

                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition">

                                    {service.title}

                                </h3>

                                {/* Description */}

                                <p className="text-gray-500 mt-3 text-sm group-hover:text-blue-100 transition">

                                    {service.desc}

                                </p>

                                {/* Button */}

                                <button className="mt-6 text-blue-600 font-semibold group-hover:text-white transition">

                                    Learn More →

                                </button>

                            </div>

                        </motion.div>
                    ))}

                </div>


                {/* CTA */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-16"
                >

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">

                        Explore All Services

                    </button>

                </motion.div>

            </div>

        </section>

    );
}