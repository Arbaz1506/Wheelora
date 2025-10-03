import React from 'react'

const Title = ({title,subTitle,align}) => {
  return (
    <div className={`flex flex-col ${align === "left" ? "items-start text-left" : "items-center text-center"}`}>
      <h1 className='font-semibold text-4xl md:text-[40px] text-[var(--color-text)]'>{title}</h1>
      <p className='text-sm md:text-base text-[var(--color-text-muted)] mt-2 max-w-2xl'>{subTitle}</p>
    </div>
  )
}

export default Title
