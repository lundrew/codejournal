// import humanize from 'humanize-string'
// import { useState } from 'react'
// import { Link, routes } from '@redwoodjs/router'
// import { useMutation } from '@redwoodjs/web'
// import { toast } from '@redwoodjs/web/toast'
// import { QUERY } from 'src/components/Post/PostsCell'
// import './Posts.css'
// import Trash from './../../Assets/trash-can.png'
// import Edit from './../../Assets/edit.png'
// import View from './../../Assets/journal.png'
// import { useAuth } from '@redwoodjs/auth'
// import { Form, InputField, TextField, SelectField } from '@redwoodjs/forms'
// import { languages } from '../PostForm'
// import { Modal } from 'antd'

// const DELETE_POST_MUTATION = gql`
//   mutation DeletePostMutation($id: Int!) {
//     deletePost(id: $id) {
//       id
//     }
//   }
// `

// const MAX_STRING_LENGTH = 150

// // const formatEnum = (values: string | string[] | null | undefined) => {
// //   if (values) {
// //     if (Array.isArray(values)) {
// //       const humanizedValues = values.map((value) => humanize(value))
// //       return humanizedValues.join(', ')
// //     } else {
// //       return humanize(values as string)
// //     }
// //   }
// // }

// const truncate = (text) => {
//   let output = text
//   if (text && text.length > 30) {
//     output = output.substring(0, 30) + '...'
//   }
//   return output
// }

// // const jsonTruncate = (obj) => {
// //   return truncate(JSON.stringify(obj, null, 2))
// // }

// // const timeTruncate = (text) => {
// //   let output = text
// //   if (text && text.length > 3) {
// //     output = output.substring(0, 3) + '...'
// //   }
// //   return output
// // }

// const timeTag = (datetime) => {
//   return (
//     datetime && (
//       <time dateTime={datetime} title={datetime}>
//         {new Date(datetime).toUTCString()}
//       </time>
//     )
//   )
//   // Convert time to browser local time *****
// }

// // const checkboxInputTag = (checked) => {
// //   return <input type="checkbox" checked={checked} disabled />
// // }

// const PostsList = ({ posts }) => {
//   const [deletePost] = useMutation(DELETE_POST_MUTATION, {
//     onCompleted: () => {
//       toast.success('Entry deleted')
//     },
//     onError: (error) => {
//       toast.error(error.message)
//     },
//     // This refetches the query on the list page. Read more about other ways to
//     // update the cache over here:
//     // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
//     refetchQueries: [{ query: QUERY }],
//     awaitRefetchQueries: true,
//   })

//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const showModal = () => {
//     setIsModalOpen(true);
//   }
//   const handleOk = (id) => {
//     deletePost({ variables: { id } })
//     setIsModalOpen(false)
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const { currentUser } = useAuth()

//   const currentUserPosts = []
//   posts &&
//     posts.map((item) => {
//       if (item.authorId === currentUser.id) {
//         currentUserPosts.push(item)
//       }
//     })

//   // const reversePosts = (arr) => {
//   //   let newArr = []
//   //   newArr.push(...arr)
//   //   return newArr.reverse()
//   // }
//   //*** reversePosts function not needed -> currentUserPosts already an array */
//   currentUserPosts.reverse()
//   // once .reverse is ran the array is mutated no need to declare new variable

//   //LANGUAGE FILTER
//   const [chosenLanguage, setLanguage] = useState('')

//   let onChange = (event) => {
//     const newLanguageValue = event.target.value
//     setLanguage(newLanguageValue)
//     console.log("onChange Dropdown Selection:", newLanguageValue)
//   }

//   let onKeywordSearchChange = (event) => {
//     const newKeywordSearchValue = event.target.value.toLowerCase()
//     setLanguage(newKeywordSearchValue)
//     console.log("On Search Input Change:", newKeywordSearchValue)

//   }

//   const searchStringInArray = () => {
//     const searchInput = new RegExp(chosenLanguage)
//     for (let i = 0; i < languages.length; i++) {
//       if (languages[i].match(searchInput)) {
//         let displayedPosts = []
//         displayedPosts.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
//         // return console.log('DisplayedPosts:', displayedPosts)
//         console.log("DisplayedPosts:", displayedPosts, "chosenLanguage:", chosenLanguage)
//         return displayedPosts.map(x => languageSpecific.push(...x))

