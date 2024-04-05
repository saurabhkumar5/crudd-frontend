import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function User() {
  const [user, setUser] = useState([])
      // console.log(user)
      useEffect(()=>{

        axios.get('http://localhost:4000')
        .then((res)=>setUser(res.data))
      },[])

      const userDelete = (x)=>{
              axios.delete('http://localhost:4000/deleteUser/'+x)
              .then((e)=>{
                window.location.reload()
              })
              
      }

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center'>
    <div className='w-50 bg-primary rounded p-3'>
     <Link to="/create" className='btn btn-success'>Add +</Link>
     <table className='table'>
         <thead>
             <tr>
                 <th>Name</th>
                 <th>Email</th>
                 <th>password</th>
                 <th>Action</th>
             </tr>
         </thead>
         <tbody>
             
             {
              user.map((value)=>{
                    return <tr>
                      <td>{value.name}</td>
                      <td>{value.email}</td>
                      <td>{value.password}</td>
                      <button onClick={(e)=>userDelete(value._id)}>delete</button>
                      <Link to={`/update/${value._id}`}>update</Link>
                    </tr>
              })
             }
         </tbody>
     </table>

    </div>
 </div>
  )
}

export default User