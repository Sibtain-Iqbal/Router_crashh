import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
function Github () {
 const data = useLoaderData()
  // const [data , setData] = useState([]);

  // useEffect(() => {

  //   fetch('https://api.github.com/users/Sibtain-Iqbal')
  //   .then(Response => Response.json())
  //   .then(data => {

  //     setData(data)
  //   })

    
  // }, [])
  
  return (

    <div className='text-white text-center bg-gray-600 m-4 p-11 '>

      Name : {data.name} <br />
      Github Followers : {data.followers} <br />
      Github following : {data.following} <br />
      Reposoteries : {data.public_repos} <br />
            Company : {data.company} <br />

     <img src={data.avatar_url} alt="Git picture" width={300}  className='gitpic'/>
    </div>
  )
}

export default  Github


export const Gihubloader = async ()=>{
  
 const Response = await fetch('https://api.github.com/users/Sibtain-Iqbal')
  return Response.json()
}
 