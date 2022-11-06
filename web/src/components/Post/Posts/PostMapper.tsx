import React from 'react'
import { Link, routes } from '@redwoodjs/router'
import { timeTag, truncate } from './Posts'
import Edit from './../../Assets/edit.png'
import View from './../../Assets/journal.png'
import DeletePost from './DeletePost'
import './Posts.css'

function PostMapper({ filteredPosts }) {
  return (<>
    <tbody>
      {filteredPosts.map((post) => (
        <tr key={post.id}>
          <td>{timeTag(post.createdAt)}</td>
          <td>{truncate(post.title)}</td>
          <td>{truncate(post.codeLanguage)}</td>
          <td>
            <nav className="rw-table-actions">
              <Link
                to={routes.post({ id: post.id })}
                title={'Show post '}
                className="iconPosts"
              >
                <img src={View} />{' '}
              </Link>
              <Link
                to={routes.editPost({ id: post.id })}
                title={'Edit Post'}
                className="iconPosts"
              >
                <img src={Edit} />{' '}
              </Link>
              <DeletePost post={post} />
            </nav>
          </td>
        </tr>))}
    </tbody>
  </>)
}

export default PostMapper