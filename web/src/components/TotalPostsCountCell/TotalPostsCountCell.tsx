import type { FindPosts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Posts from 'src/components/Post/Posts'
import DashboardLayout from 'src/layouts/DashboardLayout/DashboardLayout'
import TotalPostsCard from '../TotalPostsCard/TotalPostsCard'

export const QUERY = gql`
  query FindPosts {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No posts yet. '}
      <Link
        to={routes.newPost()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const beforeQuery = ({ posts }) => {
  return { variables: { posts } }
}

export const Success = ({ posts }: CellSuccessProps<FindPosts>) => {
  return <>
  <TotalPostsCard posts={posts}/>
  </>
}
