import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";

export default function ClinicMap() {

    const clinic = {
        name: "ProHealth Clinic",
        address: "Jaipur, Rajasthan, India",
        phone: "+91 98765 43210"
    };

    return (

        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >

                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-100 p-4 rounded-full">
                            <MapPin className="text-blue-600" size={30} />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-800">
                        Find Our Clinic
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Easily locate us and visit for consultations and treatments
                    </p>

                </motion.div>

                {/* Map Container */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border"
                >

                    {/* Google Map */}

                    <iframe
                        title="clinic location"
                        src="https://maps.google.com/maps?q=jaipur%20rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-[420px] border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />

                    {/* Floating Clinic Info Card */}

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="absolute bottom-6 left-6 bg-white shadow-xl rounded-xl p-6 max-w-xs"
                    >

                        <h3 className="font-bold text-lg text-gray-800">
                            {clinic.name}
                        </h3>

                        <p className="text-gray-500 text-sm mt-2">
                            {clinic.address}
                        </p>

                        <div className="flex items-center gap-2 mt-3 text-blue-600">

                            <Phone size={16} />

                            <span className="text-sm">
                                {clinic.phone}
                            </span>

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-3 mt-4">

                            <a
                                href="tel:+919876543210"
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                            >
                                <Phone size={16} />
                                Call
                            </a>

                            <a
                                href="https://maps.google.com"
                                target="_blank"
                                className="flex items-center gap-2 border px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition"
                            >
                                <Navigation size={16} />
                                Directions
                            </a>

                        </div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}