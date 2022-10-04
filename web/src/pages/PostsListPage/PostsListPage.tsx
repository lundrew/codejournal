import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PostsListPage = () => {
  return (
    <>
      <MetaTags title="PostsList" description="PostsList page" />

      <h1>PostsListPage</h1>
      <p>
        Find me in <code>./web/src/pages/PostsListPage/PostsListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>postsList</code>, link to me with
        <Link to={routes.postsList()}>PostsList</Link>
      </p>
    </>
  )
}

export default PostsListPage
