import React from 'react'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Doctors from './sections/Doctors'
import WhyChooseUs from './sections/WhyChooseUs'
import Testimonials from '../../components/Testimonials'
import CTA from './sections/CTA'

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <Doctors />
            <WhyChooseUs />
            <Testimonials />
            <CTA />
        </div>
    )
}
