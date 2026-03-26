import React, { useEffect, useState } from 'react';
import Title from '../../components/Owner/Title';
import { dummyMyBookingsData } from '../../assets/assets';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setBookings(dummyMyBookingsData);
  }, []);

  return (
    <div
      className="w-full px-4 md:px-10 py-6 
      bg-gradient-to-br from-[#02140f] via-[#052e2b] to-[#021a17] 
      min-h-screen flex justify-center"
    >
      <div className="w-full max-w-6xl">
        {/* Page Title */}
        <Title
          title="My Bookings"
          subTitle="Track and manage your bookings"
        />

        {/* Table Container */}
        <div
          className="mt-8 rounded-2xl overflow-hidden
          bg-[#041c1a]/40 backdrop-blur-xl
          border border-emerald-500/20
          shadow-[0_0_40px_rgba(16,185,129,0.3)]"
        >
          {/* Horizontal Scroll Wrapper */}
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[640px] text-sm text-left">
              {/* Table Head */}
              <thead className="text-emerald-300 uppercase text-xs border-b border-emerald-500/30">
                <tr>
                  <th className="px-4 py-3 md:px-6 md:py-4">Car</th>
                  <th className="px-4 py-3 md:px-6 md:py-4">Date Range</th>
                  <th className="px-4 py-3 md:px-6 md:py-4">Total</th>
                  <th className="px-4 py-3 md:px-6 md:py-4">Payment</th>
                  <th className="px-4 py-3 md:px-6 md:py-4 text-center">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-emerald-400">
                      No Bookings Found 📋
                    </td>
                  </tr>
                ) : (
                  bookings.map((booking) => (
                    <tr
                      key={booking._id}
                      className="border-b border-emerald-500/10 
                        transform transition-all duration-300
                        hover:scale-[1.02] hover:-translate-y-1
                        hover:bg-[#052420]/60 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
                        hover:border-l-4 hover:border-emerald-400"
                    >
                      {/* Car */}
                      <td className="px-4 py-3 md:px-6 md:py-4 flex items-center gap-3">
                        <img
                          src={booking.car.image}
                          alt={booking.car.name}
                          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-emerald-400/30
                            transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                        />
                        <div>
                          <p className="text-emerald-200 font-semibold text-sm md:text-base">
                            {booking.car.brand} {booking.car.model}
                          </p>
                          <p className="text-emerald-400 text-xs md:text-sm">
                            {booking.car.seating_capacity || 5} seats • {booking.car.transmission || "Automatic"}
                          </p>
                        </div>
                      </td>

                      {/* Date Range */}
                      <td className="px-4 py-3 md:px-6 md:py-4 text-emerald-300">
                        {new Date(booking.pickupDate).toLocaleDateString()} -{" "}
                        {new Date(booking.returnDate).toLocaleDateString()}
                      </td>

                      {/* Total */}
                      <td className="px-4 py-3 md:px-6 md:py-4 text-emerald-400 font-semibold">
                        ${booking.price}
                      </td>

                      {/* Payment Column */}
                      <td className="px-4 py-3 md:px-6 md:py-4">
                        <span
                          className={`text-xs px-3 py-1 rounded-full font-medium
                            ${booking.status === "confirmed"
                              ? "bg-emerald-500/30 text-emerald-100 border border-emerald-400/50"
                              : "bg-yellow-700/30 text-emerald-100 border border-yellow-500/50"}`}
                        >
                          {booking.status === "confirmed" ? "Paid" : "Pending Payment"}
                        </span>
                      </td>

                      {/* Action Column */}
                      <td className="px-4 py-3 md:px-6 md:py-4 text-center">
                        {booking.status === "pending" ? (
                          <select
                            className="bg-[#041c1a]/60 border border-emerald-400 text-emerald-200 rounded px-3 py-1 text-sm
                              transition-all duration-300 hover:bg-[#052420]/80"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            <option value="pending">Pending</option>
                            <option value="canceled">Canceled</option>
                            <option value="confirmed">Confirmed</option>
                          </select>
                        ) : booking.status === "confirmed" ? (
                          <span className="px-3 py-1 rounded-full bg-emerald-600 text-emerald-50 font-semibold text-sm">
                            ✅ Confirmed
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-yellow-700 text-emerald-50 font-semibold text-sm">
                            ⚠ {booking.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;