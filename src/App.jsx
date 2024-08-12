import React from 'react'
import Navbar from './componants/Navbar/Navbar'
import Hero from './componants/Hero/Hero'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar />
        <Hero />
    </main>
    </>
  )
}

export default App