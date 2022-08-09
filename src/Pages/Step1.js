import React ,{ useState }from 'react'
import { useNavigate } from 'react-router-dom'
const Step1 = () => {
  const [fname, setfname] = useState('')
  const [dname, setdname] = useState('')
  let navigate = useNavigate()
  const onNext = () => {
    if(!fname || !dname){
      alert('All fields are required')
    }else{
       navigate('../step2', { replace: true })
    }
  }
  return (
    <div>
      <h2 className='text-center font-inter font-semibold text-[28px]'>
        Welcome! First things first...
      </h2>
      <p className='text-gray-500 text-center mt-2 font-inter '>
        You can always change them later.
      </p>
      <div className='w-full mt-5'>
        <div className='px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold text-sm mb-2'>
              Full Name
            </label>
            <input
              className=' border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Steve Jobs'
              value={fname}
              onChange={(event) => setfname(event.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold text-sm mb-2'>
              Display Name
            </label>
            <input
              className=' border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Steve'
              value={dname}
              onChange={(event) => setdname(event.target.value)}
            />
          </div>

          <button
            className='bg-[#664de5] h-10  text-white text-[13px] font-inter py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            type='button'
            onClick={()=>onNext()}
          >
            Create Workspace
          </button>

        </div>
      </div>
    </div>
  )
}

export default Step1
