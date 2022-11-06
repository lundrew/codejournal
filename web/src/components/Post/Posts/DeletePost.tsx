import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { QUERY } from 'src/components/Post/PostsCell'
import { Modal } from 'antd'
import Trash from './../../Assets/trash-can.png'
import React, { useState } from 'react'


const DELETE_POST_MUTATION = gql`
  mutation DeletePostMutation($id: Int!) {
    deletePost(id: $id) {
      id
    }
  }`

function DeletePost({ post }) {
  const [deletePost] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      toast.success('Entry deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true);
  }

  const handleOk = (id) => {
    deletePost({ variables: { id } })
    setIsModalOpen(false)
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  return (<>
    <button
      type="button"
      title={'Delete Post'}
      onClick={showModal}
      className="iconPosts"
    >
      {' '}
      <img src={Trash} />{' '}
    </button>
    <Modal
      className="modal"
      title={post.title}
      open={isModalOpen}
      onOk={() => handleOk(post.id)}
      onCancel={handleCancel}>
      <p>'Are you sure you want to delete post <strong>{post.title}</strong></p>
    </Modal>
  </>
  )
}

export default DeletePost