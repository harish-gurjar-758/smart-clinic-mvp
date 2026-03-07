import React from "react";
import { motion } from "framer-motion";

export default function AppointmentHero() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold"
                >
                    Book Your Appointment
                </motion.h1>

                <p className="mt-4 text-blue-100">
                    Schedule a consultation with our experienced doctors quickly and easily.
                </p>

            </div>

        </section>
    );
}