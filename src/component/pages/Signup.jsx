import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate()
    const [signup, setSignUp] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmpassword: '',
        number: ''

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
        const checkEmpty = Object.values(signup).every((field) => field.trim() !== '')
        if(checkEmpty){
            setSignUp(signup)
            localStorage.setItem('signup', JSON.stringify(signup))
            toast.success('Successfully register account')
            setTimeout(()=>{
                navigate('/login')
            }, 2000)
        }
        else{
            toast.error('input value is empty')
        }
    }
    const handleLogin = () => {
        navigate('/login')
        console.log('Login sucessfully')
    }
    
    return (
        <div className='popup'>
            <div className='border-1'>
                <h1 className='text-center'> Sign Up</h1>
                <form className='form-container' onSubmit={handleSignUpSubmit}>
                    <div>
                        <label className='label-width'>Full Name</label>
                        <input className='input-width-3' name='fullname' type='text' placeholder='Enter full name' value={signup.fullname} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Username</label>
                        <input className='input-width-3' name='username' type='text' placeholder='Enter user name' value={signup.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Password</label>
                        <input className='input-width-3' name='password' type='text' placeholder='Enter passowrd' value={signup.password} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Confirm Password</label>
                        <input className='input-width-3' name='confirmpassword' type='text' placeholder='Enter confirm password' value={signup.confirmpassword} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Mobile Number</label>
                        <input className='input-width-3' name='number' type='text' placeholder='Enter mobile number' value={signup.number} onChange={handleChange} />
                    </div>
                    
                    <div >
                    </div>
                    <div className='btn-3'>
                        <button type='submit' className='btn-width'>SignUp</button>
                    </div>
                </form>
                <p className='topex mt-1'>Already Register?<span onClick={handleLogin} className='spanish'>Login</span></p>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Signup