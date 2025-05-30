import { useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {

    const { data, setData, post, processing, errors } = useForm({
        body: '',
    })

    function submit(e) {
        e.preventDefault()
        post('/posts')
    }

    return (
        <div className='space-y-6'>
            <h1 className='text-4xl'>Create a post</h1>

            <div>
                <form onSubmit={submit} className='flex flex-col gap-2 justify-center items-center'>
                    <textarea value={data.body} onChange={(e)=>setData('body', e.target.value)} className={`w-full p-2 ${errors.body && 'outline-red-500'}`} />
                        {errors.body && <p className='text-red-500 text-sm'>{errors.body}</p>}
                    <button className='w-fit p-2 bg-black text-white cursor-pointer' disabled={processing}>Button</button>
                </form>
            </div>
        </div>
    )
}

export default Create