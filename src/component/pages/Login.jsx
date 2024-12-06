import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const [signup, setSignUp] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmpassword: '',
        gender: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUp((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        setSignUp(signup)
        console.log(signup)
    }
  return (
    <div className='popup'>
    <div className='border-1'>
        <h1 className='text-center'> Login</h1>
        <form className='form-container' onSubmit={handleSignUpSubmit}>
          
            <div>
                <label className='label-width'>Username</label>
                <input className='input-width-3' name='username' type='text' placeholder='Enter user name' value={signup.username} onChange={handleChange} />
            </div>
            <div>
                <label className='label-width'>Password</label>
                <input className='input-width-3' name='password' type='text' placeholder='Enter passowrd' value={signup.password} onChange={handleChange} />
            </div>
            <div >
            </div>
            <div className='btn-3'>
                <button type='submit' className='btn-width'>Login</button>
            </div>
        </form>
        <p className='topex mt-1'>Already Register?<span onClick={() => navigate('/signup')} className='spanish'>SignUp</span></p>
    </div>
</div>
  )
}

export default Login