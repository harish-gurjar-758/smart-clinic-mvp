import React from "react";

export default function DoctorCard({ doctor }) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">

            <div className="flex items-center gap-4">

                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-bold text-lg">{doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.specialization}</p>
                    <p className="text-sm text-gray-500">{doctor.experience} yrs experience</p>
                </div>

            </div>

            <div className="mt-4 flex justify-between items-center">

                <div>
                    ⭐ {doctor.rating}
                    <p className="text-sm text-gray-500">₹{doctor.fee}</p>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Book
                </button>

            </div>
        </div>
    );
}