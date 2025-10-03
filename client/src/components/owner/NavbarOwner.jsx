import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {

    const {user} = useAppContext();


  return (
    <div className='flex items-center justify-between px-6 md:px-10 py-4 text-[var(--color-text)] border-b border-[var(--color-borderColor)] bg-[var(--color-surface)] relative transition-all'>
      <Link to='/'>
        <span className="text-2xl md:text-3xl font-bold cursor-pointer transition-colors text-[var(--color-accent)]">Wheelora</span>
      </Link>
      <p>Welcome, {user?.name || "Owner"} </p>
    </div>
  )
}

export default NavbarOwner