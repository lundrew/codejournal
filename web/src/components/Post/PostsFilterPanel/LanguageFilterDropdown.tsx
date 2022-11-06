import React, { useState } from 'react'
import { Form, SelectField } from '@redwoodjs/forms'
import { languages } from '../PostForm'
import PostMapper from '../Posts/PostMapper'


function LanguageFilterDropdown({ currentUserPosts }) {
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

  return (
    <>
      <Form>
        <SelectField
          name="codeLanguage"
          className="language-input"
          onChange={onChange}
          validation={{
            required: true,
          }}
        >
          <option value="" disabled selected>Select Language Filter</option>
          {
            languages.map((value) => (
              <option
                value={value}
                key={value}>
                {value}
              </option>))}
        </SelectField>
      </Form>
      <PostMapper
        filteredPosts={filteredPosts}
      />
    </>
  )
}

export default LanguageFilterDropdown