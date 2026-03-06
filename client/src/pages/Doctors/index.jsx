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

            <section className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-6 py-16">

                    {/* Page Title */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Find the Right Doctor
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Book appointments with top specialists near you
                        </p>
                    </div>

                    {/* Layout */}
                    <div className="grid lg:grid-cols-4 gap-10">

                        {/* Sidebar Filter */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24">
                                <DoctorFilter />
                            </div>
                        </div>

                        {/* Doctor List */}
                        <div className="lg:col-span-3">
                            <DoctorList />
                        </div>

                    </div>

                </div>
            </section>

            <FeaturedDoctors />

            <DoctorStats />

            <ConsultationBanner />

            <Testimonials />
        </>
    );
}