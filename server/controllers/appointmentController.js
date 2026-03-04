const Appointment = require('../models/Appointment');
const DoctorProfile = require('../models/DoctorProfile');
const sendEmail = require('../utils/email');

// @desc    Book Appointment
// @route   POST /api/appointments/book
exports.bookAppointment = async (req, res) => {
    try {
        const { doctorId, date, time, notes } = req.body;
        const patientId = req.user._id;

        // Check Slot Availability
        const existing = await Appointment.findOne({ doctor: doctorId, date, time, status: { $ne: 'cancelled' } });
        if (existing) return res.status(400).json({ message: 'Slot already booked' });

        const appointment = await Appointment.create({
            patient: patientId,
            doctor: doctorId,
            date,
            time,
            notes
        });

        // Send Email Notification
        const doctor = await DoctorProfile.findById(doctorId).populate('user');
        const patient = await Appointment.findById(appointment._id).populate('patient');

        // Mock Email Function
        // await sendEmail({ email: doctor.user.email, subject: 'New Appointment', message: '...' });

        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get My Appointments
// @route   GET /api/appointments/my
exports.getMyAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ patient: req.user._id }).populate('doctor');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};