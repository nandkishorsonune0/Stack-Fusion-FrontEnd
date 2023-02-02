import React from 'react'
import { useNavigate } from 'react-router-dom'
import './/home.css'

function Home(){

    const navigate = useNavigate()

    function handleClick(){
        navigate('/user-form')
    }

    return (
        <>
        <span className='home'>
        <button className='button'  onClick={handleClick}>Fill the Form</button>
        </span>
        
        </>
    )
}

export default Home