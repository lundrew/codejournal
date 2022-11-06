import React, { useState } from 'react'
import { Form, SelectField } from '@redwoodjs/forms'
import { languages } from '../PostForm'
import PostMapper from './PostMapper'


function LanguageFilterDropdown({currentUserPosts}) {
  const [chosenLanguage, setLanguage] = useState('')
  let filteredArrayOfPosts = []
  let displayedPosts = []

  let onChange = (event) => {
    const newLanguageValue = event.target.value
    setLanguage(newLanguageValue)
    console.log("onChange Dropdown Selection:", newLanguageValue)
    console.log("chosenLanguage")

    const searchStringInArray = () => {

      for (let i = 0; i < languages.length; i++) {
        if (languages[i].match(chosenLanguage)) {
          console.log(languages[i].match(chosenLanguage))
          filteredArrayOfPosts.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
          // console.log("DisplayedPosts:", displayedPosts)
          // console.log("chosenLanguage:", chosenLanguage)
          // console.log("language match to searchInput:", languages[i].match(chosenLanguage))

          return filteredArrayOfPosts.map(x => displayedPosts.push(...x))
        };
      }
    }
    return searchStringInArray()
  }

  let onKeywordSearchChange = (event) => {
    const newKeywordSearchValue = event.target.value.toLowerCase()
    // currentUserPosts.map(x => languageSpecific.push(x.codeLanguage.includes(newKeywordSearchValue)))
    console.log(currentUserPosts.filter(x => x.codeLanguage.includes(newKeywordSearchValue)))
    filteredArrayOfPosts.push(currentUserPosts.filter(x => x.codeLanguage.includes(newKeywordSearchValue)))



    // for (let i = 0; i < languages.length; i++) {
    //   if (languages[i].match(chosenLanguage)) {
    //     let displayedPosts = []
    //     displayedPosts.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
    //     // return console.log('DisplayedPosts:', displayedPosts)
    //     return displayedPosts.map(x => languageSpecific.push(...x))
    //   };
    // }

  }
  console.log(filteredArrayOfPosts)


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
      <input className="language-input" onChange={onKeywordSearchChange}></input>
      <PostMapper
        filteredPosts={filteredArrayOfPosts}
      />
    </>
  )
}

export default LanguageFilterDropdown