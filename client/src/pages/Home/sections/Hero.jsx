import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaUserMd, FaCalendarCheck } from "react-icons/fa";

export default function Hero() {

    const fadeLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 80 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">

            {/* Floating background shapes */}

            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative">

                {/* LEFT CONTENT */}

                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    animate="visible"
                >

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">

                        Your Health <br />

                        <span className="text-blue-600">
                            Our Priority
                        </span>

                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-lg">
                        Book appointments with trusted doctors instantly.
                        Quality healthcare for you and your family with
                        modern medical services.
                    </p>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-4 mt-8">

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
                        >
                            <FaCalendarCheck />
                            Book Appointment
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 border px-7 py-3 rounded-xl hover:bg-gray-100 transition"
                        >
                            <FaPhoneAlt />
                            Emergency
                        </motion.button>

                    </div>

                    {/* STATS */}

                    <div className="flex flex-wrap gap-10 mt-10">

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <h3 className="text-2xl font-bold text-gray-800">10+</h3>
                            <p className="text-gray-500 text-sm">Expert Doctors</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <h3 className="text-2xl font-bold text-gray-800">500+</h3>
                            <p className="text-gray-500 text-sm">Happy Patients</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <h3 className="text-2xl font-bold text-gray-800">5+</h3>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </motion.div>

                    </div>

                </motion.div>


                {/* APPOINTMENT FORM */}

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    animate="visible"
                    className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-8"
                >

                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Quick Appointment
                    </h2>

                    <form className="space-y-4">

                        <input
                            type="text"
                            placeholder="Patient Name"
                            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                        />

                        <select className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400">

                            <option>Select Doctor</option>
                            <option>Cardiologist</option>
                            <option>Dentist</option>
                            <option>General Physician</option>

                        </select>

                        <input
                            type="date"
                            className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-400"
                        />

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                        >
                            Book Now
                        </motion.button>

                    </form>

                    <div className="flex items-center gap-2 mt-5 text-gray-500 text-sm">

                        <FaUserMd />

                        Trusted by hundreds of patients

                    </div>

                </motion.div>

            </div>

        </section>
    );
}