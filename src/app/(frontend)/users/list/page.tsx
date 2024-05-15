import UserList from '@/components/users'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.DUMMY_API}/users`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
}

const UserListApp = async () => {
  const data = await getData()

  return <UserList userData={data} />
}

export default UserListApp
