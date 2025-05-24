
import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
   
   <Link href="/dashboard/new" className='px-8 py-2 text-white bg-indigo-600'>Add Employee </Link>
    <Link href="/dashboard/employee" className='px-8 py-2 text-white bg-indigo-600'>View Employees</Link>
  
    </div>
  )
}

export default page
