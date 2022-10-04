import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AddPostPage = () => {
  return (
    <>
      <MetaTags title="AddPost" description="AddPost page" />
      <div className="addpost">
        <h1>AddPostPage</h1>
        <p>
          Find me in <code>./web/src/pages/AddPostPage/AddPostPage.tsx</code>
        </p>
        <p>
          My default route is named <code>addPost</code>, link to me with `
          <Link to={routes.addPost()}>AddPost</Link>`
        </p>
      </div>
    </>
  )
}

export default AddPostPage
