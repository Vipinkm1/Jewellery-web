import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const adminlogin = () => {
   
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        username: '',
        password: '',
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

      const handleLoginSubmit = (e) => {
            e.preventDefault()
          const logindata =  localStorage.getItem('signup')
          const parseData = JSON.parse(logindata)
          setLogin(login)
          if(login.username === parseData.username && login.password === parseData.password){
            toast.success('Successfully login ')
            setTimeout(()=> {
                navigate('/')
            },2000)
          }
          else{
            toast.error('Failed to login')
          }
        }
  return (
    <div className='popup'>
                <div className='border-1'>
                    <h1 className='text-center'> Login</h1>
                    <form className='form-container' onSubmit={handleLoginSubmit}>
                        <div>
                            <label className='label-width'>Username</label>
                            <input className='input-width-3' name='username' type='text' placeholder='Enter user name' value={login.username} onChange={handleChange} />
                        </div>
                        <div>
                            <label className='label-width'>Password</label>
                            <input className='input-width-3' name='password' type='text' placeholder='Enter passowrd' value={login.password} onChange={handleChange} />
                        </div>
                        <div >
                        </div>
                        <div className='btn-3'>
                            <button type='submit' className='btn-width'>Login</button>
                        </div>
                    </form>
                  
                </div>
                <ToastContainer/>
            </div>
  )
}

export default adminlogin