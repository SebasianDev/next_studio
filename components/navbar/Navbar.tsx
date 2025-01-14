import React from 'react'
import { ActiveLink } from '../activeLinks/ActiveLink'

const navbarItems =[
    {path:'/about',text:'About'},
    {path:'/contact',text:'Contact'},
    {path:'/pricing',text:'Pricing'}
]
export const Navbar = () => {
    return (
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
                
            <span>Home</span>
            <div className='flex flex-1'></div>
            {
                navbarItems.map(item=>(
                  <ActiveLink key={item.path} {...item}></ActiveLink>
                )
                    
                )
            }


        </nav>

    )
}
