import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Doctor from "../pages/Doctor/Doctor";

// import Appointments from "../pages/Appointments";
// import Doctors from "../pages/Doctors";
// import Settings from "../pages/Settings";

export default function AdminRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    {/* <Route path="appointments" element={<Appointments />} /> */}
                    <Route path="doctors" element={<Doctor />} />
                    {/* <Route path="settings" element={<Settings />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}