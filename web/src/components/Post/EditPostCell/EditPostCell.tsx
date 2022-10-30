import type { EditPostById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, MetaTags } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PostForm from 'src/components/Post/PostForm'
import { useAuth } from '@redwoodjs/auth'

export const QUERY = gql`
  query EditPostById($id: Int!) {
    post: post(id: $id) {
      id
      authorId
      title
      explanation
      codeLanguage
      codeSnippet
      createdAt
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      authorId
      title
      explanation
      codeLanguage
      codeSnippet
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post }: CellSuccessProps<EditPostById>) => {
  const [updatePost, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Entry updated')
      navigate(routes.post({ id: post.id }))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePost({ variables: { id, input } })
  }

  const { currentUser } = useAuth()

  return (
    <>
    <MetaTags title='Edit Entry' />
      {currentUser.id === post.authorId ? (
        <div className="postContainer">
          <div className="postFields">
            <h1 className="cardTitle">Edit Entry</h1>

            <PostForm
              post={post}
              onSave={onSave}
              error={error}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <>{navigate(routes.userDashboard())}</>
      )}
    </>
  )
}
