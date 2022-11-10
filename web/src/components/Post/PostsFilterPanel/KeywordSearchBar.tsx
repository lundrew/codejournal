import React, { useState } from 'react'
import { languages } from '../PostForm'
import Posts from '../Posts/Posts'

function KeywordSearchBar({ currentUserPosts }) {
  const [searchInput, setSearchinput] = useState()
  const filteredPosts = []

  let onKeywordSearchChange = (event) => {
    const newKeywordSearchValue = event.target.value
    setSearchinput(newKeywordSearchValue)
    console.log("On Search Input Change:", newKeywordSearchValue)

    // console.log(currentUserPosts.filter(x => x.title.includes(searchInput)))
    let arr1 = currentUserPosts.filter(x => x.title.includes(searchInput))

    console.log("this is arr1:", arr1)

    // for (let i = 0; i < languages.length; i++) {
    //   if (currentUserPosts[i].title.includes(searchInput)) {

    //     filteredPosts.push(currentUserPosts.title.filter(x => x.includes(searchInput)

    //     ))
    //   }
    // }
    console.log("KWSB Filteredposts:", filteredPosts)
  }
  console.log("KWSB currentUserPosts:", currentUserPosts)
  return <>
    <input
      className="language-input"
      onChange={onKeywordSearchChange}
    ></input>

  </>
}

export default KeywordSearchBar