//       };
//     }
//   }

//   const languageSpecific = []


//   // const searchStringInArray = () => {
//   //   const searchInput = new RegExp(chosenLanguage)
//   //   for (let i = 0; i < languages.length; i++) {
//   //     if (languages[i].match(searchInput)) {
//   //       let displayedPosts = []
//   //       displayedPosts.push(currentUserPosts.filter(x => x.codeLanguage === languages[i]))
//   //       // return console.log('DisplayedPosts:', displayedPosts)
//   //       console.log("DisplayedPosts:", displayedPosts, "chosenLanguage:", chosenLanguage)
//   //       return displayedPosts.map(x => languageSpecific.push(...x))
//   //     };
//   //   }
//   // }

//   chosenLanguage === 'All Posts' || !chosenLanguage ? currentUserPosts.map(x => languageSpecific.push(x)) : searchStringInArray()

//   return (
//     <>
//       <div>
//         <Form>
//           {/* drop down for filtering languages */}
//           <SelectField
//             name="codeLanguage"
//             className="language-input"
//             onChange={onChange}
//             validation={{
//               required: true,
//             }}
//           >
//             <option value="" disabled selected>Select Language Filter</option>
//             {languages &&
//               languages.map((value) => (
//                 <option
//                   value={value}
//                   key={value}>
//                   {value}
//                 </option>))}
//           </SelectField>
//         </Form>
//       </div>
//       <div>
//         {/* input for filtering keywords */}

//         <input className="language-input" onChange={onKeywordSearchChange}></input>
//       </div>
//       <div className="postsContainer">
//         <tbody>
//           {languageSpecific.map((post) => (
//             <tr key={post.id}>
//               <td>{timeTag(post.createdAt)}</td>
//               <td>{truncate(post.title)}</td>
//               <td>{truncate(post.codeLanguage)}</td>
//               <td>
//                 <nav className="rw-table-actions">
//                   <Link
//                     to={routes.post({ id: post.id })}
//                     title={'Show post '}
//                     className="iconPosts"
//                   >
//                     <img src={View} />{' '}
//                   </Link>
//                   <Link
//                     to={routes.editPost({ id: post.id })}
//                     title={'Edit Post'}
//                     className="iconPosts"
//                   >
//                     <img src={Edit} />{' '}
//                   </Link>
//                   <button
//                     type="button"
//                     title={'Delete Post'}
//                     onClick={showModal}
//                     className="iconPosts"
//                   >
//                     {' '}
//                     <img src={Trash} />{' '}
//                   </button>
//                   <Modal
//                     className="modal"
//                     title={post.title}
//                     open={isModalOpen}
//                     onOk={() => handleOk(post.id)}
//                     onCancel={handleCancel}>
//                     <p>'Are you sure you want to delete post '<strong>{post.title}</strong></p>
//                   </Modal>
//                 </nav>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//         {/* <table>
//         <thead className="cardTitle">Entries</thead>
//         <tbody>
//           <th>Date</th>
//           <th>Title</th>
//           <th>Lang</th>
//           <th>&nbsp;</th>
//         </tbody>
//         <tbody>
//           {currentUserPostsReversed.map((post) => (
//             <tr key={post.id}>
//               <td>{timeTag(post.createdAt)}</td>
//               <td>{truncate(post.title)}</td>
//               <td>{truncate(post.codeLanguage)}</td>
//               <td>
//                 <nav className="rw-table-actions">
//                   <Link
//                     to={routes.post({ id: post.id })}
//                     title={'Show post '}
//                     className="iconPosts"
//                   >
//                     <img src={View} />{' '}
//                   </Link>
//                   <Link
//                     to={routes.editPost({ id: post.id })}
//                     title={'Edit Post'}
//                     className="iconPosts"
//                   >
//                     <img src={Edit} />{' '}
//                   </Link>
//                   <button
//                     type="button"
//                     title={'Delete Post'}
//                     onClick={() => onDeleteClick(post.id)}
//                     className="iconPosts"
//                   >
//                     {' '}
//                     <img src={Trash} />{' '}
//                   </button>
//                 </nav>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table> */}
//       </div>
//     </>
//   )
// }

// export default PostsList