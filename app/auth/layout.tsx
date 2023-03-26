import Link from 'next/link'
import React from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <div>
      <h1>
        welcome aborad
      </h1>
      <p>
        <Link href='./auth/login'>log in</Link>
      </p>
      <p>
        <Link href={'./auth/signup'}>sign up</Link>
      </p>
      <div>
        {children}
      </div>
    </div>

  )
}
