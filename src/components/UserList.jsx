import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = ({ user,deleteUser,updateUserById,setIsShowForm,reset,setObjectUpdate}) => {

  //actualizar usuario
  const updateUser=()=>{
  
    setIsShowForm(true)
    const obj={
      birthday: user?.birthday,
    email: user?.email,
    first_name: user?.first_name,
    last_name: user?.last_name,
    password: user?.password,

    }
    reset(obj)
    setObjectUpdate(user)
    
      }
    


    return (
        

            <div className='card-user'>
                <div className='card-content'>
                    <div className='card-content-title'> 
                    <h2> {user?.first_name} </h2>
                    </div>
                    <p>
                    <i class="fa-solid fa-envelope"></i>
                         { user?.email}</p>
                    <p>
                    <i class="fa-solid fa-cake-candles"></i>
                        {user?.birthday}</p>
                </div>
                <div className='card-actions'>
                    <button className='button-delete' onClick={()=>deleteUser(user.id)}>
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    <button className='button-update' onClick={updateUser}>
                    <i class="fa-solid fa-pen"></i>
                    </button>
                </div>
            </div>
            
      
    )
}

export default UserList