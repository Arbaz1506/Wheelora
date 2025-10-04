import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Navbar = () => {
    const { setShowLogin, user, logout, isOwner, axios, setIsOwner } = useAppContext()
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const changeRole = async () => {
        try {
            const { data } = await axios.post('/api/owner/change-role')
            if (data.success) {
                setIsOwner(true)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-[var(--color-surface)] text-[var(--color-text)] shadow-lg backdrop-blur-md border-b border-[var(--color-borderColor)]"
            style={{height: '72px', minHeight: '56px'}}
        >
            {/* Wheelora Brand */}
            <Link to='/' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <motion.span
                    initial={{ color: "var(--color-accent)" }}
                    whileHover={{ scale: 1.1, color: "var(--color-accent-hover)" }}
                    className="text-2xl md:text-3xl font-bold cursor-pointer transition-colors"
                >
                    Wheelora
                </motion.span>
            </Link>


            {/* Desktop & Mobile Menu */}
            <div className="flex items-center sm:gap-8">
                {/* Desktop Links */}
                <div className="hidden sm:flex items-center gap-6">
                    {menuLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="text-gray-300 font-medium hover:text-yellow-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden sm:flex items-center gap-4">
                    <button
                        onClick={() => isOwner ? navigate('/owner') : changeRole()}
                        className='px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-100 font-medium shadow-sm transition-all'
                    >
                        {isOwner ? 'Dashboard' : 'List cars'}
                    </button>

                    <button
                        onClick={() => { user ? logout() : setShowLogin(true) }}
                        className='px-6 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-lg text-gray-900 font-medium shadow-md transition-all'
                    >
                        {user ? 'Logout' : 'Login'}
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className='sm:hidden ml-2 cursor-pointer'
                    aria-label='Menu'
                    onClick={() => setOpen(!open)}
                >
                    <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className='w-6 h-6 invert' />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: open ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="sm:hidden fixed top-0 right-0 h-screen w-3/4 bg-gray-800 shadow-lg flex flex-col p-6 gap-6 z-40"
            >
                {menuLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className="text-gray-100 font-medium text-lg hover:text-yellow-400 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}

                <button
                    onClick={() => { isOwner ? navigate('/owner') : changeRole() }}
                    className='px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-100 font-medium shadow-sm transition-all'
                >
                    {isOwner ? 'Dashboard' : 'List cars'}
                </button>

                <button
                    onClick={() => { user ? logout() : setShowLogin(true) }}
                    className='px-6 py-2 bg-yellow-500 hover:bg-yellow-400 rounded-lg text-gray-900 font-medium shadow-md transition-all'
                >
                    {user ? 'Logout' : 'Login'}
                </button>
            </motion.div>
        </motion.div>
    )
}

export default Navbar
