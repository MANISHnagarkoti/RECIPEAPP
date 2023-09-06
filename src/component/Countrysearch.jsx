import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../loader css/loader.css"

const Countrysearch = () => {



    const [result, setresult] = useState({})

    const [loader, setloader] = useState(true)

    const [wrong, setwrong] = useState(false)


    const fetchData = async () => {



        try {

            const { data } = await axios.get(`https://api.spoonacular.com/recipes/random?&apiKey=${import.meta.env.VITE_API_KEY}&number=6&tags=vegetarian,dessert`)

            setresult(data)


            setwrong(false)

            setloader(false)


        } catch ({ response }) {




            if (response.status === 404 || response.status === 402 || response.status === 401) {



                setwrong(true)

                setloader(false)


            }



        }


    }


    useEffect(() => {


        fetchData()

    }, [])


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

        <Container className=' md:px-14 px-4 mt-28'>



            <div className='text-4xl font-bold text-center'>Popular </div>

            {/* {{{{{{{{{{{{{{{}}}}}}}}}}}}}}} */}


            <div className='grid md:grid-cols-3 grid-col-2 gap-x-24 gap-y-14 justify-center mt-14'>
                {


                    result?.recipes?.map((e) => {

                        return (

                            <div className='card rounded-lg overflow-hidden ' key={e.id} >


                                <div>
                                    <img src={e.image} width="100%" className=' h-full object-cover rounded-lg' alt="no img" />

                                </div>

                                <div className='mt-4  py-2'>

                                    <div className='text-lg font-bold' style={{ minHeight: "30px" }}>{e.title}</div>

                                    <Link to={`/detail/${e.id}`}>   <div className='bg-orange-500 rounded-full mt-4 inline-block text-white px-6 py-3'>
                                        See Details
                                    </div>

                                    </Link>
                                </div>

                            </div>


                        )

                    })

                }





            </div>



        </Container>



    )
}

export default Countrysearch


const Container = styled.div`
    



`