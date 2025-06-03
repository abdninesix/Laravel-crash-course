import { Head, useForm, usePage } from '@inertiajs/react'

const Edit = ({ post }) => {

    const { component } = usePage();

    const { data, setData, put, processing, errors } = useForm({
        body: post.body,
    })

    function submit(e) {
        e.preventDefault()
        put(`/posts/${post.id}`)
    }

    return (
        <div className='space-y-6'>
            <Head title={component} />

            <h1 className='text-4xl'>Edit a post</h1>

            <div>
                <form onSubmit={submit} className='flex flex-col gap-2 justify-center items-center'>
                    <textarea value={data.body} onChange={(e) => setData('body', e.target.value)} className={`w-full outline-none border-2 p-2 ${errors.body ? 'border-red-500' : 'border-slate-400'}`} />
                    {errors.body ? <p className='text-red-500 text-sm'>{errors.body}</p> : <p className='text-blue-500 text-sm'>Write your post here</p>}
                    <button className='w-fit p-2 bg-black text-white cursor-pointer' disabled={processing}>Button</button>
                </form>
            </div>
        </div>
    )
}

export default Edit