import Link from 'next/link'
import React from 'react'

export default function HomeLayout({
  children }:{
    children: React.ReactNode
}) {
  return (
    <div>
      <p>
        <Link href= './home/schedule'>schedule</Link>      
      </p>
      <p>
        <Link href= './home/courses'>courses</Link>      
      </p>
      <p>
        <Link href= './home/assignments'>assignments</Link>      
      </p>
      <p>
        <Link href= './home/settings'>settings</Link>      
      </p>
      <div>
        {children}
      </div>

    </div>
  )
}
