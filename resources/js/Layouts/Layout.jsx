import { Link } from '@inertiajs/react'
import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 space-y-2 duration-150'>
            <header>
                <nav className='p-2 w-full flex justify-center gap-5 bg-slate-300'>
                    <Link href='/'>Home</Link>
                    <Link href='/'>Create</Link>
                    <Link href='/about'>About</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                footer
            </footer>
        </div>
    )
}

export default Layout