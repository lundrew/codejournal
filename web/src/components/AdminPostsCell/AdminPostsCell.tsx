import type { FindPosts } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import AdminPosts from 'src/components/Admin/Post/AdminPosts'

export const QUERY = gql`
  query AdminPostsQuery {
    posts {
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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  return (
    <>
      <AdminPosts posts={posts} />
    </>
  )
}
