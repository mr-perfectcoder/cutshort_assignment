import React from 'react'
import { HiCheck } from 'react-icons/hi'
const Step4 = () => {
  return (
    <div>
      <div className='mx-auto bg-[#664de5] h-16 w-16 rounded-full mt-10 mb-10 '>
        <p className='absolute mt-5 ml-5'>
          <HiCheck size={24} color={'#fff'} />
        </p>
      </div>
      <h2 className='text-center font-inter font-semibold text-[28px]'>
        Congratulations, Eren!
      </h2>
      <p className='text-gray-500 text-center mt-2 font-inter '>
        You have completed onboarding, you can start using the Eden!
      </p>
      <div className='mx-auto max-w-[400px] justify-center mt-6'>
        <button
          className='bg-[#664de5] h-10  text-white text-[13px] font-inter py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
          type='button'
        >
          Launch Eden
        </button>
      </div>
    </div>
  )
}

export default Step4
