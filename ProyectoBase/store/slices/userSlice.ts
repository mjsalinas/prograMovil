import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface User {
    name: string;
    email: string;
    password: string;

}

const initialState: User = {
    name: "", email: "", password: ""

}

const userSlice = createSlice({ name: "user", initialState,
    reducers: {
        registerUser: (state, action: PayloadAction <User> ) => {return action.payload} 
    }
});