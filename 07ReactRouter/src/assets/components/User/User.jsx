import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
  const { userid } = useParams()

  return (
    <div className='bg-gray-200 text-black text-3xl p-4'>
      User: {userid}
    </div>
  )
}
