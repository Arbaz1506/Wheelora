import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import  { useNavigate }  from 'react-router-dom'
import { motion } from 'motion/react'

const Hero = () => {
    
    const navigate = useNavigate();
    const [pickupLocation, setPickupLocation] = useState('')
    const {pickupDate, setPickupDate, returnDate, setReturnDate}  = useAppContext();

    const handleSearch = (e) =>{
      e.preventDefault();
      navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' + pickupDate + '&returnDate=' + returnDate )
    }

  return (
    <motion.div
      initial={{ opacity:0 }}
      animate ={{ opacity:1 }}
      transition={{ duration: 0.8 }}
      className='min-h-screen flex flex-col items-center justify-center gap-14 bg-[var(--color-bg-secondary)] text-center pt-24 pb-16'>
      <motion.h1 
        initial={{y:50, opacity:0}}
        animate ={{y:0, opacity:1}}
        transition={{ duration: 0.8, delay:0.2 }}
        className='text-4xl md:text-5xl font-semibold text-[var(--color-text)]'>
          Welcome to Wheelora
      </motion.h1>
      <motion.p
        initial={{y:30, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{ duration: 0.8, delay:0.3 }}
        className='text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mt-2 mb-4'>
  Premium luxury and everyday car rentals. Discover, book, and drive your dream car with Wheelora—where every journey is first class.
      </motion.p>
      <motion.form
        initial={{scale: 0.95 , y:50, opacity:0}}
        animate ={{scale:1, y:0, opacity:1}}
        transition={{duration: 0.6, delay:0.4}}
        onSubmit={handleSearch}
        className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-[var(--color-surface)] shadow-2xl mb-10'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min-md:ml-8'>
          <div className='flex flex-col items-start gap-2'>
            <select required value = {pickupLocation} onChange={(e) =>setPickupLocation(e.target.value)} className='bg-[var(--color-bg-secondary)] text-[var(--color-text)] border-2 border-[var(--color-borderColor)] focus:outline-none focus:ring-2 focus:ring-[var(--color-borderColor)] rounded px-3 py-2'>
              <option value=""> Pickup Location </option>
              {cityList.map((city) => <option key={city} value = {city} > {city} </option>)}
            </select>
                <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select location'}</p>
               </div>

               <div className='flex flex-col items-start gap-2'>
                <label htmlFor="Pickup-date"> Pick-up Date </label> 
                <input 
                  value={pickupDate} 
                  onChange={e=> setPickupDate(e.target.value)} 
                  type="date" id = "picking-date" 
                  min={new Date().toISOString().split('T')[0]} 
                  placeholder="dd-mm-yyyy"
                  className='border-2 border-[var(--color-borderColor)] focus:outline-none focus:ring-2 focus:ring-[var(--color-borderColor)] bg-[#18181b] text-[var(--color-text)] placeholder-[var(--color-text-muted)] px-3 py-2 rounded text-sm appearance-none' required />
               </div>

               <div className='flex flex-col items-start gap-2'>
                <label htmlFor="return-date"> Return Date </label> 
                <input 
                  value={returnDate}  
                  onChange={e=> setReturnDate(e.target.value)} 
                  min ={pickupDate}
                  type="date" id = "return-date"  
                  placeholder="dd-mm-yyyy"
                  className='border-2 border-[var(--color-borderColor)] focus:outline-none focus:ring-2 focus:ring-[var(--color-borderColor)] bg-[#18181b] text-[var(--color-text)] placeholder-[var(--color-text-muted)] px-3 py-2 rounded text-sm appearance-none' required />
               </div>
               <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale:0.95}}
               className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>search
                <img src={assets.search_icon} alt="search" className='brightness-300' />
               </motion.button>
            </div>
        </motion.form>
    </motion.div>
  )
}

export default Hero