import { render } from '@redwoodjs/testing'

import GeoPermission from './GeoPermission'

describe('GeoPermission', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeoPermission />)
    }).not.toThrow()
  })
})
