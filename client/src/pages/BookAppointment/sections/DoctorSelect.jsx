import React from "react";

export default function DoctorSelect({ value, onChange }) {

    const doctors = [
        "Dr. Rahul Sharma - Cardiologist",
        "Dr. Priya Verma - Dentist",
        "Dr. Amit Singh - General Physician",
        "Dr. Neha Kapoor - Dermatologist"
    ];

    return (

        <select
            name="doctor"
            value={value}
            onChange={onChange}
            className="w-full border p-3 rounded-lg"
        >

            <option value="">Select Doctor</option>

            {doctors.map((doc, i) => (
                <option key={i} value={doc}>
                    {doc}
                </option>
            ))}

        </select>

    );
}