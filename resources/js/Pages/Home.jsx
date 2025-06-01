import { Link } from "@inertiajs/react"

const Home = ({ name, posts }) => {
  return (
    <div className='flex flex-col items-center justify-center'>

      <span className="text-2xl">Hello {name}</span>

      <div className="w-full flex flex-col gap-4">
        {posts.data.map(post => ( //data is coming from pagination in controller
          <div key={post.id} className="p-2 border-b">
            <span className="text-base text-gray-600">Posted: {new Date(post.created_at).toLocaleTimeString()}</span>
            <p className="text-2xl">{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2 p-4">
        {posts.links.map((link) => ( //links and it's properties are coming from pagination in controller
          //<a href={link.url}>{link.label}</a> //a tag causes server calls so we will use inertia self closing Link
          link.url ? (
            <Link className={`text-base p-1 ${link.active ? 'font-bold' : ''}`} key={link.label} href={link.url}>
              <span dangerouslySetInnerHTML={{ __html: link.label }} />
            </Link>
          ) : (
            <></>
          ) //in the end this whole can be a resusable component for pagination anywhere
        ))}
      </div>

      <Link preserveScroll href='/'>{new Date().toLocaleTimeString()}</Link>

    </div>
  )
}

export default Home