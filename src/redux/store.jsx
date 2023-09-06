import { configureStore } from '@reduxjs/toolkit'
import  dataStore  from "../redux/favreducers"


export default configureStore({
    reducer: {

        favData: dataStore,


    }
})