import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Category = () => {
    return (

        <Container className='md:px-14 px-4'>
            <div className='text-center font-bold text-4xl'>Category By Fast Food</div>



            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-y-4 justify-center  grid-cols-2 md:gap-x-12 md:gap-y-12  gap-x-4 mt-12'>


                <Link to={"fast/burger"}>    <div className='rounded-lg overflow-hidden relative' >
                    <img src="buger.jpg" width="100%" alt="" />

                    <div className='cat-back absolute flex justify-center items-end pb-4'>
                        <div className='font-bold text-white text-4xl'>Burger</div>
                    </div>

                </div>

                </Link>

                <Link to={"fast/drink"}>
                    <div className='rounded-lg overflow-hidden relative' >
                        <img src="drink.jpg" width="100%" alt="" />

                        <div className='cat-back absolute flex justify-center items-end pb-4'>
                            <div className='font-bold text-white text-4xl'>Drink</div>
                        </div>

                    </div>
                </Link>
                <Link to={"fast/sweet"}>
                    <div className='rounded-lg overflow-hidden relative' >
                        <img src="sweet.jpg" width="100%" alt="" />

                        <div className='cat-back absolute flex justify-center items-end pb-4'>
                            <div className='font-bold text-white text-4xl'>Sweet</div>
                        </div>

                    </div>
                </Link>
                <Link to={"fast/pizza"}>
                    <div className='rounded-lg overflow-hidden relative' >
                        <img src="pizza.jpg" width="100%" alt="" />

                        <div className='cat-back absolute flex justify-center items-end pb-4'>
                            <div className='font-bold text-white text-4xl'>Pizza</div>
                        </div>

                    </div>
                </Link >


            </div >

        </Container >



    )
}

export default Category

const Container = styled.div`
    margin-top: 80px;


.cat-back{
    background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,0) 67%, rgba(0, 0, 0, 0.768) 98%);
width: 100%;
height: 100%;
z-index: 99;
top: 0px;
transition: 1s;
cursor: pointer;






}


    
`