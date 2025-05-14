
import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Filter, Plus } from 'lucide-react';

interface IProps{


}

const Header =({}:IProps)=>{
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
                <Menu.Item as="button">Item 1</Menu.Item>
                <Menu.Item as="button">Item 2</Menu.Item>
                <Menu.Item as="button">Item 3</Menu.Item>
            </Menu.Items>
        </Menu>

        <Button type="button">
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