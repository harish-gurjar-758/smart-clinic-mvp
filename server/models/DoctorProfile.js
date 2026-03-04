const mongoose = require('mongoose');

const DoctorProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true }, // Years
    qualifications: [{ type: String }],
    about: { type: String },
    fees: { type: Number, required: true },
    availableSlots: [{
        date: { type: Date, required: true },
        time: { type: String, required: true }
    }],
    rating: { type: Number, default: 0 },
    totalReviews: { type: Number, default: 0 }
});

module.exports = mongoose.model('DoctorProfile', DoctorProfileSchema);