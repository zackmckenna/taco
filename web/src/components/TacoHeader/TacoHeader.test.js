import { render } from '@redwoodjs/testing'

import TacoHeader from './TacoHeader'

describe('TacoHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TacoHeader />)
    }).not.toThrow()
  })
})
