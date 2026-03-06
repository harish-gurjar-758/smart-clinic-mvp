import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function WorkingHours() {

    const schedule = [
        { day: "Monday", time: "9:00 AM – 8:00 PM", status: "open" },
        { day: "Tuesday", time: "9:00 AM – 8:00 PM", status: "open" },
        { day: "Wednesday", time: "9:00 AM – 8:00 PM", status: "open" },
        { day: "Thursday", time: "9:00 AM – 8:00 PM", status: "open" },
        { day: "Friday", time: "9:00 AM – 8:00 PM", status: "open" },
        { day: "Saturday", time: "10:00 AM – 6:00 PM", status: "open" },
        { day: "Sunday", time: "Closed", status: "closed" }
    ];

    return (

        <section className="py-24 bg-gradient-to-b from-blue-50 to-white">

            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >

                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-100 p-4 rounded-full">
                            <Clock className="text-blue-600" size={30} />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-800">
                        Clinic Working Hours
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Visit our clinic during the following hours
                    </p>

                </motion.div>

                {/* Schedule Card */}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-2xl rounded-3xl p-10 border"
                >

                    {schedule.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="flex justify-between items-center py-4 border-b last:border-none"
                        >

                            <span className="font-medium text-gray-700">
                                {item.day}
                            </span>

                            <span className="text-gray-500">
                                {item.time}
                            </span>

                            <span
                                className={`text-sm font-semibold px-3 py-1 rounded-full ${item.status === "open"
                                        ? "bg-green-100 text-green-600"
                                        : "bg-red-100 text-red-500"
                                    }`}
                            >
                                {item.status === "open" ? "Open" : "Closed"}
                            </span>

                        </motion.div>

                    ))}

                </motion.div>

            </div>

        </section>
    );
}