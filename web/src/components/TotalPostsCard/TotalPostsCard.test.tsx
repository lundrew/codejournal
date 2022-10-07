import { render } from '@redwoodjs/testing/web'

import TotalPostsCard from './TotalPostsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TotalPostsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TotalPostsCard />)
    }).not.toThrow()
  })
})
