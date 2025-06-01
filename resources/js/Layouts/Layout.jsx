import { Link } from '@inertiajs/react'

const Layout = ({children}) => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 space-y-5 duration-150'>
            <header>
                <nav className='p-6 w-full flex text-2xl font-bold rounded-xl justify-between bg-slate-300'>
                    <Link href='/posts/create'>Create</Link>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer className='flex justify-center'>
                The end
            </footer>
        </div>
    )
}

export default Layout