import React from "react";
import { Toaster } from "react-hot-toast";
import AppointmentHero from "./sections/AppointmentHero";
import AppointmentForm from "./sections/AppointmentForm";
import AppointmentInfo from "./sections/AppointmentInfo";

export default function BookAppointment() {
    return (
        <div className="bg-gray-50 min-h-screen">

            <Toaster position="top-right" />

            <AppointmentHero />

            <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">

                <AppointmentForm />

                <AppointmentInfo />

            </div>

        </div>
    );
}