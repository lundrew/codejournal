import React from 'react'
import KeywordSearchBar from './KeywordSearchBar'
import LanguageFilterDropdown from './LanguageFilterDropdown'
import './PostsFilterPanel.css'

function PostsFilterPanel({ currentUserPosts }) {
  return (<>
    <div>
      <LanguageFilterDropdown
        currentUserPosts={currentUserPosts}
      />
      <KeywordSearchBar
        currentUserPosts={currentUserPosts}
      />
    </div>
  </>)
}

export default PostsFilterPanel