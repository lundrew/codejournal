import { render } from '@redwoodjs/testing/web'

import UserPage from './UserPage'

describe('ProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserPage />)
    }).not.toThrow()
  })
})
