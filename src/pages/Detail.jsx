import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components'
import parse from 'html-react-parser';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import "../loader css/loader.css"


import LocalDiningIcon from '@mui/icons-material/LocalDining';


import { useDispatch } from 'react-redux';
import { addFav } from '../redux/favreducers';


const Detail = () => {




    const { recipeId } = useParams()

    const [result, setresult] = useState({})

    const [loader, setloader] = useState(true)

    const [wrong, setwrong] = useState(false)

    const dispatch = useDispatch()




    const fetchSingleData = async () => {






        try {

            const { data } = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${import.meta.env.VITE_API_KEY}&includeNutrition=true`)

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


        fetchSingleData()

    }, [recipeId])


    const ss = String(result?.summary)



    const addfavlist = (data) => {


        dispatch(addFav(data))



    }




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

                    <Link to={"/"}> <span className='text-blue-600'>Home</span> </Link>  / <span>{result?.title}</span>
                </div>

            </BackGround>



            <Container className='mt-16 md:px-14 px-4   '>


                <div className='text-black md:text-6xl  text-4xl change-font  font-bold  title'>{result?.title}</div>


                <div className='flex gap-x-6 font-bold mt-3'>

                    {

                        result?.dishTypes?.join(" / ")



                    }


                </div>


                {/* {{{{{{{{{{{}}}}}}}}}}} */}


                <div className='mt-8'>


                    <div className='' >

                        {/* <div className='text-4xl mt-8 font-bold'>Summary</div> */}

                        <div className='mt-4 leading-loose' style={{ wordSpacing: "10px" }}>     {parse(ss)}  </div>



                    </div>



                    <div className='relative mt-14'>


                        <img src={result?.image} className='rounded-lg ' alt="no img" />

                        <div onClick={() => addfavlist({ id: result?.id, name: result?.title, img: result?.image })} className='bg-orange-500 rounded-full p-4 absolute top-3 left-3 hover:scale-110 transition-all duration-100 cursor-pointer'  > <FavoriteBorderOutlinedIcon className='text-white' /> </div>
                    </div>





                </div>

                {/* {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}} */}


                <div className='flex flex-wrap gap-y-12 gap-x-20 mt-24'>

                    <div>
                        <div className='font-bold'>Veg Or Non-veg :</div>

                        {

                            result.vegetarian === false ? <img src="/nonveg.png" className='mt-2' width={40} alt="nonveg" /> : <img src="/veg.png" className='mt-2' width={40} alt="veg" />


                        }
                    </div>


                    <div>
                        <div className='font-bold'>GlutenFree:</div>
                        <div className='mt-2'>{result?.glutenFree === true ? "True" : "False"}</div>

                    </div>


                    <div>
                        <div className='font-bold'>DairyFree:</div>

                        <div className='mt-2'>{result?.dairyFree === true ? "True" : "False"}</div>

                    </div>


                </div>




                {/* {{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}} */}



                <div className='mt-24'>

                    <div className='text-4xl mt-8 font-bold'>{result?.title} Ingredients</div>



                    <div className='grid  md:grid-cols-2  grid-cols-1 mt-4'>

                        {
                            result?.nutrition?.ingredients.map((e, i) => {


                                return (


                                    <div className='flex  text-lg mt-6' key={i}>


                                        🍝  <div className='font-bold text-xl ms-4'>{e.amount}</div>
                                        <div className='ms-2 font-bold'>{e.unit}</div>
                                        <div className='ms-6'>{e.name}</div>



                                    </div>


                                )




                            })

                        }


                    </div>





                </div>


                {/* {{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}} */}




                <div className='mt-24 '>

                    <div className='text-4xl '>Instructions</div>


                    {

                        result?.analyzedInstructions?.[0]?.steps?.map((e) => {


                            return (


                                <div className='mt-5' key={e.step}>

                                    <div className='font-bold'>Step {e.number}</div>

                                    <div className='mt-2'>
                                        {e.step}

                                    </div>



                                </div>


                            )



                        })





                    }




                </div>






            </Container>




        </>
    )
}

export default Detail

const Container = styled.div`




    
    .change-font{
    font-family: 'Josefin Sans', sans-serif;

}

.dotted-border{
    border-bottom: 2px dotted #00000042;
    padding-bottom: 45px;
}

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