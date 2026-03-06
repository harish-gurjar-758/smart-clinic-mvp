import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat } from "react-icons/fa";

export default function Logo() {

    const [adminLogo, setAdminLogo] = useState(null);

    // Example API fetch (logo controlled by admin)
    useEffect(() => {
        async function fetchLogo() {
            try {
                const res = await fetch("/api/logo");
                const data = await res.json();
                if (data?.logo) {
                    setAdminLogo(data.logo);
                }
            } catch (error) {
                console.log("Default logo used");
            }
        }

        fetchLogo();
    }, []);

    return (
        <div className="flex items-center gap-3">

            {/* If admin uploads logo */}
            {adminLogo ? (
                <motion.img
                    src={adminLogo}
                    alt="clinic-logo"
                    className="w-12 h-12 object-contain"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
            ) : (
                /* Default Logo */
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-red-500 text-3xl"
                    >
                        <FaHeartbeat />
                    </motion.div>

                    <div>
                        <h1 className="text-xl font-bold text-gray-800 tracking-wide">
                            ProHealth
                        </h1>
                        <p className="text-xs text-gray-500">
                            Smart Clinic Care
                        </p>
                    </div>
                </motion.div>
            )}
        </div>
    );
}