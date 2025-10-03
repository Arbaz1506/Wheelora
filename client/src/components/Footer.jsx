import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-[var(--color-text-muted)] bg-[var(--color-surface)] border-t border-[var(--color-borderColor)]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 border-b border-[var(--color-borderColor)]'>
        {/* Brand Name */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold text-[var(--color-accent)]'>Wheelora</h1>
          <p className='max-w-80'>
            Welcome to Wheelora. Discover a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          {/* Social Icons */}
          <div className='flex items-center gap-3 mt-2'>
            <a href="#" aria-label="Facebook"><img src={assets.facebook_logo} alt="Facebook" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
            <a href="#" aria-label="Instagram"><img src={assets.instagram_logo} alt="Instagram" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
            <a href="#" aria-label="Twitter"><img src={assets.twitter_logo} alt="Twitter" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
            <a href="#" aria-label="Gmail"><img src={assets.gmail_logo} alt="Gmail" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-base font-medium text-[var(--color-text)] uppercase mb-1'>Quick Links</h2>
          <ul className='flex flex-col gap-1.5'>
            <li><a href="/" className='hover:text-[var(--color-accent)] transition'>Home</a></li>
            <li><a href="/cars" className='hover:text-[var(--color-accent)] transition'>Browse Cars</a></li>
            <li><a href="/owner/add-car" className='hover:text-[var(--color-accent)] transition'>List Your Cars</a></li>
            <li><a href="/" className='hover:text-[var(--color-accent)] transition'>About Us</a></li>
          </ul>
        </div>
        {/* Resources */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-base font-medium text-[var(--color-text)] uppercase mb-1'>Resources</h2>
          <ul className='flex flex-col gap-1.5'>
            <li><a href="#" className='hover:text-[var(--color-accent)] transition'>Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-base font-medium text-[var(--color-text)] uppercase mb-1'>Contact</h2>
          <ul className='flex flex-col gap-1.5'>
            <li>1234 Luxury Drive</li>
            <li>Delhi, India</li>
            <li>+91 8754986521</li>
            <li>info@example.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 mt-4 border-t border-[var(--color-borderColor)]'>
        <p className='text-center md:text-left w-full md:w-auto'>© {new Date().getFullYear()} Wheelora. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#" className='hover:text-[var(--color-accent)] transition'>Privacy</a></li>
          <li>|</li>
          <li><a href="#" className='hover:text-[var(--color-accent)] transition'>Terms</a></li>
          <li>|</li>
          <li><a href="#" className='hover:text-[var(--color-accent)] transition'>Sitemap</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
