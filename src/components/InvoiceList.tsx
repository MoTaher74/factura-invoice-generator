import { ChevronRight } from "lucide-react";

interface IProps{


}

const InvoiceList =({}:IProps)=>{
return (
    <section className=" space-y-10">
        <div className="bg-red-400 rounded-lg flex items-center justify-between cursor-pointer p-2">
            <div className="flex items-center space-x-6">
                <span>invoice ID</span>
                <span>Due Date</span>
                <span>Mo</span>

            </div>
            
            <div className="flex items-center space-x-6">
                <span>$350</span>
                <div className="flex items-center">
                    <span className="capitalize">invoie status</span>
                     <ChevronRight className="text-indigo-500"/>
                </div>
                
            </div>
           

        </div>
    </section>
)
}

export default InvoiceList ;