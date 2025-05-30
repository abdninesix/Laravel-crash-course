import React from 'react'

const Layout = ({children}) => {
    return (
        <>
            <header>
                <nav className='p-2 w-full flex justify-center gap-5 bg-slate-500 text-white'>
                    <a href='/'>Home</a>
                    <a href='/'>Create</a>
                    <a href='/about'>About</a>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                footer
            </footer>
        </>
    )
}

export default Layout