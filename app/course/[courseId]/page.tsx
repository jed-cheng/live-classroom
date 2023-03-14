import Link from 'next/link'
import React from 'react'

export default function Course({params}:{params:{courseId:string}}) {
  return (
    <div>
      <p>course name {params.courseId}</p>
      <p>
        <Link href='./course/id/lives'>lives</Link>
      </p>
      <p>
        <Link href='./course/id/tasks'>tasks</Link>
      </p>
      <p>
        <Link href='./course/id/participants'>participants</Link>
      </p>
    </div>
  )
}
