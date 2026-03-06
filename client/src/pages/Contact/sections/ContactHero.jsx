import { motion } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";

export default function ContactHero() {

    const floating = {
        animate: {
            y: [0, -15, 0],
        },
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        }
    };

    return (

        <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 py-28">

            {/* Background blur circles */}

            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

                {/* Title */}

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-6xl font-bold text-gray-800"
                >
                    Get In Touch With
                    <span className="text-blue-600"> ProHealth Clinic</span>
                </motion.h1>

                {/* Description */}

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg"
                >
                    Need medical consultation or have questions about your health?
                    Our expert doctors and support team are ready to assist you anytime.
                </motion.p>

                {/* Buttons */}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >

                    <button className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition">
                        <CalendarCheck size={20} />
                        Book Appointment
                    </button>

                    <button className="flex items-center gap-2 bg-white border px-7 py-3 rounded-xl shadow hover:bg-gray-100 transition">
                        <Phone size={20} />
                        Call Clinic
                    </button>

                </motion.div>

            </div>

            {/* Floating medical icons */}

            <motion.div
                {...floating}
                className="absolute top-20 left-10 text-blue-300 text-5xl"
            >
                🏥
            </motion.div>

            <motion.div
                {...floating}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 left-20 text-blue-200 text-4xl"
            >
                💊
            </motion.div>

            <motion.div
                {...floating}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-28 right-20 text-blue-300 text-4xl"
            >
                🩺
            </motion.div>

            <motion.div
                {...floating}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-20 right-16 text-blue-200 text-4xl"
            >
                ❤️
            </motion.div>

        </section>
    );
}