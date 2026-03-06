import React from "react";
import DoctorCard from "../../../components/DoctorCard";

const doctors = [
    {
        id: 1,
        name: "Dr. Amit Sharma",
        specialization: "Cardiologist",
        experience: 12,
        rating: 4.8,
        fee: 500,
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Dr. Priya Patel",
        specialization: "Dermatologist",
        experience: 8,
        rating: 4.7,
        fee: 400,
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
];

export default function DoctorList() {
    return (
        <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">

            {doctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} />
            ))}

        </div>
    );
}