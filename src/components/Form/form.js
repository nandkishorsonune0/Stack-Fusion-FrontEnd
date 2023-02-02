import React from 'react'
import './/form.css'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Form(){

    const navigate = useNavigate()
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onSubmit(data){
        axios.post('https://stackfusion1.onrender.com/save-data', data)
        .then((response) => {
            if(response.status === 200){
                navigate('/Collected-Data')
            }
        }).catch((error) => {
            console.log(error)
        })
        console.log(data)
    }

    return (
        <>
        <div>
            <h1 className='data'>Form data</h1>
        </div>
        <div className='container1'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label className='fName'><b>First Name</b></label>
                <input className='first-name'{...register('firstName', {required : 'This is a required field.'})} placeholder='First Name' />
                {errors.firstName && <p>{errors.firstName.message}</p> }
                
                <label className='email'><b>Email</b></label>
                <input {...register('email', {required : 'This is a required field.'})} type='email' placeholder='Email' />
                {errors.email && <p>{errors.email.message}</p> }
                
                <label className='phonenum'><b>Phone No.</b></label>
                <input {...register('phoneNumber', {required : 'This is a required field.'})} type='tel' placeholder='Phone No.' pattern='[0-9]{10}' />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p> }
                
                <label className='dob'><b>Date of Birth</b></label>
                <input {
                    ...register('dob',
                    {
                        required : 'This is a required field.',
                        validate : {
                            underAge : (value) => parseFloat(value.slice(0, 4)) <= 2004
                        }
                    }
                    
                    )}
                    type='date' placeholder='DoB'
                />
                {errors.dob && errors.dob.type === 'underAge' && (
                    <p>You must be older than 18.</p>
                )}
                {errors.dob && errors.dob.type !== 'underAge' && (
                    <p>{errors.dob.message}</p>
                )}

                <input type='submit' />
            </form>
        </div>
        </>
    )
}

export default Form