import humanize from 'humanize-string'
import { MetaTags } from '@redwoodjs/web'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAuth } from '@redwoodjs/auth'
import './../Post/Post.css'
import Trash from './../../Assets/trash-can.png'
import Edit from './../../Assets/edit.png'

import { Clippy } from 'src/components/Assets/Clippy'
import { Check } from 'src/components/Assets/Check'
import Expand from 'src/components/Assets/expand-arrows.png'
import { useState } from 'react'

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

  const { currentUser } = useAuth()

  // Copy Clipboard
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [copied])

  // Toggle Expand Code Snippet

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
    <MetaTags title="Entry" description="UserDashboard page" />
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
              <p className="viewPostTextPara">Code Snippet</p>
              <div className="snippetButtons">
                {/* Clipboard Copy Code Snippet */}
                <div
                  style={{
                    position: 'relative',
                    left: '47rem',
                  }}
                >
                  <div className="hideDiv">
                    <CopyToClipboard text={post.codeSnippet}>
                      <button
                        onClick={() => setCopied(true)}
                        style={{
                          appearance: 'none',
                          padding: 8,
                          border: 0,
                          outline: 0,
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            position: 'relative',
                            height: 16,
                            width: 16,
                          }}
                        >
                          <Clippy
                            style={{
                              color: '#292929',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              strokeDasharray: 50,
                              strokeDashoffset: copied ? -50 : 0,
                              transition: 'all 300ms ease-in-out',
                            }}
                          />
                          <Check
                            isVisible={copied}
                            style={{
                              color: 'green',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              strokeDasharray: 50,
                              strokeDashoffset: copied ? 0 : -50,
                              transition: 'all 300ms ease-in-out',
                            }}
                          />
                        </div>
                      </button>
                    </CopyToClipboard>
                  </div>
                </div>
                {/* Modal */}
                <button onClick={toggleModal} className="btn-modal">
                  <img src={Expand} style={{ width: 14 }} />
                </button>
                {modal && (
                  <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                      <pre className="codeSnippetText">{post.codeSnippet}</pre>
                      <button className="close-modal" onClick={toggleModal}>
                        <img src={Expand} style={{ width: 26 }} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {/* Code Snippet  */}
              <div className="innerPostBox">
                <pre className="codeSnippetText">{post.codeSnippet}</pre>
              </div>
            </div>
            <div className="postBox">
              <p className="viewPostTextPara">Documentation</p>
              <p className="documentationText">{post.explanation}</p>
            </div>
            {/* Edit and Delete Buttons */}
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
