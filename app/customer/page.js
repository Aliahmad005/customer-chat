"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
const page = () => {
  return (
    <div>
      <p>customer chat</p>
       <FacebookProvider appId="1611389066016659" chatSupport>
        <CustomChat pageId="107380975202361" minimized={false}/>
      </FacebookProvider>  
    </div>
  )
}

export default page
