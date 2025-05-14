import { Plus, Trash2, X } from "lucide-react";

interface IProps{


}

const InvoiceForm =({}:IProps)=>{
return (
    <section className="fixed inset-0 bg-black/50 flex items-start justify-center overflow-y-auto">
        <div className="bg-red-200 rounded-lg w-full max-w-2xl mt-8 mb-8">
            <div className="flex justify-between items-center my-5 px-5">
            <h1 className="text-2xl font-semibold">New Invoice</h1>
            <button>
                <X size={20}/>
            </button>
            </div>
<form className="space-y-6 px-5 my-5">
    <div className="space-y-2">
    <h3>Bill From</h3>
    <input type="text" placeholder="Street Address" required className="w-full bg-red-600 rounded-lg p-3" />
    </div>
    <div className="grid grid-cols-3 gap-4">
         
    <input type="text" placeholder="City" required className="w-full bg-red-600 rounded-lg p-3" />
    <input type="text" placeholder="Post Code" required className="w-full bg-red-600 rounded-lg p-3" />
    <input type="text" placeholder="Country" required className="w-full bg-red-600 rounded-lg p-3" />
    </div>

    <div className="space-y-4">
    <h3>Bill To</h3>
    <input type="text" placeholder="Client's Name" required className="w-full bg-red-600 rounded-lg p-3" />
    <input type="email" placeholder="Client's Email" required className="w-full bg-red-600 rounded-lg p-3" />
    <input type="text" placeholder="Street Address" required className="w-full bg-red-600 rounded-lg p-3" />
    </div>
    <div className="grid grid-cols-3 gap-4">
         
    <input type="text" placeholder="City" required className="w-full bg-red-600 rounded-lg p-3" />
    <input type="text" placeholder="Post Code" required className="w-full bg-red-600 rounded-lg p-3" />
    <input type="text" placeholder="Country" required className="w-full bg-red-600 rounded-lg p-3" />
    </div>
    <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
            <input type="date" className="w-full bg-red-600 rounded-lg p-3" />
            <select className="w-full bg-red-600 rounded-lg p-3" required>
                <option>Net 30 days</option>
                <option>Net 60 days</option>

            </select>
        </div>
        <input type="text" placeholder="Project Description" required className="w-full bg-red-600 rounded-lg p-3" />
    </div>
    <div className="space-y-4">
        <h3>Item List</h3>
        <div className="grid grid-cols-12 gap-4 items-center">
            <input type="text" placeholder="Item Name" className="w-full bg-red-600 rounded-lg p-3 col-span-4"  />
            <input type="number" placeholder="Quantity" className="w-full bg-red-600 rounded-lg p-3 col-span-2" min={0} required />
            <input type="text" placeholder="Price" className="w-full bg-red-600 rounded-lg p-3 col-span-2" min={0} required step={0.01}  />
            <div className="col-span-3 text-right "> Total Amount</div>
            <button type="button"><Trash2 size={20} /></button>
        </div>
        <button type="button" className="w-full bg-green-400 hover:bg-green-600 duration-200 rounded-lg p-3 flex items-center justify-center space-x-2">
            <Plus size={20}/>
            <span>Add New Item</span>
        </button>
    </div>
    <div className="flex justify-end space-x-4">
        <button type="button" className="w-full bg-indigo-400 hover:bg-indigo-600 duration-200 rounded-lg p-5 "> Create</button>
        <button type="button" className="w-full bg-indigo-400 hover:bg-indigo-600 duration-200 rounded-lg p-5 "> Cancel</button>
    </div>
</form>
        </div>

    </section>

)
}

export default InvoiceForm ;