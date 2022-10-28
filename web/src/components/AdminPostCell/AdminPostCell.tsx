import type { FindPostById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import AdminPost from 'src/components/Admin/Post/AdminPost'

export const QUERY = gql`
  query FindPostById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Post not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ post }: CellSuccessProps<FindPostById>) => {
  return <AdminPost post={post} />
}
