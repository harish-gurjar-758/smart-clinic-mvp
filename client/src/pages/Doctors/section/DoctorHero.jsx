import React, { useState } from "react";
import { Search, MapPin, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export default function DoctorHero() {

    const [search, setSearch] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [location] = useState("Jaipur, Rajasthan"); // fixed clinic location

    const handleSearch = () => {
        console.log({
            search,
            specialization,
            location
        });
    };

    return (
        <section className="bg-gradient-to-r from-blue-50 to-white py-20">

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >

                    <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                        Find the Best
                        <span className="text-blue-600"> Doctors</span> Near You
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg">
                        Book appointments with top specialists, experienced doctors,
                        and trusted healthcare professionals in minutes.
                    </p>

                    {/* SEARCH BAR */}

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white shadow-lg rounded-xl p-4 mt-8 hover:shadow-xl transition"
                    >

                        <div className="grid md:grid-cols-4 gap-3">

                            {/* Search Doctor */}

                            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 ring-blue-300 transition">
                                <Search className="text-gray-400 w-5" />
                                <input
                                    type="text"
                                    placeholder="Doctor or clinic"
                                    className="p-2 outline-none w-full"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            {/* Specialization */}

                            <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 ring-blue-300 transition">
                                <Stethoscope className="text-gray-400 w-5" />

                                <select
                                    className="p-2 w-full outline-none"
                                    value={specialization}
                                    onChange={(e) => setSpecialization(e.target.value)}
                                >
                                    <option value="">Specialization</option>
                                    <option>Cardiologist</option>
                                    <option>Dentist</option>
                                    <option>Dermatologist</option>
                                    <option>Neurologist</option>
                                    <option>Pediatrician</option>
                                </select>
                            </div>

                            {/* Location (Fixed) */}

                            <div className="flex items-center border rounded-lg px-3 bg-gray-50">
                                <MapPin className="text-gray-400 w-5" />

                                <input
                                    type="text"
                                    className="p-2 outline-none w-full bg-transparent"
                                    value={location}
                                    readOnly
                                />
                            </div>

                            {/* Button */}

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05 }}
                                onClick={handleSearch}
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-semibold transition"
                            >
                                Search
                            </motion.button>

                        </div>

                    </motion.div>

                    {/* HERO STATS */}

                    <div className="flex gap-10 mt-10">

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                            <p className="text-gray-500">Doctors</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
                            <p className="text-gray-500">Specializations</p>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.1 }}>
                            <h3 className="text-3xl font-bold text-blue-600">20K+</h3>
                            <p className="text-gray-500">Patients Served</p>
                        </motion.div>

                    </div>

                </motion.div>

                {/* RIGHT IMAGE */}

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >

                    <motion.img
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                        alt="doctor"
                        className="rounded-2xl shadow-lg"
                    />

                    {/* floating card */}

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg"
                    >

                        <h4 className="font-semibold text-gray-800">
                            Online Consultation
                        </h4>

                        <p className="text-sm text-gray-500">
                            Available 24/7
                        </p>

                        <button className="mt-2 text-blue-600 font-semibold hover:underline">
                            Book Now →
                        </button>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}