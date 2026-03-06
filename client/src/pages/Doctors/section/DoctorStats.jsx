import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ target }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= target) {
                start = target;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return <span ref={ref}>{count}</span>;
}

export default function DoctorStats() {
    const stats = [
        { number: 150, label: "Doctors", suffix: "+" },
        { number: 25, label: "Specializations", suffix: "+" },
        { number: 20000, label: "Patients Treated", suffix: "+" },
        { number: 15, label: "Years Experience", suffix: "+" },
    ];

    return (
        <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">

            {/* background blur circles */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.2 } },
                    }}
                    className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center"
                >

                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: { opacity: 1, y: 0 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:shadow-2xl transition"
                        >

                            <h2 className="text-5xl font-bold mb-2">

                                <Counter target={item.number} />

                                {item.suffix}

                            </h2>

                            <p className="text-white/90 text-lg font-medium">

                                {item.label}

                            </p>

                        </motion.div>
                    ))}

                </motion.div>

            </div>

        </section>
    );
}