import Link from 'next/link'
import React from 'react'

export default function Course({params}:{params:{courseId:string}}) {
  return (
    <div>
      <p>course name {params.courseId}</p>
      <p>
        <Link href='./course/id/session'>lives</Link>
      </p>
      <p>
        <Link href='./course/id/task'>tasks</Link>
      </p>
      <p>
        <Link href='./course/id/participant'>participant</Link>
      </p>
    </div>
  )
}
