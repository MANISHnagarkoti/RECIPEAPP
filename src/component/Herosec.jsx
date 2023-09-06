import React, { useState } from 'react'
import { styled } from 'styled-components'
import axios from 'axios'
import debounce from "lodash.debounce"
import { Link, Navigate } from 'react-router-dom'


const Herosec = () => {


    const [result, setresult] = useState([])






    const re = (text) => {

        axios.get(`https://api.spoonacular.com/recipes/autocomplete?apiKey=${import.meta.env.VITE_API_KEY}&query=${text}&number=5`).then((data) => {


            setresult(data.data)


        }).catch((error) => console.log(error))

    }

    const searchAutoComplete = debounce((text) => {


        re(text)


    }, 300)



    return (
        <Container className=' grid items-center md:px-14 px-4 '>


            <div className='grid md:grid-cols-2'>

                <div className='text-white '>


                    <div className='change-font text-5xl'>   It is even better than
                        an expensive cookery book
                    </div>

                    <div className=' text-xl mt-3'>
                        Learn how to make your favorite restaurant’s dishes
                    </div>



                    <div>





                        <input style={{ width: "300px" }} placeholder='Search here...' className="outline-none  border-2 border-green-700 rounded-full px-4 py-3 mt-8 text-black relative" type="text" onChange={(e) => searchAutoComplete(e.target.value)} name="" id="" />


                        {
                            result.length === 0 ?

                                null : <div style={{ width: "300px" }} className=' overflow-hidden bg-white rounded-lg  w-24 mt-4 text-black absolute'>


                                    {

                                        result?.map((e) => {

                                            return (

                                                <Link to={`/detail/${e.id}`} key={e.id}>  <div className='  py-2 hover:bg-green-700 transition-all duration-400 cursor-pointer px-4 hover:text-white'>{e.title}</div>   </Link>

                                            )


                                        })

                                    }
                                </div>



                        }




                    </div>


                </div>

                <div className='text-white '></div>


            </div>



        </Container>
    )
}

export default Herosec


const Container = styled.div`
    
background:   url("/herosec.jpg") ;
background-size: cover;
background-position: center;
height: 700px;

.change-font{
    font-family: 'Josefin Sans', sans-serif;

}

`
