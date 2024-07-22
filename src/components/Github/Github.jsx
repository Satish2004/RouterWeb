import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
Link

const Github = () => {
    let[data, setData] =useState([]);
    useEffect(()=>{
 fetch("https://api.github.com/users/Satish2004")
   .then(response=> response.json())
   .then(data =>{
    console.log(data);
    setData(data);
   })

    },[]);
  return (
   <>
    <div className="githubPicture text-center m-4  text-gray p-4 text-3xl border-4 border-black-500 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
    <div className=''>Github Folowers: {data.followers}
       <Link to={"https://github.com/Satish2004"}>  <img  className=" ml-[45%] rounded-full" src={data.avatar_url} alt="Github profile" width={300} /></Link>
    </div>
    </div>
 
   </>
    
  )
}

export default Github