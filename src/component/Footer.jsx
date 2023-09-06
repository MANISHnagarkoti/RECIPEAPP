import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {


const {data} = useSelector((state) => state.favData )




    return (
        <div className='bg-green-700 h-16 flex items-center justify-between md:px-14 px-4 text-white text-lg mt-24'   >

            <div>By Manish</div>


            <div>Copyright 2023</div>


        </div>
    )
}

export default Footer