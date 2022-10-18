import EditPostCell from 'src/components/Post/EditPostCell'
import { useAuth } from '@redwoodjs/auth'

type PostPageProps = {
  id: number
}

const EditPostPage = ({ id, posts }: PostPageProps) => {
  const { currentUser } = useAuth()

  const currentUserPosts = []
  posts &&
    posts.map((item) => {
      if (item.authorId === currentUser.id) {
        currentUserPosts.push(item)
      }
    })

  return <EditPostCell id={id} />
}

export default EditPostPage
