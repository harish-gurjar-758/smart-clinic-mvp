import React from "react";

export default function Testimonials() {

    const reviews = [
        {
            name: "Amit Kumar",
            text: "Excellent doctors and quick appointment system."
        },
        {
            name: "Pooja Sharma",
            text: "Very professional staff and modern clinic."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-10">
                    What Our Patients Say
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {reviews.map((r, i) => (

                        <div
                            key={i}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >

                            <p className="text-gray-600">
                                "{r.text}"
                            </p>

                            <h4 className="mt-4 font-semibold">
                                {r.name}
                            </h4>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}