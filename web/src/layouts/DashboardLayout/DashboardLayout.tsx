import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'


type DashboardLayoutProps = {
  children: React.ReactNode
}



const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
      <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Code Journal</Link>
          </h1>
          {isAuthenticated ? (
            <div>
              <span>Logged in as {currentUser.email}</span>{' '}
              <button type="button" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to={routes.login()}>Login</Link>
          )}
        </div>
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.posts()}
            className="rw-link"
          >
            Posts
          </Link>
        </h1>
        <Link
          to={routes.newPost()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Post
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DashboardLayout
