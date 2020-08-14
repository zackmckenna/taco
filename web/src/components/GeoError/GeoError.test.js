import { render } from '@redwoodjs/testing'

import GeoError from './GeoError'

describe('GeoError', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeoError />)
    }).not.toThrow()
  })
})
