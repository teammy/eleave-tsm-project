'use client'

import { useSession } from 'next-auth/react'

export default function Page() {
  const { data: session, status } = useSession()

  console.log(  session)

  return <h1>Home page! {session?.user.person_id}</h1>
}
