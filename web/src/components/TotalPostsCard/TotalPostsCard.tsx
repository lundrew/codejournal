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
