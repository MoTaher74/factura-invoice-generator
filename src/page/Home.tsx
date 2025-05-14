import Header from "../components/Header";
import InvoiceForm from "../components/InvoiceForm";
import InvoiceList from "../components/InvoiceList";


const Home =()=>{
return (
<section className="min-h-screen">

    <div className="max-w-3xl mx-auto px-6 py-10 space-y-4 ">
        <Header/>
        {/* <InvoiceList/> */}
        <InvoiceForm/>

    </div>
</section>

)
}

export default Home ;