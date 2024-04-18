import React from 'react'
import { Button } from '../ui/button'

const Menu = () => {
    return (
        <Button variant={"ghost"} className="w-8 h-8 p-1" asChild>{/* "asChild" means ka Button ab parent nhi balka as a child hai its like ka jasay <p> ma <div> nahi rakh sktay na bcuz hydration error ata hai miss match tag ki wala say so yaha be asa hi haka "Button" ma kisi or component ma nhi rakhsktay toh jab hum "asChild" krdetay hain toh its mean ka Button uss component ma hai. */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        </Button>
    )
}

export default Menu;

