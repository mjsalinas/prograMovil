import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import usersReducer from "./slices/usersSlice";
import inventoryReducer from "./slices/inventorySlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        inventory: inventoryReducer,
    }
});

store.subscribe(() => { console.log("Estado actualizado:", store.getState()); });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;