import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../Redux/authSlice';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading , error} = useSelector(state => state.auth)
    const [signup, setSignUp] = useState({
        fullName: '',
        email: '',
        password: '',
        number: ''

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUp((prevState) => ({
            ...prevState,
            [name]: value || ''
        }))
    }
    const handleSignUpSubmit = async(e) => {
        e.preventDefault()
        const checkEmpty = Object.values(signup).every((field) => field.trim() !== '')
        if(!checkEmpty){
            toast.error('All fields are required')
        }
        try{
            const response = await dispatch(signupUser(signup))
            toast.success("user registered successfully" )
            setTimeout(() => {
                navigate('/login')
            }, 2000)
            
        }
        catch (error){
            toast.error(error.message,"Not Registered")
        }
    }
    const handleLogin = () => {
        navigate('/login')
    }
    
    return (
        <div className='popup'>
            <div className='border-1'>
                <h1 className='text-center'> Sign Up</h1>
                <form className='form-container' onSubmit={handleSignUpSubmit}>
                    <div>
                        <label className='label-width'>Full Name</label>
                        <input className='input-width-3' name='fullName' type='text' placeholder='Enter full name' value={signup.fullName} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Email</label>
                        <input className='input-width-3' name='email' type='text' placeholder='Enter email' value={signup.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='label-width'>Password</label>
                        <input className='input-width-3' name='password' type='text' placeholder='Enter passowrd' value={signup.password} onChange={handleChange} />
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