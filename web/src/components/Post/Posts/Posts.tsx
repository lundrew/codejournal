import { useAuth } from '@redwoodjs/auth'
import PostMapper from './PostMapper'
import LanguageFilterDropdown from '../PostsFilterPanel/LanguageFilterDropdown'
import KeywordSearchBar from '../PostsFilterPanel/KeywordSearchBar'
import PostsFilterPanel from '../PostsFilterPanel/PostsFilterPanel'


const Posts = ({ posts }) => {
  const { currentUser } = useAuth()
  const currentUserPosts = []
  const filteredPosts = []

  posts &&
    posts.map((item) => {
      if (item.authorId === currentUser.id) {
        currentUserPosts.push(item)
      }
    })

  currentUserPosts.reverse()

  return (
    <>
      <PostsFilterPanel
        currentUserPosts={currentUserPosts}
      />
      <PostMapper
        filteredPosts={filteredPosts}
      />
    </>
  )
}

export default Posts