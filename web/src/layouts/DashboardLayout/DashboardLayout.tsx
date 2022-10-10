import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import './DashboardLayout.css'
import DashboardPanel from 'src/components/DashboardPanel/DashboardPanel'
import TotalPostsCard from 'src/components/TotalPostsCard/TotalPostsCard'
import PostsCell from 'src/components/Post/PostsCell'
import TotalPostsCountCell from 'src/components/TotalPostsCountCell'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()


  return (
    <div>
      <header>
        <h1 className="title"> Code Journal</h1>
        <nav>
          <li className="nav-li">
            {isAuthenticated ? (
              <div>
                <span>Welcome, {currentUser.email}</span>{' '}
                <button className="logoutButton" onClick={logOut}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </li>
          <li className="nav-li"></li>
        </nav>
      </header>
      <div className="dashboardContent">
        <div>
      <DashboardPanel />
      <TotalPostsCountCell />
        </div>
        <div className="children">
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
