import { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import './App.css'
import UserList from './components/UserList'
import UsesForm from './components/UsesForm'

function App() {


  const { handleSubmit, register, reset } = useForm()
  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const URL = 'https://users-crud1.herokuapp.com/users/'



  //Funcion para mostrar la informacion Mostrar la informacion
  const getAllUsers = () => {
    axios.get(URL)
      .then(resp => { setUsers(resp.data) })
      .catch(error => console.log(error))
  }

  //Mostrar los datos por primera vez al cargar por primera vez la pagina
  useEffect(() => {
    getAllUsers()
  }, [])

  console.log(users);


  //Crear nuevo Usuario

  const createUser = newUser => {

    axios.post(URL, newUser)
      .then(resp => {
        console.log(resp.data)
        getAllUsers()
      })
      .catch(error => console.log(error))

  }

  //Borrar usuariro

  const deleteUser = id => {

    axios.delete(`${URL}${id}/`)
      .then(resp => {
        console.log(resp.data)
        getAllUsers()
      })
      .catch(error => console.log(error))

  }

  //Actualizar usuario

  const updateUserById = (id, updateUser) => {

    axios.put(`${URL}${id}/`, updateUser)
      .then(resp => {
        console.log(resp.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(error => console.log(error))

  }



  //form valores cuando se esconda
const showForm=()=>{
  const obj2={
    birthday: "",
email: "",
first_name: "",
last_name: "",
password: "",
}
reset(obj2)
setIsShowForm(!isShowForm)
}


  return (
    <div className="App">
      <h1>USERS</h1>
      <div className='App-button'>
      <button onClick={showForm}>{isShowForm ? 'Hide Form' :'Create a new User'}</button>
      </div>
      {
isShowForm&&
<UsesForm
createUser={createUser}
objectUpdate={objectUpdate}
updateUserById={updateUserById}
handleSubmit={handleSubmit}
reset={reset}
register={register}
/>


      }
    

      <div className='cards-users__container'>
        {

          users?.map(user => (

            <UserList
              user={user}
              key={user.id}
              deleteUser={deleteUser}
              updateUserById={updateUserById}
              setIsShowForm={setIsShowForm}
              reset={reset}
              setObjectUpdate={setObjectUpdate}
             
            />


          ))
        }
      </div>
    </div>




  )
}

export default App
