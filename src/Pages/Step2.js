import React, {useState} from 'react'

import { useNavigate } from 'react-router-dom'
const Step2 = () => {
    let navigate = useNavigate()
    const [wname, setwname] = useState('')
    const [url, seturl] = useState('')
      const onNext = () => {
        if (!wname) {
          alert('Enter Workspace name')
        } else {
          navigate('../step3')
        }
      }
  return (
    <div>
      <h2 className='text-center font-inter font-semibold text-[28px]'>
        Let's set up a home for all your work
      </h2>
      <p className='text-gray-500 text-center mt-2 font-inter '>
        You can always create another workspace later.
      </p>
      <div className='w-full mt-5'>
        <div className='px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold text-sm mb-2'>
              Workspace Name
            </label>
            <input
              className=' border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Eden'
              value={wname}
              onChange={(event) => setwname(event.target.value)}
            />
          </div>
          <label className='block text-gray-700 font-semibold text-sm mb-2'>
            Workspace URL <span className='text-gray-300'>(optional)</span>
          </label>
          <div className='flex mb-6'>
            <div className='w-[45%] flex items-center justify-center bg-gray-50 border-t border-l border-b border-blue-lighter rounded-l text-gray-400'>
              www.eden.com/
            </div>
            <div className='w-full'>
              <input
                className=' border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Example'
                value={url}
                onChange={(event) => seturl(event.target.value)}
              />
            </div>
          </div>

          <button
            className='bg-[#664de5] h-10  text-white text-[13px] font-inter py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            type='button'
            onClick={() => onNext()}
          >
            Create Workspace
          </button>
        </div>
      </div>
    </div>
  )
}

export default Step2
