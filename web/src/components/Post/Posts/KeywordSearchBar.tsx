import { Modal } from 'antd'
import React, { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { timeTag, truncate } from './Posts'
import Trash from './../../Assets/trash-can.png'
import Edit from './../../Assets/edit.png'
import View from './../../Assets/journal.png'
import PostMapper from './PostMapper'

let filteredPosts = []

function KeywordSearchBar({ currentUserPosts, posts: post }) {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const [searchedPosts, setSearchedPosts] = useState([])

  // const showModal = () => {
  //   setIsModalOpen(true);
  // }
  // const handleOk = (id) => {
  //   deletePost({ variables: { id } })
  //   setIsModalOpen(false)
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // }

  let onKeywordSearchChange = (event) => {
    const newKeywordSearchValue = event.target.value.toLowerCase()
    // currentUserPosts.map(x => languageSpecific.push(x.codeLanguage.includes(newKeywordSearchValue)))
    console.log(currentUserPosts.filter(x => x.codeLanguage.includes(newKeywordSearchValue)))
    filteredPosts.push(currentUserPosts.filter(x => x.codeLanguage.includes(newKeywordSearchValue)))



    // for (let i = 0; i < languages.length; i++) {
    //   if (languages[i].match(chosenLanguage)) {
    //     let displayedPosts = []
    //     displayedPosts.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
    //     // return console.log('DisplayedPosts:', displayedPosts)
    //     return displayedPosts.map(x => languageSpecific.push(...x))
    //   };
    // }

  }

  console.log(filteredPosts)
  return <>
    <input className="language-input" onChange={onKeywordSearchChange}></input>
    <PostMapper
        post={post}
        filteredPosts={filteredPosts}
        currentUserPosts={currentUserPosts}/>
  </>
}

export default KeywordSearchBar