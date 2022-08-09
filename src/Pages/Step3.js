import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiUserGroup, HiUser } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
const Step3 = () => {
  const [select, setSelect] = useState('personal')
    let navigate = useNavigate()
  const setProfile = (value) => {
    setSelect(value)
  }
    const onNext = () => {
      if (!select) {
        alert('Please select catgeory')
      } else {
        navigate('../step4')
      }
    }
  return (
    <div>
      <h2 className='text-center font-inter font-semibold text-[28px]'>
        How are you planning to use Eden ?
      </h2>
      <p className='text-gray-500 text-center mt-2 font-inter '>
        We streamline your setup experince accordingly.
      </p>
      <div className='mx-auto w-full mt-10 mb-5'>
        <div className='flex mx-auto max-w-[310px]'>
          <div
            className={'w-[150px] h-[150px]  border rounded p-3 cursor-pointer'}
            style={{
              borderColor: select === 'personal' && '#664de5',
            }}
            onClick={() => setProfile('personal')}
          >
            <p className='mt-2 mb-3'>
              <HiUser
                style={{
                  color: select === 'personal' && '#664de5',
                }}
                size={20}
              />
            </p>
            <p className='font-inter font-semibold text-[14px]'>For myself</p>
            <p className='text-[12px] font-semibold  text-gray-400'>
              Write better. Think more clearly.Stay organized.
            </p>
          </div>
          <div
            className='ml-8 w-[150px] h-[150px]  border rounded  p-3 cursor-pointer'
            style={{
              borderColor: select === 'team' && '#664de5',
            }}
            onClick={() => setProfile('team')}
          >
            <p className='mt-2 mb-3'>
              <HiUserGroup
                size={20}
                style={{
                  color: select === 'team' && '#664de5',
                }}
              />
            </p>
            <p className='font-inter font-semibold text-[14px]'>With my team</p>
            <p className='text-[12px] font-semibold  text-gray-400'>
              Wikis, docs, tasks & projects, all in one place
            </p>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-[310px] justify-center'>
        <button
          className='bg-[#664de5] h-10  text-white text-[13px] font-inter py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
          type='button'
          onClick={() => onNext()}
        >
          Create Workspace
        </button>
      </div>
    </div>
  )
}

export default Step3
