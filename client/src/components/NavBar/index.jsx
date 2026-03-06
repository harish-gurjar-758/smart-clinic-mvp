import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo/Logo";

export default function NavBar() {

    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-white shadow-md sticky top-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Logo />

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 font-medium text-gray-700">

                    <Link className="hover:text-blue-600 transition" to="/">
                        Home
                    </Link>

                    <Link className="hover:text-blue-600 transition" to="/doctors">
                        Doctors
                    </Link>

                    <Link className="hover:text-blue-600 transition" to="/contact">
                        Contact
                    </Link>

                    <Link
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        to="/book-appointment"
                    >
                        Book Appointment
                    </Link>

                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}
            {open && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="md:hidden flex flex-col gap-4 px-6 pb-6 text-gray-700"
                >
                    <Link to="/">Home</Link>
                    <Link to="/doctors">Doctors</Link>
                    <Link to="/contact">Contact</Link>
                    <Link className="text-blue-600 font-semibold" to="/book-appointment">
                        Book Appointment
                    </Link>
                </motion.div>
            )}
        </motion.header>
    );
}