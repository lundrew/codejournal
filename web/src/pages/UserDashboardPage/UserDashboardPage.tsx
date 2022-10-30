import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/Post/PostsCell'

const UserDashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="UserDashboard page" />
      <div className='dashboardPage'>
      <PostsCell />
      </div>
    </>
  )
}

export default UserDashboardPage
