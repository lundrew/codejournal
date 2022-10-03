import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'

const UserDashboardPage = () => {
  return (
    <>
      <MetaTags title="UserDashboard" description="UserDashboard page" />

    </>
  )
}

export default UserDashboardPage


// name DashboardPanel
// yarn rw g component DashboardPanel
// name Dashboard Post List
// yarn rw g component DashboardPostList
