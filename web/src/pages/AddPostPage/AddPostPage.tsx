import { MetaTags } from '@redwoodjs/web'
import NewPost from 'src/components/Post/NewPost/NewPost'

const AddPostPage = () => {
  return (
    <>
      <MetaTags title="Add Entry" description="AddPost page" />
      <div className="addpost">
        <NewPost />
      </div>
    </>
  )
}

export default AddPostPage
