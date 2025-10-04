import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
  <footer className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 pt-16 text-sm text-[var(--color-text-muted)] bg-[var(--color-surface)] border-t border-[var(--color-borderColor)]'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 border-b border-[var(--color-borderColor)]'>
        {/* Brand & Mission */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold text-[var(--color-accent)]'>Wheelora</h1>
          <p className='max-w-80'>
            Empowering journeys, one ride at a time. Wheelora connects you to the perfect car for every occasion—whether it’s a weekend escape or a business trip. Trusted by drivers and owners across India.
          </p>
          <div className='flex items-center gap-3 mt-2'>
            <a href="https://facebook.com/wheelora" aria-label="Facebook" target="_blank" rel="noopener"><img src={assets.facebook_logo} alt="Facebook" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
            <a href="https://instagram.com/wheelora" aria-label="Instagram" target="_blank" rel="noopener"><img src={assets.instagram_logo} alt="Instagram" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
            <a href="https://twitter.com/wheelora" aria-label="Twitter" target="_blank" rel="noopener"><img src={assets.twitter_logo} alt="Twitter" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
            <a href="mailto:contact@wheelora.com" aria-label="Email"><img src={assets.gmail_logo} alt="Email" className='w-5 h-5 grayscale hover:grayscale-0 transition' /></a>
          </div>
        </div>
        {/* Explore */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-base font-medium text-[var(--color-text)] uppercase mb-1'>Explore</h2>
          <ul className='flex flex-col gap-1.5'>
            <li><a href="/" className='hover:text-[var(--color-accent)] transition'>Home</a></li>
            <li><a href="/cars" className='hover:text-[var(--color-accent)] transition'>Find a Car</a></li>
            <li><a href="/owner/add-car" className='hover:text-[var(--color-accent)] transition'>Become a Host</a></li>
            <li><a href="/about" className='hover:text-[var(--color-accent)] transition'>About Wheelora</a></li>
          </ul>
        </div>
        {/* Support */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-base font-medium text-[var(--color-text)] uppercase mb-1'>Support</h2>
          <ul className='flex flex-col gap-1.5'>
            <li><a href="/help" className='hover:text-[var(--color-accent)] transition'>Help Center</a></li>
            <li><a href="/policies" className='hover:text-[var(--color-accent)] transition'>Policies</a></li>
            <li><a href="/insurance" className='hover:text-[var(--color-accent)] transition'>Insurance Info</a></li>
            <li><a href="/contact" className='hover:text-[var(--color-accent)] transition'>Contact Us</a></li>
          </ul>
        </div>
        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <h2 className='text-base font-medium text-[var(--color-text)] uppercase mb-1'>Contact</h2>
          <ul className='flex flex-col gap-1.5'>
            <li>Registered Office:</li>
            <li>Connaught Place, New Delhi, India</li>
            <li>+91 98765 43210</li>
            <li>contact@wheelora.com</li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5 mt-4 border-t border-[var(--color-borderColor)]'>
        <p className='text-center md:text-left w-full md:w-auto'>© {new Date().getFullYear()} Wheelora. Crafted with passion in India.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="/privacy" className='hover:text-[var(--color-accent)] transition'>Privacy</a></li>
          <li>|</li>
          <li><a href="/terms" className='hover:text-[var(--color-accent)] transition'>Terms</a></li>
          <li>|</li>
          <li><a href="/sitemap" className='hover:text-[var(--color-accent)] transition'>Sitemap</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
