import { getCurrentUser } from "src/lib/auth"
import "./TotalPostsCard.css"
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'


type DashboardLayoutProps = {
  children: React.ReactNode
}

const TotalPostsCard = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div className="totalPostsCard">
      Total Posts
      <li className="nav-li">
            {isAuthenticated ? (
              <div>
                <span> {currentUser.id}    </span>{' '}

              </div>
            ) : (
              <Link to={routes.login()}>Login</Link>
            )}
          </li>    </div>
  )
}

export default TotalPostsCard



// on line 19 we need to get the number of total posts from prisma named posts[]
