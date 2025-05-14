import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceList from "../components/InvoiceList";
import { toggleForm } from "../store/invoiceSlice";
import type { RootState } from "../store/store";



const Home =()=>{
    const dispatch = useDispatch();
    const {isFormOpen} =useSelector((state: RootState)=>state.invoice)
    const handleNewInvoice =()=>{console.log("new invoice")
        dispatch(toggleForm())
    };
return (
<section className="min-h-screen">

    <div className="max-w-3xl mx-auto px-6 py-10 space-y-4 ">
        <Header onNewInvoice={handleNewInvoice}/>
        <InvoiceList/>
        { isFormOpen && <InvoiceForm/>}

    </div>
</section>

)
}

export default Home ;