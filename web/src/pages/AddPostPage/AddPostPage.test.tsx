import { render } from '@redwoodjs/testing/web'

import AddPostPage from './AddPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AddPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddPostPage />)
    }).not.toThrow()
  })
})
