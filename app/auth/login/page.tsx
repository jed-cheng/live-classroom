import Link from 'next/link'
import React from 'react'


export default function Login() {
  return (
    <>
      <form>
        <label>username</label>
        <input type='text'/> 
        <hr/>
        <label>pasword</label>
        <input type='text'/>
        <hr/>
        <button><Link href='./home'>log in</Link></button>
      </form>
    </>
  )
}
