import React from "react";

export default function DoctorFilter() {
    return (
        <div className="bg-white p-6 rounded-xl shadow h-fit">

            <h2 className="font-bold text-lg mb-4">Filters</h2>

            <div className="space-y-4">

                <div>
                    <label className="text-sm">Specialization</label>
                    <select className="w-full border rounded p-2 mt-1">
                        <option>All</option>
                        <option>Cardiologist</option>
                        <option>Dermatologist</option>
                        <option>Dentist</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm">Experience</label>
                    <select className="w-full border rounded p-2 mt-1">
                        <option>Any</option>
                        <option>5+ years</option>
                        <option>10+ years</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm">Consultation Fee</label>
                    <select className="w-full border rounded p-2 mt-1">
                        <option>Any</option>
                        <option>₹200 - ₹500</option>
                        <option>₹500 - ₹1000</option>
                    </select>
                </div>

            </div>

        </div>
    );
}