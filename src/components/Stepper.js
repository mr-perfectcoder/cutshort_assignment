import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const Stepper = () => {
   const location = useLocation()
  const [path, setpath] = useState('')
  useEffect(() => {
   setpath(location.pathname)
  }, [location])
  
  return (
    <div className='mx-4 p-4 mb-10'>
      <div className='flex items-center'>
        <div className='flex items-center text-white relative'>
          <div className='rounded-full transition duration-500 ease-in-out h-8 w-8  border-2 bg-[#664de5]  border-[#664de5]   text-center'>
            1
          </div>
        </div>
        <div className='flex-auto  border-t-2 transition duration-500 ease-in-out border-[#664de5] '></div>
        <div
          className='flex-auto border-t-2 transition duration-500 ease-in-out '
          style={{
            borderColor:
              path === '/step2' || path === '/step3' || path === '/step4'
                ? '#664de5'
                : '#d4d4d4',
          }}
        ></div>
        <div
          className='flex items-center  relative'
          style={{
            color:
              path === '/step2' || path === '/step3' || path === '/step4'
                ? '#fff'
                : '#9e9e9e',
          }}
        >
          <div
            className='rounded-full transition duration-500 ease-in-out h-8 w-8 border-2   text-center  '
            style={{
              borderColor:
                path === '/step2' || path === '/step3' || path === '/step4'
                  ? '#664de5'
                  : '#d4d4d4',
              background:
                path === '/step2' || path === '/step3' || path === '/step4'
                  ? '#664de5'
                  : '#fff',
            }}
          >
            2
          </div>
        </div>
        <div
          className='flex-auto border-t-2 transition duration-500 ease-in-out '
          style={{
            borderColor:
              path === '/step2' || path === '/step3' || path === '/step4'
                ? '#664de5'
                : '#d4d4d4',
          }}
        ></div>
        <div
          className='flex-auto border-t-2 transition duration-500 ease-in-out '
          style={{
            borderColor:
              path === '/step3' || path === '/step4' ? '#664de5' : '#d4d4d4',
          }}
        ></div>
        <div
          className='flex items-center relative'
          style={{
            color: path === '/step3' || path === '/step4' ? '#fff' : '#9e9e9e',
          }}
        >
          <div
            className='rounded-full transition duration-500 ease-in-out h-8 w-8  border-2  text-center'
            style={{
              borderColor:
                path === '/step3' || path === '/step4' ? '#664de5' : '#d4d4d4',
              background:
                path === '/step3' || path === '/step4' ? '#664de5' : '#fff',
            }}
          >
            3
          </div>
        </div>
        <div
          className='flex-auto border-t-2 transition duration-500 ease-in-out '
          style={{
            borderColor:
              path === '/step3' || path === '/step4' ? '#664de5' : '#d4d4d4',
          }}
        ></div>
        <div
          className='flex-auto border-t-2 transition duration-500 ease-in-out '
          style={{
            borderColor: path === '/step4' ? '#664de5' : '#d4d4d4',
          }}
        ></div>
        <div
          className='flex items-center  relative'
          style={{
            color: path === '/step4' ? '#fff' : '#9e9e9e',
          }}
        >
          <div
            className='rounded-full transition duration-500 ease-in-out h-8 w-8  border-2  text-center'
            style={{
              borderColor: path === '/step4' ? '#664de5' : '#d4d4d4',
              background: path === '/step4' ? '#664de5' : '#fff',
            }}
          >
            4
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stepper
