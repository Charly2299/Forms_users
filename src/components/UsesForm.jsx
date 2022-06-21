import React from 'react'
import { useForm } from 'react-hook-form'
const UsesForm = ({createUser,objectUpdate,updateUserById,handleSubmit, reset, register}) => {



const defaultValuesForm={
    birthday: "",
email: "",
first_name: "",
last_name: "",
password: "",
}

const submit= data =>{

if(objectUpdate !== undefined){
updateUserById(objectUpdate.id,data)
reset(defaultValuesForm)
}
else{
    createUser(data)
}

console.log(data)

reset(defaultValuesForm)
}

  return (
    <form  onSubmit={handleSubmit(submit)}  className='form__new-user'>
<div className='form-title'>
    <h2>New User</h2>
</div>

<div>
    <label htmlFor="first_name">First Name:</label>
    <input type="text" id='first_name' placeholder='First Name' required {...register('first_name')}/>
</div>
<div>
    <label htmlFor="last_name">Last Name:</label>
    <input type="text" id='last_name' placeholder='Last Name' required {...register('last_name')}/>
</div>
<div>
    <label htmlFor="email">Email:</label>
    <input type="text" id='email' placeholder='Email' required {...register('email')}/>
</div>
<div>
    <label htmlFor="password">Password</label>
    <input type="password" id='password' placeholder='Password' required {...register('password')}/>
</div>
<div>
    <label htmlFor="birthday">Birthday:</label>
    <input type="date" id='birthday' placeholder='Birthay' required {...register('birthday')}/>
</div>
<div className='form-button'>
<button>Submit</button>
</div>
    </form>
  )
}

export default UsesForm