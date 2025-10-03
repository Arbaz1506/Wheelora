import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>
      <div className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
        
        {/* Brand Name */}
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>Wheelora</h1>
          <p className='max-w-80 mt-3'>
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>

          {/* Social Icons */}
          <div className='flex items-center gap-3 mt-6'>
            <a href="#" aria-label="Facebook"><img src={assets.facebook_logo} alt="Facebook" className='w-5 h-5' /></a>
            <a href="#" aria-label="Instagram"><img src={assets.instagram_logo} alt="Instagram" className='w-5 h-5' /></a>
            <a href="#" aria-label="Twitter"><img src={assets.twitter_logo} alt="Twitter" className='w-5 h-5' /></a>
            <a href="#" aria-label="Gmail"><img src={assets.gmail_logo} alt="Gmail" className='w-5 h-5' /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="/">Home</a></li>
            <li><a href="/cars">Browse Cars</a></li>
            <li><a href="/owner/add-car">List Your Cars</a></li>
            <li><a href="/">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li>1234 Luxury Drive</li>
            <li>Delhi, India</li>
            <li>+91 8754986521</li>
            <li>info@example.com</li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Wheelora. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
