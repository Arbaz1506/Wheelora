import React, { useState } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState("");
  const { pickupDate, setPickupDate, returnDate, setReturnDate } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      `/cars?pickupLocation=${pickupLocation}&pickupDate=${pickupDate}&returnDate=${returnDate}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col items-center justify-center gap-12 md:gap-16 text-center overflow-hidden
        bg-gradient-to-br from-[#0b0b0f] via-[#1a1a1f] to-[#111111] px-4 sm:px-6 md:px-12"
    >
      {/* Background Speed Lines */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-gradient-to-r from-[#0077ff]/10 via-[#4b00ff]/10 to-[#0077ff]/10 animate-pulse-slow"></div>
      </div>

      {/* Headline */}
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text
          bg-gradient-to-r from-[#0077ff] via-[#4b00ff] to-[#ffffff]"
      >
        Find Your Ride, <span className="text-[#0077ff]">Drive with Wheelora</span>
      </motion.h1>

      {/* Search Form */}
      <motion.form
        initial={{ scale: 0.95, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between p-4 sm:p-6 md:rounded-3xl rounded-2xl
          w-full max-w-5xl bg-gray-900/60 backdrop-blur-xl border border-[#0077ff]/30 shadow-[0_0_30px_rgba(0,119,255,0.2)] gap-4 sm:gap-6"
      >
        {/* Pickup Location */}
        <div className="flex flex-col items-start gap-1 sm:gap-2 w-full">
          <select
            required
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full bg-gray-800 text-white border border-[#4b00ff]/50 rounded-lg px-2 sm:px-3 py-2 sm:py-2.5
              focus:ring-2 focus:ring-[#0077ff] outline-none transition text-sm sm:text-base"
          >
            <option value="">Pickup Location</option>
            {cityList.map((city) => (
              <option key={city} value={city} className="text-gray-900">
                {city}
              </option>
            ))}
          </select>
          <p className="px-1 text-xs sm:text-sm text-gray-400">
            {pickupLocation ? pickupLocation : "Select location"}
          </p>
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col items-start gap-1 sm:gap-2 w-full">
          <label htmlFor="pickup-date" className="text-xs sm:text-sm text-gray-400">
            Pick-up Date
          </label>
          <input
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            type="date"
            id="pickup-date"
            min={new Date().toISOString().split("T")[0]}
            className="w-full bg-gray-800 text-white border border-[#4b00ff]/50 rounded-lg px-2 sm:px-3 py-2 sm:py-2.5
              focus:ring-2 focus:ring-[#0077ff] outline-none transition text-sm sm:text-base"
            required
          />
        </div>

        {/* Return Date */}
        <div className="flex flex-col items-start gap-1 sm:gap-2 w-full">
          <label htmlFor="return-date" className="text-xs sm:text-sm text-gray-400">
            Return Date
          </label>
          <input
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            min={pickupDate}
            type="date"
            id="return-date"
            className="w-full bg-gray-800 text-white border border-[#4b00ff]/50 rounded-lg px-2 sm:px-3 py-2 sm:py-2.5
              focus:ring-2 focus:ring-[#0077ff] outline-none transition text-sm sm:text-base"
            required
          />
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 25px #0077ff, 0 0 35px #4b00ff" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3
            bg-gradient-to-r from-[#4b00ff] via-[#0077ff] to-[#ffffff]
            text-white rounded-full font-semibold shadow-lg transition text-sm sm:text-base"
        >
          Search
          <img src={assets.search_icon} alt="search" className="w-4 sm:w-5 h-4 sm:h-5 invert" />
        </motion.button>
      </motion.form>

      {/* Car Image */}
      <motion.img
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
        src={assets.main_car}
        alt="car"
        className="max-h-60 sm:max-h-72 md:max-h-80 drop-shadow-[0_10px_50px_rgba(0,119,255,0.3)] hover:scale-105 transition-transform"
      />

      {/* Neon / Metallic Blobs */}
      <div className="absolute -top-32 -left-32 w-64 sm:w-80 h-64 sm:h-80 bg-[#0077ff]/25 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse rotate-12"></div>
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#4b00ff]/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse -rotate-6"></div>
      <div className="absolute top-1/2 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-[#ffffff]/15 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse rotate-45"></div>
    </motion.div>
  );
};

export default Hero;
