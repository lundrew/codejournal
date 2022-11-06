import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Form, SelectField } from '@redwoodjs/forms'
import { languages } from '../PostForm'
import PostMapper from './PostMapper'

const MAX_STRING_LENGTH = 150

export const truncate = (text) => {
  let output = text
  if (text && text.length > 30) {
    output = output.substring(0, 30) + '...'
  }
  return output
}

export const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleString()}
      </time>
    )
  )
  // Convert time to browser local time .toLocaleString *****
}

const PostsList = ({ posts }) => {
  const [chosenLanguage, setLanguage] = useState('')
  const { currentUser } = useAuth()
  const currentUserPosts = []
  const languageSpecific = []

  posts &&
    posts.map((item) => {
      if (item.authorId === currentUser.id) {
        currentUserPosts.push(item)
      }
    })

  currentUserPosts.reverse()


  let onChange = (event) => {
    const newLanguageValue = event.target.value
    setLanguage(newLanguageValue)
    console.log("onChange Dropdown Selection:", newLanguageValue)
  }

  let onKeywordSearchChange = (event) => {
    const newKeywordSearchValue = event.target.value.toLowerCase()
    setLanguage(newKeywordSearchValue)
    console.log("On Search Input Change:", newKeywordSearchValue)

  }

  const filterPostsByLanguage = () => {
    const searchInput = new RegExp(chosenLanguage)
    for (let i = 0; i < languages.length; i++) {
      if (languages[i].match(searchInput)) {
        let displayedPosts = []
        displayedPosts.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
        // return console.log('DisplayedPosts:', displayedPosts)
        console.log("DisplayedPosts:", displayedPosts, "chosenLanguage:", chosenLanguage)
        return displayedPosts.map(x => languageSpecific.push(...x))

      };
    }
  }


  chosenLanguage === 'All Posts' || !chosenLanguage ? currentUserPosts.map(x => languageSpecific.push(x)) : filterPostsByLanguage()

  return (
    <>
      <div>
        <Form>
          {/* drop down for filtering languages */}
          <SelectField
            name="codeLanguage"
            className="language-input"
            onChange={onChange}
            validation={{
              required: true,
            }}
          >
            <option value="" disabled selected>Select Language Filter</option>
            {languages &&
              languages.map((value) => (
                <option
                  value={value}
                  key={value}>
                  {value}
                </option>))}
          </SelectField>
        </Form>
      </div>
      <div>
        {/* input for filtering keywords */}
        <input className="language-input" onChange={onKeywordSearchChange}></input>
      </div>
      <div className="postsContainer">
        <PostMapper filteredPosts={languageSpecific} />
      </div>
    </>
  )
}

export default PostsList