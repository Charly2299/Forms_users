import React from 'react'
import { useForm } from 'react-hook-form'
const UsesForm = ({createUser}) => {


const {handleSubmit,register,reset} =useForm()

const defaultValuesForm={
    birthday: "",
email: "",
first_name: "",
last_name: "",
password: "",
}

const submit= data =>{
console.log(data)
createUser(data)
reset(defaultValuesForm)
}

  return (
    <form className='form__new-user' onSubmit={handleSubmit(submit)}>
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