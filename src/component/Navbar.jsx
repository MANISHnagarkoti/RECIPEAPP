import React, { useState } from 'react'
import { styled } from 'styled-components'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge';

const Navbar = () => {


    const [toogler, settoogler] = useState(false)

    const { data } = useSelector((state) => state.favData)


    return (
        <Container className='md:px-14  px-4 flex justify-between items-center h-16 fixed right-0 left-0 text-white'>


            <div className='flex gap-x-5'>

                <DragHandleIcon className='text-white text-sm cursor-pointer hamburger' onClick={() => settoogler(!toogler)} />

                <img src="/logo.png" width="140px" alt="" />
            </div>


            <div className={toogler === false ? 'flex   items-center gap-x-12 font-bold nav-content ' : 'flex items-center gap-x-12 font-bold nav-content active space-y-12'}    >
                <Link to={"/"} onClick={() => settoogler(false)} >
                    <div>
                        Home
                    </div>
                </Link>






                <Link to={"/favlist"} onClick={() => settoogler(false)} >
                    <StyledBadge

                        badgeContent={data.length}

                        color="primary"

                    >
                        <div className='  ms-2 flex  bg-green-800 py-2 px-5 justify-center items-center text-white cursor-pointer rounded-full'>
                            Favorite
                        </div>
                    </StyledBadge>
                </Link>




            </div>


        </Container >
    )
}

export default Navbar


const StyledBadge = styled(Badge)({



    "& .MuiBadge-badge": {
        color: "white",
        backgroundColor: "rgb(22 101 52 )"
    }
});


const Container = styled.div`

background-color: black;
z-index: 999;


.hamburger{

display: none;
@media(max-width:700px){

&{


    display: block;

}


}

}



.nav-content{


@media(max-width:700px){



&{

position: absolute;
top: 50px;
background-color: black;
width: 100%;
right: 0px;
flex-direction: column;
text-align: center;
padding: 40px;
transform: translateX(-100vw);


div{
    margin-top: 0px;
}


}




&.active{


transform: translateX(0vw);

}


}



}





`