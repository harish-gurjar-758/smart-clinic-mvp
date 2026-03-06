import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaHeartbeat, FaStethoscope } from "react-icons/fa";

export default function Services() {
    const services = [
        {
            icon: <FaHeartbeat />,
            title: "Cardiology",
            desc: "Heart related diagnosis and treatment by expert doctors."
        },
        {
            icon: <FaTooth />,
            title: "Dental Care",
            desc: "Advanced dental treatment and oral health care."
        },
        {
            icon: <FaStethoscope />,
            title: "General Checkup",
            desc: "Routine health checkups and medical consultations."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Our Medical Services
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >
                            <div className="text-4xl text-blue-600 mb-4">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                {service.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}