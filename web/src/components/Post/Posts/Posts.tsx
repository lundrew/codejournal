import { useAuth } from '@redwoodjs/auth'
import React, { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import Edit from './../../Assets/edit.png'
import View from './../../Assets/journal.png'
import DeletePost from './DeletePost'
import './Posts.css'
import PostsFilterPanel from '../PostsFilterPanel/PostsFilterPanel'
import { Form, SelectField } from '@redwoodjs/forms'
import { languages } from '../PostForm'
import KeywordSearchBar from '../PostsFilterPanel/KeywordSearchBar'


const truncate = (text) => {
  let output = text
  if (text && text.length > 30) {
    output = output.substring(0, 30) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleString()}
      </time>
    )
  )
}

const Posts = ({ posts }) => {
  const { currentUser } = useAuth()
  const currentUserPosts = []

  posts &&
    posts.map((item) => {
      if (item.authorId === currentUser.id) {
        currentUserPosts.push(item)
      }
    })

  currentUserPosts.reverse()




  const [chosenLanguage, setLanguage] = useState('')
  const filteredPosts = []

  const filterPostsByLanguage = () => {
    // const userChoice = new RegExp(chosenLanguage)
    // console.log('searchInput:', userChoice)
    console.log('languages:', languages)
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].includes(chosenLanguage)) {
        let postsFilteredByLanguage = []
        postsFilteredByLanguage.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
        // return console.log('DisplayedPosts:', displayedPosts)
        console.log("DisplayedPosts:", postsFilteredByLanguage, "chosenLanguage:", chosenLanguage)
        return postsFilteredByLanguage.map(x => filteredPosts.push(...x))

      };
    }
  }

  let onChange = (event) => {
    const newLanguageValue = event.target.value
    setLanguage(newLanguageValue)
    console.log("onChange Dropdown Selection:", newLanguageValue)
  }

  chosenLanguage === 'All Posts' || !chosenLanguage ? currentUserPosts.map(x => filteredPosts.push(x)) : filterPostsByLanguage()

    const [searchInput, setSearchinput] = useState()

  let onKeywordSearchChange = (event) => {
    const newKeywordSearchValue = event.target.value
    setSearchinput(newKeywordSearchValue)
    console.log("On Search Input Change:", newKeywordSearchValue)
  }

  return (
    <>
    <div>
      <div className='filterPanelContainer'>
    <Form>
        <SelectField
          name="codeLanguage"
          className="language-input"
          onChange={onChange}
          validation={{
            required: true,
          }}
        >
          <option value="" disabled selected>Select a Language</option>
          {
            languages.map((value) => (
              <option
                value={value}
                key={value}>
                {value}
              </option>))}
        </SelectField>
      </Form>
      <input
      className="language-input"
      onChange={onKeywordSearchChange}
    ></input>      </div>
      <div className="postsContainer">
        <tbody>
          {filteredPosts.map((post) => (
            <tr key={post.id}>
              <td>{timeTag(post.createdAt)}</td>
              <td>{truncate(post.title)}</td>
              <td>
                <strong>{truncate(post.codeLanguage)}</strong>
              </td>
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
            </tr>
          ))}
        </tbody>
      </div>
      </div>
    </>
  )
}

export default Posts
