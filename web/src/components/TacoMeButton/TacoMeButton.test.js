import { render } from '@redwoodjs/testing'

import TacoMeButton from './TacoMeButton'

describe('TacoMeButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TacoMeButton />)
    }).not.toThrow()
  })
})
