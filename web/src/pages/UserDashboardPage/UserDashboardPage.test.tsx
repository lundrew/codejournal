import { render } from '@redwoodjs/testing/web'

import UserDashboardPage from './UserDashboardPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserDashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserDashboardPage />)
    }).not.toThrow()
  })
})
