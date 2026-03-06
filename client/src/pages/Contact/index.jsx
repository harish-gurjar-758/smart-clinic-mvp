import React from "react";
import ContactHero from "./sections/ContactHero";
import ContactInfo from "./sections/ContactInfo";
import ContactForm from "./sections/ContactForm";
import WorkingHours from "./sections/WorkingHours";
import ClinicMap from "./sections/ClinicMap";
import ContactCTA from "./sections/ContactCTA";


export default function Contact() {
    return (
        <div>

            <ContactHero />

            <ContactInfo />

            <ContactForm />

            <WorkingHours />

            <ClinicMap />

            <ContactCTA />

        </div>
    );
}