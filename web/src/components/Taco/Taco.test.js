import { render } from '@redwoodjs/testing'

import Taco from './Taco'

describe('Taco', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Taco />)
    }).not.toThrow()
  })
})
