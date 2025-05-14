import { configureStore } from "@reduxjs/toolkit";
import InvoiceReducer from "./invoiceSlice";


export type RootState = ReturnType<typeof store.getState>;
export const store =configureStore({
    reducer:{
        invoice:InvoiceReducer
    }
});
