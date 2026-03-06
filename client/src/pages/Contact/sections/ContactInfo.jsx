import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {

    const contactData = [
        {
            icon: <Phone size={38} />,
            title: "Call Us",
            value: "+91 98765 43210",
            desc: "Speak directly with our clinic staff for quick assistance.",
            color: "from-blue-500 to-cyan-400"
        },
        {
            icon: <Mail size={38} />,
            title: "Email Support",
            value: "support@prohealthclinic.com",
            desc: "Send us your queries and we will respond within 24 hours.",
            color: "from-purple-500 to-pink-400"
        },
        {
            icon: <MapPin size={38} />,
            title: "Clinic Location",
            value: "Jaipur, Rajasthan, India",
            desc: "Visit our clinic for consultations and treatments.",
            color: "from-green-500 to-emerald-400"
        },
        {
            icon: <Clock size={38} />,
            title: "Working Hours",
            value: "Mon - Sat : 9 AM - 8 PM",
            desc: "Emergency support available 24/7.",
            color: "from-orange-500 to-yellow-400"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-blue-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800">
                        Get In Touch
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        Have questions or need medical assistance? Our team is here
                        to help you 24/7 with appointments, consultations and
                        emergency support.
                    </p>
                </motion.div>


                {/* Contact Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {contactData.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-300 overflow-hidden"
                        >

                            {/* Gradient Top Border */}

                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />

                            {/* Icon */}

                            <div className={`inline-flex p-4 rounded-full text-white bg-gradient-to-r ${item.color} mb-5 group-hover:scale-110 transition`}>
                                {item.icon}
                            </div>

                            {/* Title */}

                            <h3 className="text-xl font-semibold text-gray-800">
                                {item.title}
                            </h3>

                            {/* Value */}

                            <p className="text-blue-600 font-medium mt-2">
                                {item.value}
                            </p>

                            {/* Description */}

                            <p className="text-gray-500 text-sm mt-3">
                                {item.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>
    );
}