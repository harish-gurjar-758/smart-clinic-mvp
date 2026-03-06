import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";

export default function ContactCTA() {

    return (

        <section className="relative py-24 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white">

            {/* Background Glow Effects */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

                {/* Heading */}

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold leading-tight"
                >
                    Need Medical Consultation?
                </motion.h2>

                {/* Subtitle */}

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-blue-100 max-w-xl mx-auto"
                >
                    Our experienced doctors are ready to help you.
                    Book your appointment today and get professional medical care.
                </motion.p>

                {/* Buttons */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
                >

                    {/* Book Appointment */}

                    <button className="flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-gray-100 transition">

                        <CalendarCheck size={20} />

                        Book Appointment

                    </button>

                    {/* Call Button */}

                    <button className="flex items-center justify-center gap-2 border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">

                        <Phone size={20} />

                        Call Now

                    </button>

                </motion.div>

            </div>

        </section>

    );
}