import React from "react";
import { motion } from "framer-motion";

export default function DoctorFilter() {

    return (

        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-lg h-fit sticky top-28 border"
        >

            <h2 className="font-bold text-xl mb-6 text-gray-800">
                Filters
            </h2>

            <div className="space-y-5">

                {/* Specialization */}

                <div>

                    <label className="text-sm font-medium text-gray-600">
                        Specialization
                    </label>

                    <select className="w-full border rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition">
                        <option>All</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Dentist</option>
                    </select>

                </div>

                {/* Experience */}

                <div>

                    <label className="text-sm font-medium text-gray-600">
                        Experience
                    </label>

                    <select className="w-full border rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition">
                        <option>Any</option>
                        <option>5+ years</option>
                        <option>10+ years</option>
                    </select>

                </div>

                {/* Fee */}

                <div>

                    <label className="text-sm font-medium text-gray-600">
                        Consultation Fee
                    </label>

                    <select className="w-full border rounded-lg p-2.5 mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition">
                        <option>Any</option>
                        <option>₹200 - ₹500</option>
                        <option>₹500 - ₹1000</option>
                    </select>

                </div>

            </div>

        </motion.div>

    );
}