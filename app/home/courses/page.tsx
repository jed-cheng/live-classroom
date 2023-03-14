import Link from 'next/link'
import React from 'react'

export default function Courses() {
  return (
    <div>
      <button>join course</button>
      <button>create course</button>
      <div>
        <Link href='./course/test' >course test</Link>
        joined courses list
      </div>
    </div>
  )
}
