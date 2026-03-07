import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import DoctorSelect from "./DoctorSelect";

export default function AppointmentForm() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        doctor: "",
        date: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.phone || !form.doctor || !form.date) {
            toast.error("Please fill all required fields");
            return;
        }

        toast.success("Appointment booked successfully!");

        setForm({
            name: "",
            phone: "",
            doctor: "",
            date: "",
            message: ""
        });
    };

    return (

        <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
        >

            <h2 className="text-2xl font-bold mb-6">
                Patient Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full border p-3 rounded-lg"
                />

                <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full border p-3 rounded-lg"
                />

                <DoctorSelect value={form.doctor} onChange={handleChange} />

                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Health Issue (Optional)"
                    className="w-full border p-3 rounded-lg"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Confirm Appointment
                </button>

            </form>

        </motion.div>
    );
}