
import { Button, Menu } from '@headlessui/react'
import { Filter, Plus } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

interface IProps{
    onNewInvoice:()=>void
}
const Header =({onNewInvoice}:IProps)=>{
    const status:string[] =[ "all","paid", "pending", "draft"];
    const {filter} = useSelector((state: RootState)=>state.invoice)
return (
    <nav className="flex items-center justify-between">
    <div>
        <h1 className="text-xl font-semibold">Factura</h1>
        
    </div>
    <div className='flex items-center space-x-4'>
        <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2">
                <Filter size={20}/>
                <span>Filter By</span>
            </Menu.Button>
            <Menu.Items className={"absolute right-0 mt-2 flex flex-col space-y-5 p-5 w-40 h-50 origin-top-right rounded-lg bg-indigo-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}>
               {status.map((item)=>(
                    <Menu.Item key={item}>
                        {({active}) => (<button 
                        className={`${active ? "bg-green-400" : ""}  duration-200 w-full text-center px-4 py-2 rounded-md capitalize ${filter === item ? "bg-green-400" : ""}`}>
                         {item}
                        </button>) }</Menu.Item>
               ))}

            </Menu.Items>
        </Menu>

        <Button type="button" onClick={onNewInvoice}>
            <div className='flex items-center space-x-2 rounded-lg bg-indigo-400 hover:bg-indigo-600 duration-200 p-2'>
                <Plus size={20}/>
                 <span className='font-semibold'>New</span>
            </div>
            
        </Button>

            
    </div>
    </nav>

)
}

export default Header ;