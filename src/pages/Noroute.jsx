import React from 'react'
import { useNavigate } from 'react-router-dom';

const Noroute = () => {


    const navigate = useNavigate();

    return (
        <div className=' flex flex-col justify-center items-center h-screen md:text-6xl text-4xl'>


            404 Page Not Found 


            <div onClick={() => navigate(-1)} className='ms-2 flex mt-16 text-2xl bg-green-800 py-3 px-8 justify-center items-center text-white cursor-pointer rounded-full'>
               Go Back
            </div>



        </div>
    )
}

export default Noroute