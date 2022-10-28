import humanize from 'humanize-string'

import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import './../../Post/Post/Post.css'
import Trash from './../../Assets/trash-can.png'

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

const AdminPost = ({ post }) => {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Entry deleted')
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

  return (
    <>
      {'admin' ? (
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
              <p className="viewPostTextPara">Code Snippet</p>
              <div className="innerPostBox">
                <pre className="codeSnippetText">{post.codeSnippet}</pre>
              </div>
            </div>
            <div className="postBox">
              <p className="viewPostTextPara">Documentation</p>
              <p className="documentationText">{post.explanation}</p>
            </div>
            <div className="viewPostButtons">
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

export default AdminPost
