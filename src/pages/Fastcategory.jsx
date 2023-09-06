import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import "../loader css/loader.css"


import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Fastcategory = () => {


    const { fastId } = useParams()


    const [result, setresult] = useState({})

    const [loader, setloader] = useState(true)

    const [offset, setoffset] = useState(0)

    const [wrong, setwrong] = useState(false)




    const fetchdata = async () => {

        setloader(true)


        try {

            const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&offset=${offset}&query=${fastId}&number=10&apiKey=${import.meta.env.VITE_API_KEY}`)

            setresult(data)

           

            setwrong(false)
       
            setloader(false)

        } catch ({ response }) {




            if (response.status === 404 || response.status === 402 || response.status === 401) {



                setwrong(true)

   

            }



        }







    }



    useEffect(() => {


        fetchdata()

    }, [fastId, offset])



    const pages = Math.ceil(result.totalResults / 10)




    if (wrong) {

        return (

            <div className='h-screen w-full flex justify-center items-center'>

                <div className='text-bold text-2xl text-red-400'>

                    Something Wrong Here , Please try later

                </div>

            </div>


        )


    }




    if (loader) {

        return (

            <div className='h-screen w-full flex justify-center items-center'>

                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

            </div>


        )


    }





    return (
        <>
            <BackGround className='background-img  md:px-14 px-4 py-4' >


                <div className='flex gap-x-4 pt-16'>

                    <Link to={"/"}> <span className='text-blue-600'>Home</span> </Link>  / <span>{fastId}</span>
                </div>

            </BackGround>



            <Container className='grid md:grid-cols-2 lg:grid-cols-4  gap-14 md:px-14 px-4'>

                {


                    result?.results?.map((e) => {

                        return (

                            <div className='card rounded-lg overflow-hidden ' key={e.id}>



                                <img src={e.image} className='w-full  rounded-lg' alt="no img" />


                                <div className='mt-4  py-2'>



                                    <div className='text-md font-bold' style={{ minHeight: "50px" }}>{e.title}</div>

                                    <Link to={`/detail/${e.id}`}>   <div className='bg-orange-500 rounded-full mt-4 inline-block text-white px-6 py-3'>
                                        See Details
                                    </div>

                                    </Link>
                                </div>

                            </div>


                        )

                    })

                }






            </Container>

            <div className='flex justify-center mt-24 text-lg ' >

                <Stack spacing={2}>

                    <Pagination className='text-lg' style={{ fontSize: "100px" }} count={pages} onChange={(e, value) => setoffset(value * 10 - 10)} />

                </Stack>

            </div>
        </>
    )
}

export default Fastcategory



const Container = styled.div`
    
    

margin-top: 100px;



`







const BackGround = styled.div`
    
    
    background-image:  linear-gradient(to top , #f5cf35 , #f5cf35);


   min-height: 120px;
width: 100%; 
background-position: center;
background-size: cover;


    
.title{
    /* border-bottom: 2px dotted grey; */
    padding-bottom: 12px;
}

    



` 