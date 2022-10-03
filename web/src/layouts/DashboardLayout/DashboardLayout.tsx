import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import './DashboardLayout.css'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <header>
      <h1 className="title"> CodeJournal</h1>
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
  )
}

export default DashboardLayout
