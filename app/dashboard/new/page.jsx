import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
    <form action="">

      {/* name */}
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* Mother Name */}
      <div className='mt-4'>
        <label htmlFor="motherName">Mother Name</label>
        <input type="text" id="motherName" name="motherName" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* Date of Birth */}
      <div className='mt-4'>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* age*/}
      <div className='mt-4'>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* place of birth */}
      <div className='mt-4'>
        <label htmlFor="placeOfBirth">Place of Birth</label>
        <input type="text" id="placeOfBirth" name="placeOfBirth" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* work */}
      <div className='mt-4'>
        <label htmlFor="work">Work</label>
        <input type="text" id="work" name="work" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* address */}
      <div className='mt-4'>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* phone */}
      <div className='mt-4'>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" className='border-2 border-gray-300 p-2 w-full rounded-md' />
      </div>

      {/* email */}
    </form>
    </div>
  )
}

export default page
