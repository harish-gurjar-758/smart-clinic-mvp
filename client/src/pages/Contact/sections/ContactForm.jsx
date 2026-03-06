import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        // simulate API request
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        }, 1500);
    };

    return (

        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">

            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold text-gray-800">
                        Send Us a Message
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Have questions or need medical assistance? Fill out the
                        form and our healthcare team will contact you shortly.
                    </p>
                </motion.div>


                {/* Form */}

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-2xl rounded-3xl p-10 grid md:grid-cols-2 gap-6 border"
                >

                    {/* Name */}

                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Email */}

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Phone */}

                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Subject */}

                    <div className="relative">
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Message */}

                    <div className="md:col-span-2">
                        <textarea
                            rows="5"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Button */}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className="md:col-span-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition"
                    >

                        {loading ? "Sending..." : "Send Message"}

                        <Send size={18} />

                    </motion.button>


                    {/* Success Message */}

                    {success && (
                        <p className="md:col-span-2 text-green-600 text-center font-medium">
                            ✅ Message sent successfully! Our team will contact you soon.
                        </p>
                    )}

                </motion.form>

            </div>

        </section>

    );
}