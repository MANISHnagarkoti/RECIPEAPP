import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFav } from '../redux/favreducers';


const Favpage = () => {

    const { data: favdata } = useSelector((state) => state.favData)


    const dispatch = useDispatch()



    const deletelist = (id) => {


        dispatch(removeFav(id))





    }




    if (favdata.length === 0) {


        return (
            <div className='h-screen pt-52'>

                <div className='md:text-6xl text-4xl text-center'>No list Found</div>



            </div>
        )

    }




    return (
        < Container style={{minHeight:"100vh"}} >

            <div className='mt-5 text-4xl font-bold text-center'>Fav List {favdata.length}</div>


       



            <div className='grid md:grid-cols-3 mt-12 gap-y-12 grid-cols-1 gap-x-20 md:px-14 px-4 '>


                {

                    favdata.map((e) => {

                        return (


                            <div className='card rounded-lg overflow-hidden ' key={e.id} >


                                <div className='relative' style={{minHeight:"200px"}}>
                                    <img src={e.img} width="100%" className=' h-full object-cover rounded-lg' alt="no img" />


                                    <div onClick={() => deletelist(e.id)} className='p-4 cursor-pointer bg-red-600 rounded-full absolute left-4 bottom-4 text-white'> <DeleteIcon /> </div>

                                </div>

                                <div className='mt-4  py-2'>

                                    <div className='text-lg font-bold' style={{ minHeight: "30px" }}>{e.name}</div>

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

        </ Container>

    )
}

export default Favpage


const Container = styled.div`

padding-top: 100px;



`