import React from "react";

import DoctorHero from "./section/DoctorHero";
import DoctorList from "./section/DoctorList";
import DoctorFilter from "./section/DoctorFilter";
import FeaturedDoctors from "./section/FeaturedDoctors";
import DoctorStats from "./section/DoctorStats";
import ConsultationBanner from "./section/ConsultationBanner";
import Testimonials from "../../components/Testimonials";


export default function Doctors() {
    return (
        <>

            <DoctorHero />

            <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
                <DoctorFilter />
                <DoctorList />
            </div>

            <FeaturedDoctors />

            <DoctorStats />

            <ConsultationBanner />

            <Testimonials />
        </>
    );
}