import { render } from '@redwoodjs/testing/web'

import DashboardPanel from './DashboardPanel'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardPanel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardPanel />)
    }).not.toThrow()
  })
})
