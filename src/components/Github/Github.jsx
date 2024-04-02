import React, { useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom';


const Github = () => {
  const [visible, setVisible] = useState(false);
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/miteshvaghela')
  //       .then(response => response.json())
  //       .then(data => { 
  //         console.log(data);
  //         setData(data);
  //       });
  // }, [])

 console.log(data);

  return (
    <div className='my-40 mx-auto d-block w-1/2'>
      <h2 className='text-3xl font-bold underline text-center mb-10 '>Github Information </h2>
        {(data.message !== 'undefined')? <h2>API error message : {data.message}</h2>:(<table className=' border rounded-md w-1/2 mx-auto mt-10'>
          <tbody>
              <tr>
                <td className='p-5'>Username : {data.name}</td>            
              </tr>
              <tr>
                <td className='p-5'>Followers : {data.followers}</td>            
              </tr>
              <tr>
                <td className='p-5'>Profile Picture : <img src={data.avatar_url} className=' w-40 h-40' alt={data.name} /></td>
              </tr>
          </tbody>
        </table>)}
         
    </div>
  )
}

export default Github

export const fetchGitApiData = async () => {
    try{
      const response = await fetch('https://api.github.com/users/miteshvaghela')
      return response.json();
    }catch(error){
      return {
        status : false,
        message : error.message
      }
    }
}