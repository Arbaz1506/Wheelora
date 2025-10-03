import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

   const navigate = useNavigate();
  return (
    <div className='flex flex-col md:flex-row items-center md:items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[var(--color-bg-secondary)] to-[var(--color-surface)] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden border border-[var(--color-borderColor)] shadow-lg gap-8'>
      <div className='flex-1 flex flex-col justify-center text-[var(--color-text)] md:pr-8'>
        <h2 className='text-3xl font-medium mb-2 md:mb-4'>Do You Own a Luxury Car?</h2>
  <p className='mb-2 text-[var(--color-text-muted)]'>Monetize your vehicle effortlessly by listing it on Wheelora.</p>
        <p className='mb-4 max-w-2xl text-[var(--color-text-muted)]'>We take care of insurance, driver verification and secure payments—so you can earn passive income, stress-free.</p>
        <button className='px-6 py-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-all text-white rounded-lg text-sm mt-2 md:mt-0 w-max shadow-md' onClick={()=>{navigate('/owner/add-car')}}>List your car</button>
      </div>
      <img src={assets.banner_car_image} alt="car" className='max-h-45 md:max-h-60 mt-8 md:mt-0 flex-1 object-contain' />
    </div>
  )
}

export default Banner