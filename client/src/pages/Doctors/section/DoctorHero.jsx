import React, { useState } from "react";
import { Search, MapPin, Stethoscope } from "lucide-react";

export default function DoctorHero() {

    const [search, setSearch] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [location, setLocation] = useState("");

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
                <div>

                    <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                        Find the Best
                        <span className="text-blue-600"> Doctors</span> Near You
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg">
                        Book appointments with top specialists, experienced doctors,
                        and trusted healthcare professionals in minutes.
                    </p>

                    {/* SEARCH BAR */}
                    <div className="bg-white shadow-lg rounded-xl p-4 mt-8">

                        <div className="grid md:grid-cols-4 gap-3">

                            {/* Search Doctor */}
                            <div className="flex items-center border rounded-lg px-3">
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
                            <div className="flex items-center border rounded-lg px-3">
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

                            {/* Location */}
                            <div className="flex items-center border rounded-lg px-3">
                                <MapPin className="text-gray-400 w-5" />

                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="p-2 outline-none w-full"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>

                            {/* Button */}
                            <button
                                onClick={handleSearch}
                                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-semibold"
                            >
                                Search
                            </button>

                        </div>

                    </div>

                    {/* HERO STATS */}
                    <div className="flex gap-10 mt-10">

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">150+</h3>
                            <p className="text-gray-500">Doctors</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
                            <p className="text-gray-500">Specializations</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">20K+</h3>
                            <p className="text-gray-500">Patients Served</p>
                        </div>

                    </div>

                </div>

                {/* RIGHT IMAGE */}

                <div className="relative">

                    <img
                        src="https://images.unsplash.com/photo-1584515933487-779824d29309"
                        alt="doctor"
                        className="rounded-2xl shadow-lg"
                    />

                    {/* floating card */}

                    <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">

                        <h4 className="font-semibold text-gray-800">
                            Online Consultation
                        </h4>

                        <p className="text-sm text-gray-500">
                            Available 24/7
                        </p>

                        <button className="mt-2 text-blue-600 font-semibold">
                            Book Now →
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}