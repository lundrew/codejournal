import React from 'react'
import KeywordSearchBar from './KeywordSearchBar'
import LanguageFilterDropdown from './LanguageFilterDropdown'
import './PostsFilterPanel.css'

function PostsFilterPanel({ currentUserPosts }) {
  return (
    <>
      <div className="filterPanelContainer">
        <LanguageFilterDropdown currentUserPosts={currentUserPosts} />
      </div>
    </>
  )
}

export default PostsFilterPanel
