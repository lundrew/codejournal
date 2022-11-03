import UserCell from 'web/src/components/UserCell/UserCell'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const UserPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      {/* <MetaTags title="User" description="Profile page" /> */}
      <UserCell user={currentUser} />
    </>
  )
}

export default UserPage
