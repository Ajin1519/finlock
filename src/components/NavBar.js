 import { UserCircleIcon } from '@heroicons/react/24/outline'
export default function NavBar(props){
    return(
        <nav className='flex flex-row bg-black justify-between p-4'>
            <div>
                <h1 className='text-white'>LOGO</h1>
            </div>
            <div className='flex'>
                <h2 className='text-white'>Hi,{props.name}</h2>
                <UserCircleIcon className='h-6 w-6 text-white' />
            </div>
        </nav>
    )
}
