import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import './HomePage.css'
import { HiddenField } from '@redwoodjs/forms'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const HomePage = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Link to={routes.userDashboard()} className="homeTitle">
        {' '}
        Dev Journal{' '}
      </Link>
      <div className="container">
        <p className="description">&#60;your personal journal</p>
        <p className="descriptionTwo">of code snippets/&#62;</p>
        <p className="descriptionThree">
          learn
          <br />
          save
          <br />
          revisit
          <br />
          at any time.
        </p>
          <Link to={routes.signup()} className="signUpButtonHome">Start a Journal</Link>
        <div>
          {isAuthenticated ? (
            <div>
              <button onClick={logOut} className="logButtonHome">
                Log Out
              </button>
            </div>
          ) : (
              <Link className="logButtonHome" to={routes.login()}>Login</Link>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
