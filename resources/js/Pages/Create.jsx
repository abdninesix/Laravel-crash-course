import React from 'react'

const Create = () => {
  return (
    <div className='space-y-6'>
        <h1 className='text-4xl'>Create a post</h1>

        <div>
            <form className='flex flex-col gap-2 justify-center items-center'>
                <textarea className='w-full p-2'/>
                <button className='w-fit p-2 border-2 cursor-pointer'>Button</button>
            </form>
        </div>
    </div>
  )
}

export default Create