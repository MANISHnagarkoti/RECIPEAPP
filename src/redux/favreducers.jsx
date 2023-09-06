import { createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';


const addlist = () => toast("🍝 Succesfully Added!");
const warning = () => toast.warn(" 🍺 Recipe Already in list!");
const deletelist = () => toast("🌶️ Succesfully Deleted!");


const getdata = () => {

  const data = localStorage.getItem("list")

  if (!data) {


    return []

  } else {

    return JSON.parse(localStorage.getItem("list"))

  }



}


export const dataStore = createSlice({


  name: 'favStore',



  initialState: {

    data: getdata()

  },


  reducers: {

    addFav(state, action) {




      const check = state.data.findIndex((e) => {

        return e.id === action.payload.id

      })




      if (check >= 0) {
        warning()

        return {

          ...state



        }


      } else {

        addlist()


        return {


          ...state,
          data: [...state.data, action.payload]

        }



      }







    }

    ,

    removeFav(state, action) {




      const filterdata = state.data.filter((e) => e.id !== action.payload)

      deletelist()

      return {
        ...state,
        data: filterdata


      }



    },

    removeArray(state, action) {








      return {
        ...state,
        data: []


      }



    },
    addArray(state, action) {








      return {
        ...state,
        data: action.payload


      }



    },


  }

})














export const { addFav, removeFav, removeArray, addArray } = dataStore.actions

export default dataStore.reducer







// thunk



// export function fetchProduct() {

//   return async function fetchProductThunk(dispatch) {


//     try {

//       let data = await fetch(`https://api.pujakaitem.com/api/products`)

//       let fetchdata = await data.json()



//       dispatch(totaldata(fetchdata))

//       dispatch(add(fetchdata))



//       dispatch(isloading(false))


//     } catch (eror) {

//       // console.log(eror)

//       // dispatch(errors())


//     }

//   }


// }

