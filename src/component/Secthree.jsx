import React from 'react'
import { styled } from 'styled-components'

const Secthree = () => {
    return (
        <Container className='md:px-14 px-4'>

            <div className='text-white'>

                <div className='font-bold text-4xl'>Subscribe to our Newsletter</div>

                <div className='mt-8' >
                    Fusce id velit placerat, efficitur libero placerat, sodales ante. Curabitur sed erosat orci congue vestibulum.</div>
                <div className='bg-green-700 cursor-pointer rounded-full mt-4 inline-block text-white px-6 py-3'>
                    Subscribe
                </div>

            </div>



        </Container>

    )
}

export default Secthree

const Container = styled.div`

background-image: url("/sec2img.jpg");
height: 350px;
width: 100%;
background-position: center;
background-size: cover;
margin-top: 100px;
display: flex;
align-items: center;

`