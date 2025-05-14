import { createSlice } from "@reduxjs/toolkit";

interface INvoiceState {
    invoices: string[];
    filter: string;
    isFormOpen: boolean;
    selectedInvoice: null | string;

}

const initialState:INvoiceState = {
    invoices: [],
    filter: "all",
    isFormOpen: false,
    selectedInvoice: null 
}

const invoiceSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        toggleForm: (state) => {
            state.isFormOpen = !state.isFormOpen;
            if (!state.isFormOpen) {
                state.selectedInvoice = null;
            }
        },
    },

})

export const { toggleForm } = invoiceSlice.actions;

export default invoiceSlice.reducer