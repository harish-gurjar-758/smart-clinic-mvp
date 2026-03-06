import React, { useState } from "react";
import DoctorCard from "../../../components/DoctorCard";
import { motion } from "framer-motion";

const doctors = [
    {
        id: 1,
        name: "Dr. Amit Sharma",
        specialization: "Cardiologist",
        experience: 12,
        rating: 4.8,
        fee: 500,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Dr. Priya Patel",
        specialization: "Dermatologist",
        experience: 8,
        rating: 4.7,
        fee: 400,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        name: "Dr. Rahul Verma",
        specialization: "Orthopedic Surgeon",
        experience: 15,
        rating: 4.9,
        fee: 700,
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        id: 4,
        name: "Dr. Neha Kapoor",
        specialization: "Gynecologist",
        experience: 10,
        rating: 4.6,
        fee: 500,
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 5,
        name: "Dr. Arjun Mehta",
        specialization: "Neurologist",
        experience: 14,
        rating: 4.8,
        fee: 800,
        image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        id: 6,
        name: "Dr. Kavita Singh",
        specialization: "Pediatrician",
        experience: 9,
        rating: 4.7,
        fee: 450,
        image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
        id: 7,
        name: "Dr. Rohan Gupta",
        specialization: "ENT Specialist",
        experience: 11,
        rating: 4.6,
        fee: 400,
        image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
        id: 8,
        name: "Dr. Anjali Desai",
        specialization: "Ophthalmologist",
        experience: 13,
        rating: 4.8,
        fee: 550,
        image: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
        id: 9,
        name: "Dr. Sandeep Kulkarni",
        specialization: "Psychiatrist",
        experience: 16,
        rating: 4.9,
        fee: 750,
        image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
        id: 10,
        name: "Dr. Sneha Choudhary",
        specialization: "Dentist",
        experience: 7,
        rating: 4.5,
        fee: 300,
        image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
        id: 11,
        name: "Dr. Vikram Bansal",
        specialization: "General Physician",
        experience: 18,
        rating: 4.8,
        fee: 350,
        image: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
        id: 12,
        name: "Dr. Pooja Nair",
        specialization: "Endocrinologist",
        experience: 10,
        rating: 4.7,
        fee: 600,
        image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
        id: 13,
        name: "Dr. Mohit Saxena",
        specialization: "Urologist",
        experience: 12,
        rating: 4.6,
        fee: 650,
        image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
        id: 14,
        name: "Dr. Ritu Agarwal",
        specialization: "Oncologist",
        experience: 15,
        rating: 4.9,
        fee: 900,
        image: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    {
        id: 15,
        name: "Dr. Abhishek Jain",
        specialization: "Gastroenterologist",
        experience: 11,
        rating: 4.7,
        fee: 700,
        image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
    {
        id: 16,
        name: "Dr. Meera Iyer",
        specialization: "Pulmonologist",
        experience: 9,
        rating: 4.6,
        fee: 500,
        image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
        id: 17,
        name: "Dr. Tarun Malhotra",
        specialization: "Plastic Surgeon",
        experience: 14,
        rating: 4.8,
        fee: 1200,
        image: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    {
        id: 18,
        name: "Dr. Shalini Roy",
        specialization: "Nutritionist",
        experience: 6,
        rating: 4.5,
        fee: 350,
        image: "https://randomuser.me/api/portraits/women/61.jpg",
    },
    {
        id: 19,
        name: "Dr. Karan Oberoi",
        specialization: "Sports Medicine",
        experience: 10,
        rating: 4.7,
        fee: 550,
        image: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    {
        id: 20,
        name: "Dr. Aditi Khanna",
        specialization: "Radiologist",
        experience: 13,
        rating: 4.8,
        fee: 650,
        image: "https://randomuser.me/api/portraits/women/63.jpg",
    }
];

export default function DoctorList() {
    const [visible, setVisible] = useState(6);

    return (
        <div>

            {/* Doctor Grid */}

            <motion.div
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.1 } },
                }}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >

                {doctors.slice(0, visible).map((doc) => (
                    <motion.div
                        key={doc.id}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 },
                        }}
                        className="h-full"
                    >
                        <DoctorCard doctor={doc} />
                    </motion.div>
                ))}

            </motion.div>

            {/* Load More Button */}

            {visible < doctors.length && (
                <div className="text-center mt-12">
                    <button
                        onClick={() => setVisible((prev) => prev + 6)}
                        className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                    >
                        Load More Doctors
                    </button>
                </div>
            )}

        </div>
    );
}