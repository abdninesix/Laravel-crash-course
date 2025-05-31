import { Link } from "@inertiajs/react"


const Home = ({ name, posts }) => {
  return (
    <div className='flex flex-col items-center justify-center text-4xl font-bold'>
      <span>Hello {name}</span>
      <div className="flex flex-col gap-5">
        {posts.map(post=>(
          <div key={post.id} className="p-4 border-b">
            <span>Posted: {new Date(post.created_at).toLocaleTimeString()}</span>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <Link preserveScroll href='/'>{new Date().toLocaleTimeString()}</Link>
    </div>
  )
}

export default Home