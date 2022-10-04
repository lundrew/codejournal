import { render } from '@redwoodjs/testing/web'

import PostsListPage from './PostsListPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PostsListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostsListPage />)
    }).not.toThrow()
  })
})
