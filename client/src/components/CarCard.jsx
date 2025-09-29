import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        scrollTo(0, 0);
      }}
      className="group rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,119,255,0.2)]
        hover:shadow-[0_15px_40px_rgba(0,119,255,0.35)] hover:-translate-y-2
        transition-all duration-500 cursor-pointer bg-gray-900/60 border border-[#0077ff]/20"
    >
      {/* Car Image */}
      <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden rounded-t-2xl">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {car.isAvaliable && (
          <p className="absolute top-4 left-4 bg-[#0077ff]/90 text-white text-xs sm:text-sm px-3 py-1 rounded-full font-medium shadow-md">
            Available Now
          </p>
        )}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-[0_0_20px_rgba(0,119,255,0.3)]">
          <span className="font-semibold text-sm sm:text-base">
            {currency} {car.pricePerDay}
          </span>
          <span className="text-xs sm:text-sm text-white/80">/ day</span>
        </div>
      </div>

      {/* Car Info */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              {car.category} • {car.year}
            </p>
          </div>
        </div>

        {/* Car Specs */}
        <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4 text-gray-300">
          <div className="flex items-center text-sm sm:text-base">
            <img src={assets.users_icon} alt="Seats" className="h-4 sm:h-5 mr-2 invert" />
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center text-sm sm:text-base">
            <img src={assets.fuel_icon} alt="Fuel" className="h-4 sm:h-5 mr-2 invert" />
            <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center text-sm sm:text-base">
            <img src={assets.car_icon} alt="Transmission" className="h-4 sm:h-5 mr-2 invert" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center text-sm sm:text-base">
            <img src={assets.location_icon} alt="Location" className="h-4 sm:h-5 mr-2 invert" />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
