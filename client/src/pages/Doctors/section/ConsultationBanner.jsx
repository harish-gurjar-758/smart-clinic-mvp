import React from "react";
import { motion } from "framer-motion";
import { Video, Calendar, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConsultationBanner() {

    const features = [
        {
            icon: <Video size={20} />,
            text: "Video Consultation"
        },
        {
            icon: <PhoneCall size={20} />,
            text: "Instant Call Support"
        },
        {
            icon: <Calendar size={20} />,
            text: "Easy Appointment"
        }
    ];

    return (

        <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-indigo-50 relative overflow-hidden">

            {/* Background Shapes */}

            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">

                {/* LEFT CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                        Need Medical Advice?
                        <br />
                        Consult Our Doctors
                        <span className="text-blue-600"> Online</span>
                    </h2>

                    <p className="mt-6 text-gray-600 text-lg max-w-xl">
                        Book appointments with experienced specialists and receive
                        professional medical guidance anytime from the comfort of
                        your home.
                    </p>

                    {/* FEATURES */}

                    <div className="grid sm:grid-cols-3 gap-4 mt-8">

                        {features.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ y: -5 }}
                                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                            >

                                <div className="text-blue-600">
                                    {item.icon}
                                </div>

                                <span className="text-sm font-medium text-gray-700">
                                    {item.text}
                                </span>

                            </motion.div>

                        ))}

                    </div>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-4 mt-10">

                        <Link
                            to="/book-appointment"
                            className="bg-blue-600 text-white font-semibold px-7 py-3 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition"
                        >
                            Book Appointment
                        </Link>

                        <Link
                            to="/doctors"
                            className="border border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
                        >
                            Find Doctors
                        </Link>

                    </div>

                </motion.div>

                {/* RIGHT IMAGE */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >

                    <motion.img
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.4 }}
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                        alt="doctor consultation"
                        className="rounded-3xl shadow-2xl"
                    />

                    {/* FLOATING CARD */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl w-64"
                    >

                        <h4 className="font-semibold text-gray-800">
                            Online Consultation
                        </h4>

                        <p className="text-sm text-gray-500 mt-1">
                            Available 24/7 with certified doctors
                        </p>

                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full hover:bg-blue-700 transition">
                            Start Consultation
                        </button>

                    </motion.div>

                </motion.div>

            </div>

        </section>

    );
}