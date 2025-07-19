import React, {useState, useEffect } from 'react'

export const GitHub = () => {
    const [data,setData]=useState([])

    useEffect(() => {
    fetch('https://api.github.com/users/Shivam9070')
    .then(Response=>Response.json())
    .then(data=>{
        console.log(data);
        setData(data)
    })
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-3'>GitHub Followers:{data.followers}<img className="text-center "src={data.avatar_url} alt="git picture"/></div>
  )
}
