import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PostForm from 'src/components/Post/PostForm'
import './../../User/User.css'

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const NewPost = () => {
  const { hasRole } = useAuth()

  const [createPost, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.posts())
      toast.success('Entry logged')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createPost({ variables: { input } })
  }

  return (
    (hasRole('admin') || hasRole('moderator') || hasRole('user')) && (
      <div className="postContainer">
        <div className="postFields">
          <h1 className="cardTitle">Create Entry</h1>
          <div className="theForm">
            <PostForm onSave={onSave} loading={loading} error={error} />
          </div>
        </div>
      </div>
    )
  )
}

export default NewPost
