import React from 'react'

const Layout = ({children}) => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 space-y-2 duration-150'>
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
        </div>
    )
}

export default Layout