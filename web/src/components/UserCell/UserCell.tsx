import { navigate, routes } from '@redwoodjs/router'
import {
  CellSuccessProps,
  CellFailureProps,
  useMutation,
  MetaTags,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { User } from '../User/User'
import './UserCell.css'

export const QUERY = gql`
  query User {
    user {
      id
      name
      email
    }
  }
`

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
      email
      name
    }
  }
`
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div>Error: {error.message}</div>
)

export const Success = ({ user }: CellSuccessProps) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Profile updated')
      navigate(routes.user())
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const onSave = (input) => {
    updateUser({ variables: { input } })
  }
  return (
    <>
      <MetaTags title={`${user.email || user.name} | Edit Profile`} />
      <div>
        <div>
          <User error={error} loading={loading} onSave={onSave} user={user} />
        </div>
      </div>
    </>
  )
}
