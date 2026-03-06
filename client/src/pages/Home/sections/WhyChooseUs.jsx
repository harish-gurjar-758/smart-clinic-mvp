import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaHospital, FaClock } from "react-icons/fa";

export default function WhyChooseUs() {

    const features = [
        {
            icon: <FaUserMd />,
            title: "Expert Doctors",
            desc: "Qualified and experienced medical professionals."
        },
        {
            icon: <FaHospital />,
            title: "Modern Equipment",
            desc: "Latest healthcare technology and facilities."
        },
        {
            icon: <FaClock />,
            title: "24/7 Support",
            desc: "Emergency medical support anytime."
        }
    ];

    return (
        <section className="bg-blue-50 py-16">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-10">
                    Why Choose Our Clinic
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {features.map((f, i) => (

                        <motion.div
                            key={i}
                            whileHover={{ y: -6 }}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >

                            <div className="text-4xl text-blue-600 mb-3">
                                {f.icon}
                            </div>

                            <h3 className="text-xl font-semibold">
                                {f.title}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                {f.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}