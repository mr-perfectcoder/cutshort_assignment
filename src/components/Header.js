import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center mb-10'>
      <img
        className='h-11 w-auto mt-[-8.5px] '
        src='../eden.png'
        alt='Eden logo'
      />
      <h1 className='font-inter mx-1 text-[22px] font-bold'>Eden</h1>
    </div>
  )
}

export default Header
