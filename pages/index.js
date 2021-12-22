import { Head } from 'next/document'
import Header from './Components/header'
import React, { useState } from 'react'
import Main from './Components/main'
import Footer from './Components/footer'

export default function Home() {
  return (
    <div>


      
      
      <Header title={'Cookie Stand Admin'}>
        {/* <h1> Cookie Stand Admin </h1> */}
      </Header>
      {/* overviw */}
      <Main/>
      {/* <Footer/> */}
      

      
    </div>
  )
}