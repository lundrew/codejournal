import './TotalPostsCard.css'
import { useAuth } from '@redwoodjs/auth'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const TotalPostsCard = ({ posts }) => {
  const { currentUser } = useAuth()

  const newArray = []
  posts &&
    posts.map((item) => {
      if (item.authorId === currentUser.id) {
        newArray.push(item)
      }
    })

  const currentUserPostCount = newArray.length

  return (
    <div className="totalPostsCard">
      <h1>{currentUserPostCount}</h1>
      <h2>Entries</h2>
    </div>
  )
}

export default TotalPostsCard

//Cannot read properties of null (reading 'id')
//getting error because when we logout it is expecting a currentUser.id and so when we logout there is no value to find a currentUser.id.... so we either need to use some sort of null value or redirect the user straight to the landing page once we logout. find the logout button, so when we click logout it redirects us straight to the landing page and unauthorize a user to go to that page again even if theyre logged out which will be in
