import React from 'react'
import Layout from '../Layouts/Layout'

const Home = ({ name }) => {
  return (
    <div className='flex justify-center text-4xl font-bold'>Hello {name}</div>
  )
}

Home.layout = page => <Layout children={page} />

export default Home