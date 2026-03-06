import React from "react";
import { motion } from "framer-motion";
import { Video, Calendar, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConsultationBanner() {

    return (

        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h2 className="text-4xl font-bold leading-tight">
                        Need Medical Advice?
                        <br />
                        Consult Our Doctors
                        <span className="text-yellow-300"> Online</span>
                    </h2>

                    <p className="mt-4 text-blue-100 text-lg">
                        Book appointments with experienced doctors and specialists.
                        Get professional medical advice anytime from the comfort of
                        your home.
                    </p>

                    {/* FEATURES */}

                    <div className="flex flex-wrap gap-6 mt-6">

                        <div className="flex items-center gap-2">
                            <Video className="text-yellow-300" />
                            <span>Video Consultation</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <PhoneCall className="text-yellow-300" />
                            <span>Instant Call Support</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Calendar className="text-yellow-300" />
                            <span>Easy Appointment Booking</span>
                        </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="flex gap-4 mt-8">

                        <Link
                            to="/book-appointment"
                            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
                        >
                            Book Appointment
                        </Link>

                        <Link
                            to="/doctors"
                            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
                        >
                            Find Doctors
                        </Link>

                    </div>

                </motion.div>

                {/* RIGHT IMAGE */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >

                    <img
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                        alt="doctor consultation"
                        className="rounded-2xl shadow-2xl"
                    />

                    {/* FLOATING CARD */}

                    <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-5 rounded-xl shadow-xl w-60">

                        <h4 className="font-semibold">
                            Online Consultation
                        </h4>

                        <p className="text-sm text-gray-500 mt-1">
                            Available 24/7 with certified doctors
                        </p>

                        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full hover:bg-blue-700">
                            Start Consultation
                        </button>

                    </div>

                </motion.div>

            </div>

        </section>

    );
}