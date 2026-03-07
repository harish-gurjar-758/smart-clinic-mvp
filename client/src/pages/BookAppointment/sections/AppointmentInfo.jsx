import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function AppointmentInfo() {

    return (

        <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
        >

            <h2 className="text-2xl font-bold mb-6">
                Clinic Information
            </h2>

            <div className="space-y-6 text-gray-600">

                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <p>123 Health Street, Medical City</p>
                </div>

                <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-blue-600" />
                    <p>+91 9876543210</p>
                </div>

                <div className="flex items-center gap-4">
                    <FaClock className="text-blue-600" />
                    <p>Mon - Sun : 9:00 AM - 9:00 PM</p>
                </div>

            </div>

            <div className="mt-8">

                <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                    className="rounded-xl"
                />

            </div>

        </motion.div>
    );
}