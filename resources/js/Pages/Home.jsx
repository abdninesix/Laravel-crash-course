import { Link } from "@inertiajs/react"


const Home = ({ name }) => {
  return (
    <div className='flex flex-col items-center justify-center text-4xl font-bold'>
      <span>Hello {name}</span>
      <Link preserveScroll className="mt-[1000px]" href='/'>{new Date().toLocaleTimeString()}</Link>
    </div>
  )
}

export default Home