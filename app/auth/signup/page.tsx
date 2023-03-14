import Link from 'next/link'
import React from 'react'

export default function Signup() {
  return (
    <div>

      <form>
        <label>usename</label>
        <input type='text'/>
        <hr/>
        <label>password</label>
        <input type='password'/>
        <hr/>
        <label>confirm password</label>
        <input type='password'/>
        <hr/>
        <button><Link href='./auth/login'>sign up</Link></button>
      </form>
    </div>
  )
}
