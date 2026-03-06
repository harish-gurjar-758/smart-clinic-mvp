export default function DoctorCard({ doctor }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col h-full">

            {/* Doctor Image */}

            <div className="flex items-center gap-4">

                <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-blue-600 text-sm">{doctor.specialization}</p>
                </div>

            </div>

            {/* Info */}

            <div className="mt-5 space-y-2 text-sm text-gray-600 flex-grow">

                <p>Experience: {doctor.experience} Years</p>
                <p>Rating: ⭐ {doctor.rating}</p>
                <p>Consultation Fee: ₹{doctor.fee}</p>

            </div>

            {/* Button */}

            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Book Appointment
            </button>

        </div>
    );
}