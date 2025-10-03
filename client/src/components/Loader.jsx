import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[80vh] bg-[var(--color-bg)]'>
      <div className='animate-spin rounded-full h-14 w-14 border-4 border-[var(--color-borderColor)] border-t-[var(--color-accent)]'></div>
    </div>
  )
}

export default Loader