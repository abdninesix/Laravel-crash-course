import { Head, useForm } from "@inertiajs/react"


const Post = ({ post }) => {

    const { delete: del } = useForm() //del is custom name

    function submit(e) {
        e.preventDefault()
        del(`/posts/${post.id}`)
    }

    return (
        <div className='space-y-6'>
            <Head>
                <title>{post.body}</title>
                <meta name="laravel project" content="Page for post" />
            </Head>

            <h1 className='text-4xl'>Post</h1>

            <div className="p-2 border-b">
                <span className="text-base text-gray-600">Posted: {new Date(post.created_at).toLocaleTimeString()}</span>
                <p className="text-2xl">{post.body}</p>
                <form onSubmit={submit}><button className="text-red-500 cursor-pointer">Delete</button></form>
            </div>
        </div>
    )
}

export default Post