import React from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Your Health <span className="text-blue-600">Our Priority</span>
                    </h1>

                    <p className="mt-4 text-gray-600">
                        Book appointments with trusted doctors quickly and easily.
                        Get the best medical care for you and your family.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Book Appointment
                        </button>

                        <button className="flex items-center gap-2 border px-6 py-3 rounded-lg hover:bg-gray-100">
                            <FaPhoneAlt />
                            Emergency
                        </button>
                    </div>

                    {/* Trust Stats */}
                    <div className="flex gap-8 mt-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">10+</h3>
                            <p className="text-gray-500 text-sm">Doctors</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">500+</h3>
                            <p className="text-gray-500 text-sm">Patients</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800">5+</h3>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                    </div>
                </motion.div>

                {/* Appointment Form */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white shadow-xl rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Quick Appointment
                    </h2>

                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Patient Name"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
                        />

                        <select className="w-full border p-3 rounded-lg">
                            <option>Select Doctor</option>
                            <option>Cardiologist</option>
                            <option>Dentist</option>
                            <option>General Physician</option>
                        </select>

                        <input
                            type="date"
                            className="w-full border p-3 rounded-lg"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            Book Now
                        </button>
                    </form>

                    <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
                        <FaUserMd />
                        Trusted by hundreds of patients
                    </div>
                </motion.div>

            </div>
        </section>
    );
}