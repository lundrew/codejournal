import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import './HomePage.css'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const HomePage = ({ children }: AdminLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <h1 className='title'>
        Code Journal
      </h1>
      <div className='container'>
        <p className='description'>
          &#60;your personal journal
        </p>
        <p className='descriptionTwo'>
          of code snippets/&#62;
        </p>
        <p className='descriptionThree'>
          learn
          <br/>
          store
          <br/>
          revisit
          <br/>
          retain.
        </p>
        <button className='logInButton'><Link to={routes.signup()}>Sign Up</Link></button>
        <div>
        {isAuthenticated ? (
            <div>
              <button className='signUpButton' onClick={logOut}>Log Out</button>
            </div>
          ) : (
            <button className='signUpButton'><Link to={routes.login()}>Login</Link></button>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
