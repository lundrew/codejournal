import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import './../Post/Post.css'
import Trash from './../../Assets/trash-can.png'
import Edit from './../../Assets/edit.png'

const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Post = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
      navigate(routes.posts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post ' + id + '?')) {
      deletePost({ variables: { id } })
    }
  }

  const { currentUser } = useAuth()

  return (
    <>
      {currentUser.id === post.authorId ? (
        <div className="myContainer">
          <div className="rw-segment">
            <h2 className="rw-heading rw-heading-secondary">
              <p className="dateViewPost">{timeTag(post.createdAt)}</p>
            </h2>
            <div className="languageViewPost">
              <p className="languageViewPostText">{post.codeLanguage}</p>
            </div>
            <div className="titleViewPost">
              <p className="viewPostText">{post.title}</p>
            </div>
            <div className="postBox">
              <p className="viewPostTextPara">Code snippet</p>
              <pre className="codeSnippetText">{post.codeSnippet}</pre>
            </div>
            <div className="postBox">
              <p className="viewPostTextPara">Explanation</p>
              <p>{post.explanation}</p>
            </div>
            <div className="viewPostButtons">
              <Link
                to={routes.editPost({ id: post.id })}
                title={'Edit Post'}
                className="iconPost"
              >
                <img src={Edit} />{' '}
              </Link>
              <button
                type="button"
                title={'Delete Post'}
                onClick={() => onDeleteClick(post.id)}
                className="iconPost"
              >
                {' '}
                <img src={Trash} />{' '}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>{navigate(routes.userDashboard())}</>
      )}
    </>
  )
}

export default Post
