import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='my-40 text-center'>
        <h2 className=' text-2xl text-red-500 font-bold text-center'>404 Not Found</h2>
        <Link className="my-20 inline-block text-white items-center px-6 py-3 mx-auto w-auto font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/">Home</Link>
    </div>
  )
}

export default NotFound