import { useAuth } from '@redwoodjs/auth'
import { Link, NavLink, routes } from '@redwoodjs/router'

import './DashboardLayout.css'
import DashboardPanel from 'src/components/DashboardPanel/DashboardPanel'
import TotalPostsCountCell from 'src/components/TotalPostsCountCell'
import JournalIcon from './../../../src/components/Assets/journal-icon.png'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div>
      <header>
        <h1 className="title"> Dev Journal</h1>
        <nav>
          <li className="nav-li">
            {isAuthenticated ? (
              <div className="dashLayoutNav">
                {/* <span className="currentUsername">
                  Welcome, {currentUser.name || currentUser.email}
                </span>{' '} */}
                <div className="divider"></div>
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
