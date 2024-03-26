// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import {Link} from "react-router-dom"
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInupts] = useState({
        fullName: '',
        username:'',
        password: '',
        confirmPassword:'',
        gender:''
    });

    const {loading, signup} = useSignup()

    const handleChackBoxChange = (gender) => {
        setInupts({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }



  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding background-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp
                <span className='text-orange-500'> ChatApp</span>
            </h1>
        </div>

        <form onSubmit={handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'> FullName</span>
                </label>
                <input type="text" placeholder='Enter FullName' className='w-full input input-bordered h-10 max-w-xs' value={inputs.fullName} onChange={(e) => {setInupts({...inputs, fullName: e.target.value})}}/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'> Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 max-w-xs' value={inputs.username} onChange={(e) => {setInupts({...inputs, username: e.target.value})}}/>
            </div>
            <GenderCheckBox onCheckBoxChange={handleChackBoxChange} selectedGender={inputs.gender}/>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'> Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10 max-w-xs' value={inputs.password} onChange={(e) => {setInupts({...inputs, password: e.target.value})}}/>
            </div>
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'> Confirm Password</span>
                </label>
                <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10 max-w-xs' value={inputs.confirmPassword} onChange={(e) => {setInupts({...inputs, confirmPassword: e.target.value})}}/>
            </div>
                <Link to="/login" className='text-sm hover:underline hover:text-orange-500 mt-2 inline-block'>Already have a account</Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2 text-gray-100 hover:bg-orange-500' disabled={loading}>{loading ? <span className='loading loading-spinner'></span> : "SignUp"}</button>
                </div>
        </form>

    </div>
  )
}

export default SignUp