import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {

    const year = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", path: "/" },
        { name: "Doctors", path: "/doctors" },
        { name: "Book Appointment", path: "/book-appointment" },
        { name: "Contact", path: "/contact" }
    ];

    const services = [
        "General Checkup",
        "Dental Care",
        "Cardiology",
        "Orthopedic",
        "Emergency Care"
    ];

    return (

        <footer className="bg-gray-900 text-gray-300 pt-14">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* Clinic Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Pro Health
                    </h2>

                    <p className="text-gray-400 text-sm">
                        Providing trusted healthcare services with modern
                        technology and experienced doctors for better patient care.
                    </p>

                    {/* Social Media */}
                    <div className="flex gap-4 mt-5 text-xl">

                        <a href="#" className="hover:text-blue-400">
                            <FaFacebook />
                        </a>

                        <a href="#" className="hover:text-pink-400">
                            <FaInstagram />
                        </a>

                        <a href="#" className="hover:text-blue-300">
                            <FaTwitter />
                        </a>

                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h3 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-2">

                        {quickLinks.map((link, i) => (

                            <li key={i}>

                                <Link
                                    to={link.path}
                                    className="hover:text-blue-400 transition"
                                >
                                    {link.name}
                                </Link>

                            </li>

                        ))}

                    </ul>

                </motion.div>

                {/* Services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h3 className="text-lg font-semibold text-white mb-4">
                        Services
                    </h3>

                    <ul className="space-y-2">

                        {services.map((service, i) => (

                            <li
                                key={i}
                                className="hover:text-blue-400 transition"
                            >
                                {service}
                            </li>

                        ))}

                    </ul>

                </motion.div>

                {/* Contact */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h3 className="text-lg font-semibold text-white mb-4">
                        Contact Us
                    </h3>

                    <ul className="space-y-3 text-sm">

                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt />
                            Jaipur, Rajasthan
                        </li>

                        <li className="flex items-center gap-3">
                            <FaPhoneAlt />
                            +91 98765 43210
                        </li>

                        <li className="flex items-center gap-3">
                            <FaEnvelope />
                            support@prohealth.com
                        </li>

                    </ul>

                    {/* Working Hours */}
                    <div className="mt-5 text-sm">

                        <p className="text-gray-400">
                            Mon - Sat: 9:00 AM - 8:00 PM
                        </p>

                        <p className="text-gray-400">
                            Sunday: Emergency Only
                        </p>

                    </div>

                </motion.div>

            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 mt-12 py-6 text-center text-sm text-gray-400">

                © {year} Pro Health Clinic. All rights reserved.

            </div>

        </footer>
    );
}