import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation () {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">INFORCE</span>
        
            <span>
                <Link to='/' className="mr-2">Product</Link>
                <Link to='/about'>About</Link>
            </span>
        </nav>
    )
}