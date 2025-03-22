import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InventoryItem = {
    name: string;
    category: string;
    price: string;
    quantity: string;
    image: string | null;
};

type InventoryState = {
    items: InventoryItem[];
}

const initialState: InventoryState = {
    items: [{
        name: "",
        category: "",
        price: "",
        quantity: "",
        image: null
    },{
        name: "",
        category: "",
        price: "",
        quantity: "",
        image: null
    }],
}

const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers:{
        addInventoryItem: (state, action: PayloadAction<InventoryItem>)=> {
            state.items.push(action.payload)
        }
    }
});

export const {addInventoryItem} = inventorySlice.actions;
export default inventorySlice.reducer; 
